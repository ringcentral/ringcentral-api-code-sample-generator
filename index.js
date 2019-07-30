/*
    Entry point, the contains jump-off points for every function in the repository

    Specifiy specific scripts on the command line: [-spec, -defs, -code, -json]
        $ node index -spec
    Order of arguments determines the order of execution
*/

const path = require('path')
const yaml = require('js-yaml')
const fs = require('fs')

// Splits command line args, running the corresponding scripts
// we slice the first two args ('node' invocation and the current file 'index.js')
var commands = process.argv.slice(2).map(arg => arg.replace('-', ''));
if (commands.length == 0) {
    console.log('No arguments specifed: exiting...')
    return
}
run(commands)

function run(args) {
    // Array.prototype.shift() == popFront()
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

    This function automatically downloads the latest OpenAPI spec from
    "https://netstorage.ringcentral.com/dpw/api-reference/specs/rc-platform.yml"
    and prepares it to be consumed by the sample code generator
*/
async function downloadSpec() {
    return new Promise((resolve, reject) => {
        console.log(' + downloading spec')

        const https = require(path.resolve('./util/https')) // Not to be confused with Node's built-in HTTPs module

        var spec
        https.get('https://git.ringcentral.com/dpw-xmn/dpw-api-explorer/raw/master/packages/dpw-api-explorer/swagger-files/rc-platform.yml').then((data) => {
            spec = yaml.safeLoad(data)

            // remove duplicate scim endpoints
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

            // Add additional definitions
            spec.definitions['CustomCompanyGreetingAnsweringRuleInfo'] = spec.definitions['CustomGreetingAnsweringRuleInfoRequest'] = {
                type: 'object',
                properties: {
                    id: {
                        type: 'string'
                    }
                }
            }

            fs.writeFileSync(path.resolve('./bin/rc-platform.yml'), yaml.safeDump(spec))

            console.log(' - spec downloaded')

            resolve()
        }).catch(e => {
            reject('Operation Failed: gitlab unavailable, ensure you are connected to Corp VPN')
        })
    })
}

/*
    This function downloads the latest (master) version of the template used by the Api Reference
    and copies the 'x-tag-groups' property to a local file.
*/
async function downloadXTagGroups() {
    return new Promise((resolve, reject) => {
        console.log(' + downloading tag groups')

        var specTemplate

        const https = require(path.resolve('./util/https'))
        https.get('https://git.ringcentral.com/platform/api-metadata-specs/raw/master/scripts/api-reference-template.yml').then((data) => {
            xtaggroups = { 'x-tag-groups': yaml.safeLoad(data)['x-tag-groups'] }
            fs.writeFileSync(path.resolve('./bin/x-tag-groups.yml'), yaml.safeDump(xtaggroups))

            console.log(' - tag groups downloaded')

            resolve()
        }).catch(e => {
            reject('Operation Failed: gitlab unavailable, ensure you are connected to Corp VPN')
        })
    })
}


/*
    This function generates the full API response type definitions from the rc-platform.yml
    These response definitions are stored at './bin/definitions/RESPONSE_TYPE'
*/
function generateDefs() {
    console.log(' + generating definitions')

    const dPath = path.resolve('./bin/definitions/')

    const definitions = require(path.resolve('./util/definitions'))
    const spec = require(path.resolve('./util/OpenAPISpec')).load()

    if (!fs.existsSync(dPath)) {
        // These 'Sync' methods, despite being usually avoided to avoid process-blocking
        // are all perfectly fine within the context of run-once-then-exit
        fs.mkdirSync(dPath)
    }

    // Generate all Definitions
    for (const definition in spec.definitions) {
        definitions.generateFullDefinition(definition)
    }

    console.log(' - definitions generated')
}



/*
    This function generates sample code for access to every API endpoint in multiple languages:
        (Js/Node, C#, Python, PHP)

    it consumes './bin/platform.yml' and produces the samples located in './docs/'
*/
function generateCodeSamples() {
    console.log(' + generating code samples')

    const samples = require(path.resolve('./util/samples'))
    const endpoints = require(path.resolve('./util/OpenAPISpec')).load().paths

    // Only parses languages for which there exists a template in './util/templates'
    let languages = []
    fs.readdirSync('./util/templates/code').forEach(filename => {
        languages.push(filename.substring(0, filename.indexOf('.')))
    })

    // Creates the reverse of 'x-tag-groups', aka 'tag' => 'x-group-tag' instead of the other way around
    let xtaggroup = samples.xtaggroup

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
                // ex: './docs/Glip/Posts/Create Post/code-samples/createGlipPost.js'
                //
                //      ./docs                                  (root)
                //          ./Glip/                             (x-tag-group)
                //              ./Chats
                //              ./Posts/                        (tag)
                //                  './Create Post/'            (summary)
                //                      ./code-samples
                //                          ./createGlipPost.js (operationId)
                //                  './Delete Post/'
                //                  './Get Post/'
                //          ./Messaging/

                const opPath = samples.filePathTo(operation, language)

                // if the folder to the file doesn't already exist, create it
                fs.mkdirSync(opDir, {
                    recursive: true
                })

                // Only output the code if there exists none already: to allow manual
                // overrides of the auto-generated samples in edge cases
                if (!fs.existsSync(opPath)) {

                    // Render and write the template located at './util/templates/' for the current language
                    const code = ejs.render(fs.readFileSync(path.resolve(`./util/templates/code/${language}.ejs`), 'utf8'), {
                        url: url,
                        method: method,
                        operation: operation,
                        defs: require(path.resolve('./util/definitions'))
                    })

                    fs.writeFileSync(opPath, code)
                }
            }
        }
    }

    console.log(' - code samples generated')
}



/*
    This file generates the 'lookup table' master json file containing all code samples for use by the Api Reference Site
        (as of July 19, 2019, this lookup file is necessary but may potentially be phased out in the future)

    it consumes the sample code located in './docs' and outputs to './bin/samples.json'
*/
function generateLookupJson() {
    console.log(' + generating lookup table')

    const samples = require(path.resolve('./util/samples'))
    const endpoints = require(path.resolve('./util/OpenAPISpec')).load().paths

    // Only parses languages for which there exists a template in './util/templates'
    let friendlyName = {
        'js': 'javascript',
        'cs': 'csharp',
        'py': 'python',
        'php': 'php',
        'rb': 'ruby',
    }

    var lookup = {}
    let xtaggroup = samples.xtaggroup

    const languages = fs.readdirSync(path.resolve('./util/templates/code')).map(file => {
        return file.substring(0, file.indexOf('.'))
    })

    // for every language for which there exists a template in './util/templates'
    for (const language of languages) {
        lookup[friendlyName[language]] = {}

        // for every endpoint
        for (const url in endpoints) {
            const endpoint = endpoints[url]

            // and for every method at those endpoints
            // these last two loops are essentially just looping through every possible operation
            for (const method in endpoint) {
                const operation = endpoint[method]

                const opPath = samples.filePathTo(operation, language)
                if(!fs.existsSync(opPath)) continue

                code = fs.readFileSync(opPath, 'utf8')
                lookup[friendlyName[language]][operation.operationId] = code
            }
        }
    }

    fs.writeFileSync(path.resolve('./bin/samples.json'), JSON.stringify(lookup, null, 2))

    console.log(' - lookup table generated')
}



function generateMarkdown() {
    console.log(' + generating markdown')

    const languages = fs.readdirSync(path.resolve('./util/templates/markdown')).map(file => {
        return file.substring(0, file.indexOf('.'))
    })

    const ejs = require('ejs')

    for (const language of languages) {
        let md = ejs.render(fs.readFileSync(`./util/templates/markdown/${language}.ejs`, 'utf8'), {
            fs: fs,
            path: path,
            samples: require(path.resolve('./util/samples')),
            defs: require(path.resolve('./util/definitions')),
            endpoints: require(path.resolve('./util/OpenAPISpec')).load().paths
        })

        fs.writeFileSync(path.resolve(`./bin/samples-${language}.md`), md)
    }

    console.log(' - markdown generated')
}
