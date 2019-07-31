// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const accountId = '<ENTER VALUE>';

// POST BODY
const body = {
    chassisId: '<ENTER VALUE>',
    name: '<ENTER VALUE>',
    site: {
        id: '<ENTER VALUE>',
        name: '<ENTER VALUE>'
    },
    emergencyAddress: {
        country: '<ENTER VALUE>',
        countryId: '<ENTER VALUE>',
        countryIsoCode: '<ENTER VALUE>',
        countryName: '<ENTER VALUE>',
        state: '<ENTER VALUE>',
        stateId: '<ENTER VALUE>',
        stateIsoCode: '<ENTER VALUE>',
        stateName: '<ENTER VALUE>',
        city: '<ENTER VALUE>',
        street: '<ENTER VALUE>',
        street2: '<ENTER VALUE>',
        zip: '<ENTER VALUE>'
    }
};

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/emergency-address-auto-update/switches`, body);
