# RingCentral API Samples

This repository contains scripts for generating sample code to access each of RingCentral's API operations in various programming languages.
A complete list of (and greater detail about) these endpoints can be found on [RingCentral's API Reference](https://developers.ringcentral.com/api-reference/).
It additionally provides scripts to generate markdown documentation correspondent to each operation and a "master lookup table" containing all code samples.

## Setup

Requires [Node.js](https://nodejs.org/en/) (recommended v12.6.0 or higher).

After cloning the repository, navigate to root directory and install the required dependencies using `npm install`.

## Usage

The package contains a number of scripts that each provide (in)dependent functionality

-   `npm run all`
    Runs all of the below scripts, in order of their necessity. Run this if you are not interested in isolating any specific operation.

-   `npm run sync`
    Downloads the .yml specs with a remote copy on RC's GitLab. Remote resources are specified as the environment variables **SWAGGER_SPEC_REMOTE** and **X_TAG_GROUPS_REMOTE**. *NOTE: this step is absolutely necessary before you can run any of the subsequent generation scripts. On timeout or error, ensure you have access to [GitLab](https://git.ringcentral.com/) from your browser, your VPN may need to be enabled.*

-   `npm run defs`
    Generates the object definitions that are consumed and returned by the API. *NOTE: this step is necessary before you can run any of the subsequent generation scripts.*

-   `npm run code`
    Generates the sample code as per the templates in [./tmpl/](./tmpl/) and writes it to the directory specified by the **CODE_SAMPLES_OUTPUT** environment variable (default: [./out/code/](./out/code))

-   `npm run json`
    Generates the "master lookup table" containing code samples for all operations (and in all languages) based on the previously generated code samples. It outputs to the directory specified by the **OUTPUT** environment variable (default: [./out/samples.json](./out/samples.json))

-   `npm run mkdn`
    Generates the "master markdown" documents for each language based on the templates in [./tmpl/markdown/](./tmpl/markdown/). These output to the directory specified by the **MARKDOWN_OUTPUT** environment variable (default: [./out/mkdn/](./out/mkdn/)). These markdown files contain language-specific information and would be useful if bundled inside each language's SDK.

More specific and development only scripts can be found in [./package.json](./package.json)

## Overrides

Sometimes it is necessary to alter the automatically generated code for a specific operation: whether to correct artifacts of an erroneous swagger spec, correct template errors in edge-cases, or any number of other reasons.

To allow for this behavior, this framework allows users to manually override any operation's generated sample code. These overrides can be found in the [./overrides/](./overrides/) directory and follow the same file-hierarchy as the code found in [./out/code/](./out/code/).

During the process of code generation, the script will check for the existence of an override; in the case it is found, the script will simply use the contents of that file in the place of the automatically generated one. Any and all changes to these override files will be copied verbatim to the final output.

## Editing Templates and Adding Additional Languages

-   All templates use (ejs)[https://ejs.co/]

-   To edit the format for an existing language you may edit the code templates in [./tmpl/code/](./tmpl/code/). These changes will be reflected upon the next execution of sample code generation.

-   If you are adding a new language, simply create a new template in [./util/templates/code/]() as well as an object template in [./util/templates/code/](). The code directory contains boilerplates for language-specific SDK calls, and the objects templates define that language's object structure (Ex: Javascript => `{ a: b }`, PHP => `array( a => b ))`. If you want to generate a markdown document to accompany this addition, you must additionally create a template for that language in [./util/templates/markdown/](). The name of the templates will be used as the file suffix for the code samples generated for each language (Ex: Javascript => '.js', PHP => '.php', Python => '.py', CSharp => '.cs', Ruby => '.rb'). Keep this consistent; likewise with the markdown.

## License

MIT
