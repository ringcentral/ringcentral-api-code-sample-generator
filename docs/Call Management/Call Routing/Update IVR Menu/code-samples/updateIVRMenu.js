// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const accountId = '<ENTER VALUE>';
const ivrMenuId = '<ENTER VALUE>';

// POST BODY
const body = {
    id: '<ENTER VALUE>',
    uri: '<ENTER VALUE>',
    name: '<ENTER VALUE>',
    extensionNumber: '<ENTER VALUE>',
    prompt: {
        mode: 'Audio',
        audio: {
            uri: '<ENTER VALUE>',
            id: '<ENTER VALUE>',
            name: '<ENTER VALUE>',
            localeCode: '<ENTER VALUE>'
        },
        text: '<ENTER VALUE>',
        language: {
            uri: '<ENTER VALUE>',
            id: '<ENTER VALUE>'
        }
    },
    actions: [
        {
            type: '<ENTER VALUE>',
            properties: '<ENTER VALUE>'
        }
    ]
}

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/ivr-menus/${ivrMenuId}`, body);
