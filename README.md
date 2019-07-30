# RingCentral API Samples

This repository contains scripts for generating sample code to access each of RingCentral's API operations in various programming languages.
A complete list of (and greater detail about) these endpoints can be found on [RingCentral's API Reference](https://developers.ringcentral.com/api-reference/).
It additionally provides scripts to generate markdown documentation correspondent to each operation and a "master lookup table" containing all code samples.

## Setup

Recommended with use of [Node.js](https://nodejs.org/en/) v12.6.0 or higher.
Requires [Yarn](https://yarnpkg.com/en/docs/install).

After cloning the repository, navigate to root directory and install the required dependencies using `yarn install`.

## Usage

The package contains a number of scripts that each provide independent functionality

-   `npm run all`
    Runs all of the below scripts, in order of their necessity. Run this if you are not interested in isolating any specific operation.

-   `npm run sync`
    Syncs the local .yml specs with a remote copy on RC's GitLab. *NOTE: this step is absolutely necessary before you can run any of the subsequent generation scripts. On timeout or error, ensure you have access to [GitLab](https://git.ringcentral.com/) from your browser, your VPN may need to be enabled.*

-   `npm run defs`
    Generates the object definitions that are consumed and returned by the API. *NOTE: this step is necessary before you can run any of the subsequent generation scripts.*

-   `npm run code`
    Generates the sample code as per the templates in [./util/templates/code/]() and writes it to the file system in the [docs]() directory. *NOTE: if a code sample already exists for a certain operation, it will NOT be regenerated. This allows the manual overriding of a specific operation which will persist through following runs.*

-   `npm run json`
    Generates the "master lookup table" containing code samples for all languages for all operations based on the samples on file. It outputs to [./bin/samples.json]().

-   `npm run mkdn`
    Generates the "master markdown" documents for each language based on the templates in [./util/templates/markdown/](). These output to [./bin/samples-\<lang\>.md]() and could perhaps be bundled with each SDK.

More specific and development only scripts can be found in [./package.json]()

## Editing Code / Adding Additional Languages

-   To edit a sample for a specific operation, it is sufficient to edit it directly on the file system. Simply navigate to an operation within [./docs]() and make the required changes. All future generations (json, mkdn) will reflect these changes. Please push these manual changes back to GitHub for others.

-   To edit the format for an existing language you may edit the code templates in [./util/templates/code/](). These changes will not be reflected in the future code generation unless you delete existing samples. This behavior is not recommended as it may also delete others' manual changes, be very careful if you choose to make these universal changes.

-   If you are adding a new language, simply create a new template in [./util/templates/code/](), and regenerate the required documents. If you want to generate a markdown document to accompany this addition, you must additionally create a template for that language in [./util/templates/markdown/](). The name of the templates will be used as the file suffix for the code samples generated for each language (Ex: Javascript => '.js', PHP => '.php', Python => '.py', CSharp => '.cs', Ruby => '.rb') so try to keep this consistent - likewise with the markdown.

## License

MIT