/*
    Utility Module for handling API response formats (i.e. definitions)
*/

module.exports = {
    generateFullDefinition: generateFullDefinition,
    loadDefinition: loadDefinition,
    getResponseType: getResponseType,
}

const path = require('path')
const yaml = require('js-yaml')
const fs = require('fs')

var spec
var directory = path.resolve(process.env.DEFINITIONS)

function loadSpec() {
    spec = require(path.resolve(`${process.env.LIB_DIR}spec`)).load()
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
