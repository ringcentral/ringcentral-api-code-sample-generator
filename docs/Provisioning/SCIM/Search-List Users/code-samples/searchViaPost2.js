// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// POST BODY
const body = {
    count: 000,
    filter: '<ENTER VALUE>',
    schemas: [
        'urn:ietf:params:scim:api:messages:2.0:SearchRequest',
    ],
    startIndex: 000
};

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.post(`/scim/v2/Users/.search`, body);
