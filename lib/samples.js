/*
    package:            RingCentral API Sample Code Generator
    original author:    https://github.com/drewligman
    description:        Utility module for interfacing with the sample code located in './docs/'
*/

module.exports = {
    xtaggroup: xtaggroup,
    filePathTo: filePathTo,
    dirPathTo: dirPathTo,
    overridePathTo: overridePathTo
}

const path = require('path')
const yaml = require('js-yaml')
const fs = require('fs')

// Creates the reverse of 'x-tag-groups', aka 'tag' => 'x-group-tag' instead of the other way around
var xtaggroup = {}
yaml.safeLoad(fs.readFileSync(path.resolve(`${process.env.DOWNLOADED_SPECS}x-tag-groups.yml`), 'utf8'))['x-tag-groups'].forEach(group => {
    group['tags'].forEach(tag => {
        xtaggroup[tag] = group['name']
    })
})

function dirPathTo(operation, root = process.env.CODE_SAMPLES_OUTPUT) {
    return path.resolve(`${root}${esc(xtaggroup[operation.tags[0]])}/${esc(operation.tags[0])}/${esc(operation.summary)}/code-samples/`)
}

function filePathTo(operation, suffix) {
    return path.resolve(`${dirPathTo(operation)}/${operation.operationId}.${suffix}`)
}

function overridePathTo(operation, suffix) {
    return path.resolve(`${dirPathTo(operation, process.env.OVERRIDES_DIR)}/${operation.operationId}.${suffix}`)
}

// Escapes & canonicalizes names to be used within the FS (unix-esq)
// "Events & Notifications" => "events-notifications"
// "Glip/Team Messaging" => "glip-team-messaging"
function esc(s) {
    return (s || 'undefined').toLowerCase().replace(/[\W]+/g, '-')
}