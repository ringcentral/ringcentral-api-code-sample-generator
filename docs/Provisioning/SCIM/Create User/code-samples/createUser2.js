// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// POST BODY
const body = {
    active: true,
    addresses: [
        {
            country: '<ENTER VALUE>',
            locality: '<ENTER VALUE>',
            postalCode: '<ENTER VALUE>',
            region: '<ENTER VALUE>',
            streetAddress: '<ENTER VALUE>',
            type: 'work'
        },
    ],
    emails: [
        {
            type: 'work',
            value: '<ENTER VALUE>'
        },
    ],
    externalId: '<ENTER VALUE>',
    id: '<ENTER VALUE>',
    name: {
        familyName: '<ENTER VALUE>',
        givenName: '<ENTER VALUE>'
    },
    phoneNumbers: [
        {
            type: 'work',
            value: '<ENTER VALUE>'
        },
    ],
    photos: [
        {
            type: 'photo',
            value: '<ENTER VALUE>'
        },
    ],
    schemas: [
        'urn:ietf:params:scim:schemas:core:2.0:User',
    ],
    urn:ietf:params:scim:schemas:extension:enterprise:2.0:User: {
        department: '<ENTER VALUE>'
    },
    userName: '<ENTER VALUE>'
};

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.post(`/scim/v2/Users`, body);
