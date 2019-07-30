/*
    Utility Module for handling OpenAPI Spec related functionality
*/

module.exports = {
    load: load
}

const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

function load() {
    return yaml.safeLoad(fs.readFileSync(path.resolve('./bin/rc-platform.yml'), 'utf8'))
}
