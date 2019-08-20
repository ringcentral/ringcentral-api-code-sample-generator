/*
    package:            RingCentral API Sample Code Generator
    original author:    https://github.com/drewligman
    description:        Entry point, contains jump-off points for every function in the repository

    to use:
        Specifiy specific scripts on the command line: [-spec, -defs, -code, -json]
            $ node index -spec
        Order of arguments determines the order of execution
*/

const path = require('path')
const yaml = require('js-yaml')
const fs = require('fs')

if(require.main === module) {
    require('dotenv').config()
    // we slice the first two args ('node' invocation and the current file 'index.js')
    var commands = process.argv.slice(2).map(arg => arg.replace('-', ''));
    if (commands.length == 0) {
        console.log('No arguments specifed: exiting...')
        return
    }
    run(commands)
} else {
    module.exports = {
        run: run
    }
}

function run(args) {
    // Expects an array of arguments
    // Array.prototype.shift() is the equivalent to a popFront()
    let arg = args.shift()
    if (arg) {
        let p
        if (arg === 'spec' || arg === 'download-spec') p = downloadSpec()
        else if (arg === 'xtag' || arg === 'download-xtaggroups') p = downloadXTagGroups()
        else if (arg === 'defs' || arg === 'generate-defs') generateDefs()
        else if (arg === 'code' || arg === 'generate-code-samples') generateCodeSamples()
        else if (arg === 'json' || arg === 'generate-lookup-json') generateLookupJson()
        else if (arg === 'mkdn' || arg === 'generate-markdown-docs') generateMarkdown()
        else p = console.log('Invalid argument:', arg)

        // Some of the later functions rely on the execution of earlier ones, we use Promises to ensure their completion
        if (p) {
            p.then(() => run(args))
        } else {
            run(args)
        }
    }
}

/*
    Borrowed heavily from code written by Tyler Liu:
    https://github.com/ringcentral/RingCentral.Net/blob/master/code-generator/adjust.js

    This function automatically downloads the latest OpenAPI spec from GITLAB and prepares
    it to be consumed by the sample code generator. The remote "OpenAPI" spec resource can be
    edited in '.env'
*/
async function downloadSpec() {
    return new Promise((resolve, reject) => {
        console.log(' + downloading spec')

        const https = require(path.resolve(`${process.env.LIB_DIR}https`)) // Not to be confused with Node's built-in HTTPs module

        var spec
        https.get(process.env.SWAGGER_SPEC_REMOTE).then((data) => {
            spec = yaml.safeLoad(data)

            // Some manual changes are necessary. These are copied directly from Tyler Liu's code and may
            // eventually become uncessary when the remote OpenAPI spec is updated to fix these issues.

            delete spec.paths['/scim/health'] // Replaced by '/scim/v2/health'
            delete spec.paths['/scim/Users'] // Replaced by '/scim/v2/Users'
            delete spec.paths['/scim/ServiceProviderConfig']

            // https://git.ringcentral.com/platform/api-metadata-specs/issues/48
            {
                let post = spec.paths['/restapi/v1.0/account/{accountId}/greeting'].post
                post.parameters = post.parameters.filter(p => p.name !== 'answeringRuleId')
                post.parameters.push({
                    name: 'answeringRule',
                    in: 'formData',
                    '$ref': '#/definitions/CustomCompanyGreetingAnsweringRuleInfo'
                })
            } {
                let post = spec.paths['/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting'].post
                post.parameters = post.parameters.filter(p => p.name !== 'answeringRuleId')
                post.parameters.push({
                    name: 'answeringRule',
                    in: 'formData',
                    '$ref': '#/definitions/CustomGreetingAnsweringRuleInfoRequest'
                })
            }

            spec.definitions['CustomCompanyGreetingAnsweringRuleInfo'] = spec.definitions['CustomGreetingAnsweringRuleInfoRequest'] = {
                type: 'object',
                properties: {
                    id: {
                        type: 'string'
                    }
                }
            }

            fs.mkdirSync(path.resolve(process.env.DOWNLOADED_SPECS), { recursive: true })

            fs.writeFileSync(path.resolve(`${process.env.DOWNLOADED_SPECS}rc-platform.yml`), yaml.safeDump(spec))

            console.log(' - spec downloaded')

            resolve()
        }).catch(e => {
            reject('Operation Failed: gitlab unavailable, ensure you are connected to Corp VPN')
        })
    })
}

/*
    This function downloads the latest (master) version of the template used by the Api Reference
    and copies the 'x-tag-groups' property to a local file. The remote resource can be specified in
    the '.env'
*/
async function downloadXTagGroups() {
    return new Promise((resolve, reject) => {
        console.log(' + downloading tag groups')

        var specTemplate

        const https = require(path.resolve(`${process.env.LIB_DIR}https`))
        https.get(process.env.X_TAG_GROUPS_REMOTE).then((data) => {
            xtaggroups = { 'x-tag-groups': yaml.safeLoad(data)['x-tag-groups'] }
            fs.writeFileSync(path.resolve(`${process.env.DOWNLOADED_SPECS}x-tag-groups.yml`), yaml.safeDump(xtaggroups))

            console.log(' - tag groups downloaded')

            resolve()
        }).catch(e => {
            reject('Operation Failed: gitlab unavailable, ensure you are connected to Corp VPN')
        })
    })
}


/*
    This function generates the full API response type definitions from the rc-platform.yml
    These response definitions are stored at './out/defs/RESPONSE_TYPE'
*/
function generateDefs() {
    console.log(' + generating definitions')

    const dPath = path.resolve(process.env.DEFINITIONS)

    const definitions = require(path.resolve(`${process.env.LIB_DIR}definitions`))
    const spec = require(path.resolve(`${process.env.LIB_DIR}spec`)).load()

    fs.mkdirSync(dPath, { recursive: true })

    // Generate all Definitions
    for (const definition in spec.definitions) {
        definitions.generateFullDefinition(definition)
    }

    console.log(' - definitions generated')
}



/*
    This function generates sample code for access to every API endpoint in multiple languages:
        (Js/Node, C#, Python, PHP)

    it consumes './out/spec/platform.yml' and produces the samples located in './out/code-samples'
*/
function generateCodeSamples() {
    console.log(' + generating code samples')

    const samples = require(path.resolve(`${process.env.LIB_DIR}samples`))
    const endpoints = require(path.resolve(`${process.env.LIB_DIR}spec`)).load().paths

    // Only parses languages for which there exists a template
    let languages = []
    fs.readdirSync(`${process.env.TMPL_DIR}code`).forEach(filename => {
        languages.push(filename.substring(0, filename.indexOf('.')))
    })

    const ejs = require('ejs')

    for (const language of languages) {
        for (const url in endpoints) {
            const endpoint = endpoints[url]
            // Ignore OAuth endpoints
            // ex: '/restapi/oauth/authorize' gets ignored
            if (url.match(/^'?\/[^\/]*\/oauth/)) continue

            for (const method in endpoint) {
                const operation = endpoint[method]
                if (operation.deprecated) continue

                const tag = operation.tags[0]

                const opDir = samples.dirPathTo(operation)

                // opPath is the file-system path for a specific endpoint
                // ex: './Glip/Posts/Create Post/code-samples/createGlipPost.js'
                //
                //      ./                                      (root)
                //          ./glip-team-messaging/              (x-tag-group)
                //              ./chats
                //              ./posts/                        (tag)
                //                  './create-post/'            (summary)
                //                      ./code-samples
                //                          ./createGlipPost.js (operationId)
                //                  './delete-post/'
                //                  './get-post/'
                //          ./messaging/

                // if the folder to the file doesn't already exist, create it
                fs.mkdirSync(opDir, { recursive: true })

                let override = samples.overridePathTo(operation, language)
                let code

                // If an override exists for this specific operation, do not generate a new one
                // simply copy from the override directory
                if (!fs.existsSync(override)) {
                    // Render and write the template for the current language
                    code = ejs.render(fs.readFileSync(path.resolve(`${process.env.TMPL_DIR}code/${language}.ejs`), 'utf8'), {
                        ejs: ejs,
                        url: url,
                        method: method,
                        operation: operation,
                        defs: require(path.resolve(`${process.env.LIB_DIR}definitions`)),
                        object: fs.readFileSync(path.resolve(`${process.env.TMPL_DIR}objects/${language}.ejs`), 'utf8')
                    })
                } else {
                    code = fs.readFileSync(override)
                }

                fs.writeFileSync(samples.filePathTo(operation, language), code)
            }
        }
    }

    console.log(' - code samples generated')
}



/*
    This file generates the 'lookup table' master json file containing all code samples for use by the Api Reference Site
        (as of July 19, 2019, this lookup file is necessary but may potentially be phased out in the future)

    it consumes the sample code located in './out/code' and outputs to './out/samples.json'
*/
function generateLookupJson() {
    console.log(' + generating lookup table')

    const samples = require(path.resolve(`${process.env.LIB_DIR}samples`))
    const endpoints = require(path.resolve(`${process.env.LIB_DIR}spec`)).load().paths

    let friendlyName = {
        'js': 'javascript',
        'cs': 'csharp',
        'py': 'python',
        'php': 'php',
        'rb': 'ruby',
    }

    var lookup = {}

    const languages = fs.readdirSync(path.resolve(`${process.env.TMPL_DIR}code`)).map(file => {
        return file.substring(0, file.indexOf('.'))
    })

    // for every language for which there exists a template in './tmpl/code'
    for (const language of languages) {
        lookup[friendlyName[language]] = {}
        for (const url in endpoints) {
            const endpoint = endpoints[url]

            // these last two loops are just looping through every possible operation
            for (const method in endpoint) {
                const operation = endpoint[method]

                const opPath = samples.filePathTo(operation, language)
                if(!fs.existsSync(opPath)) continue

                code = fs.readFileSync(opPath, 'utf8')
                lookup[friendlyName[language]][operation.operationId] = code
            }
        }
    }

    fs.writeFileSync(path.resolve(`${process.env.OUTPUT}samples.json`), JSON.stringify(lookup, null, 2))

    console.log(' - lookup table generated')
}



function generateMarkdown() {
    console.log(' + generating markdown')

    const languages = fs.readdirSync(path.resolve(`${process.env.TMPL_DIR}markdown`)).map(file => {
        return file.substring(0, file.indexOf('.'))
    })

    const ejs = require('ejs')

    for (const language of languages) {
        let md = ejs.render(fs.readFileSync(`${process.env.TMPL_DIR}/markdown/${language}.ejs`, 'utf8'), {
            fs: fs,
            path: path,
            samples: require(path.resolve(`${process.env.LIB_DIR}samples`)),
            defs: require(path.resolve(`${process.env.LIB_DIR}definitions`)),
            endpoints: require(path.resolve(`${process.env.LIB_DIR}spec`)).load().paths
        })

        fs.mkdirSync(path.resolve(process.env.MARKDOWN_OUTPUT), { recursive: true })
        fs.writeFileSync(path.resolve(`${process.env.MARKDOWN_OUTPUT}/samples-${language}.md`), md)
    }

    console.log(' - markdown generated')
}
