/*
    Utility module for interfacing with the sample code located in './docs/'
*/

module.exports = {
    xtaggroup: xtaggroup,
    filePathTo: filePathTo,
    dirPathTo: dirPathTo
}

const path = require('path')
const yaml = require('js-yaml')
const fs = require('fs')

// Creates the reverse of 'x-tag-groups', aka 'tag' => 'x-group-tag' instead of the other way around
var xtaggroup = {}
yaml.safeLoad(fs.readFileSync(path.resolve('./bin/x-tag-groups.yml'), 'utf8'))['x-tag-groups'].forEach(group => {
    group['tags'].forEach(tag => {
        xtaggroup[tag] = group['name']
    })
})

function dirPathTo(operation) {
    return path.resolve(`./docs/${(xtaggroup[operation.tags[0]] || 'UNDEFINED').replace(/\//g, ' - ')}/${operation.tags[0]}/${operation.summary}/code-samples/`)
}

function filePathTo(operation, suffix) {
    return path.resolve(`${dirPathTo(operation)}/${operation.operationId}.${suffix}`)
}
