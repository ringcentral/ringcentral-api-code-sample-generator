// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const deviceId = '<ENTER VALUE>';
const accountId = '<ENTER VALUE>';

// POST BODY
const body = {
    emergencyServiceAddress: {
        customerName: '<ENTER VALUE>',
        street: '<ENTER VALUE>',
        street2: '<ENTER VALUE>',
        city: '<ENTER VALUE>',
        zip: '<ENTER VALUE>',
        state: '<ENTER VALUE>',
        country: '<ENTER VALUE>'
    },
    extension: {
        id: '<ENTER VALUE>'
    },
    phoneLines: {
        phoneLines: [
            {
                type: '<ENTER VALUE>',
                properties: '<ENTER VALUE>'
            }
        ]
    },
    useAsCommonPhone: true
}

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/device/${deviceId}`, body);
