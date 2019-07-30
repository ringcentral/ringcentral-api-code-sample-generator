/*
    Utility Module for handling API response formats (i.e. definitions)
*/

module.exports = {
    generateFullDefinition: generateFullDefinition,
    loadDefinition: loadDefinition,
    getResponseType: getResponseType,
    renderGetDef: renderGetDef,
    renderPostDef: renderPostDef,
}

const path = require('path')
const yaml = require('js-yaml')
const fs = require('fs')

var spec
var directory = path.resolve('./bin/definitions/')

function loadSpec() {
    spec = require(path.resolve('./util/OpenAPISpec')).load()
}


// Definitions contain '$ref' fields that reference other definitions
// This Function recursively calculates those references
function generateFullDefinition(responseType) {
    let definition = loadDefinition(responseType)
    // Already exists in FS, no need to regenerate
    if (definition) {
        return definition
    }

    if (!spec) loadSpec()
    definition = spec.definitions[responseType]

    for (key in definition.properties) {
        let property = definition.properties[key]
        let ref

        if (ref = property['$ref']) {}
        else if ((property = property.items) && (ref = property['$ref'])) {}
        else continue

        // '$ref' is of the form '#/definitions/RESPONSE_TYPE', we just want the 'RESPONSE_TYPE'
        let subdef = generateFullDefinition(ref.substring(ref.lastIndexOf('/') + 1))
        delete property['$ref']
        for (key in subdef) property[key] = subdef[key]
    }

    fs.writeFileSync(path.resolve(`${directory}/${responseType}.yml`), yaml.safeDump(definition))
    return definition
}

// Load defintion from FS if it exists, null otherwise
function loadDefinition(responseType) {
    const defPath = path.resolve(`${directory}/${responseType}.yml`)
    if (fs.existsSync(defPath)) {
        return yaml.safeLoad(fs.readFileSync(defPath, 'utf8'))
    }
}

function getResponseType(responses) {
    const responseSchema = (responses[200] || responses[201] || responses[202] || responses[204] || responses[205] || responses[302] || responses.default).schema
    if (responseSchema) {
        let ref
        if (responseSchema.type === 'string' && responseSchema.format === 'binary') {
            return 'byte[]'
        } else if (ref = responseSchema['$ref']) {
            return ref.substring(ref.lastIndexOf('/') + 1)
        }
    }
}

function renderGetObj(ref, depth = 1) {
    const def = loadDefinition(ref.substring(ref.lastIndexOf('/')))
    let paramBuilder = []
    let property
    for (name in def.properties) {
        property = def.properties[name]
        paramBuilder.push(`${'    '.repeat(depth)}//${name}: ${value},`)
    }
    return '{\n' + paramBuilder.join('') + '}\n'
}

function renderGetDef(queryParams) {
    let queryParam
    let paramBuilder = []
    for (let i in queryParams) {
        queryParam = queryParams[i]
        let value = `'<ENTER VALUE>'`
        if (queryParam.type === 'boolean') value = queryParam.default || 'true'
        if (queryParam.type === 'integer') value = queryParam.default || '000'
        if (queryParam.enum) value = `'${queryParam.enum[0]}'`
        if (queryParam.type === 'array') {
            value = '[ ' + (queryParam.items.enum ? queryParam.items.enum.map(i => `'` + i + `'`).join(', ') : value) + ' ]'
        }
        paramBuilder.push(`    //${queryParam.name}: ${value}${(i < queryParams.length - 1) ? ',\n' : '\n'}`)
    }
    return '{\n' + paramBuilder.join('') + '}'
}

function renderPostDef(def, depth = 1) {
    let paramBuilder = []
    let property
    for (const name in def.properties) {
        property = def.properties[name]
        let value = `'<ENTER VALUE>'`
        if (property.type === 'boolean') value = property.default || 'true'
        if (property.type === 'integer') value = property.default || '000'
        if (property.enum) {
            value = property.default ? `'${property.default}'` : `'${property.enum[0]}'`
        }
        if (property.type === 'object') value = renderPostDef(property, depth + 1)
        if (property.type === 'array') {
            value = `[\n${'    '.repeat(depth + 1)}${renderPostDef({
                properties: property.items
            }, depth + 2)}\n${'    '.repeat(depth)}]`
        }
        paramBuilder.push(`\n${'    '.repeat(depth)}${name}: ${value},`)
    }
    let last
    paramBuilder.push((last = paramBuilder.pop()).substr(0, last.length - 1))
    return `{${paramBuilder.join('')}\n${'    '.repeat(depth - 1)}}`
}
