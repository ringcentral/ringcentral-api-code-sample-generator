// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// POST BODY
const body = {
    eventFilters: [
        '<ENTER VALUE>',
    ],
    deliveryMode: {
        transportType: 'PubNub',
        address: '<ENTER VALUE>',
        encryption: true,
        certificateName: '<ENTER VALUE>',
        registrationId: '<ENTER VALUE>',
        verificationToken: '<ENTER VALUE>'
    },
    expiresIn: 604800
};

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.post(`/restapi/v1.0/subscription`, body);
