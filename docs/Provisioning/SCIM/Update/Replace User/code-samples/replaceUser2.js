// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const id = '<ENTER VALUE>';

// POST BODY
const body = {
    active: true,
    addresses: [
        {
            type: '<ENTER VALUE>',
            required: '<ENTER VALUE>',
            properties: '<ENTER VALUE>'
        }
    ],
    emails: [
        {
            type: '<ENTER VALUE>',
            required: '<ENTER VALUE>',
            properties: '<ENTER VALUE>'
        }
    ],
    externalId: '<ENTER VALUE>',
    id: '<ENTER VALUE>',
    name: {
        familyName: '<ENTER VALUE>',
        givenName: '<ENTER VALUE>'
    },
    phoneNumbers: [
        {
            type: '<ENTER VALUE>',
            required: '<ENTER VALUE>',
            properties: '<ENTER VALUE>'
        }
    ],
    photos: [
        {
            type: '<ENTER VALUE>',
            required: '<ENTER VALUE>',
            properties: '<ENTER VALUE>'
        }
    ],
    schemas: [
        {
            type: '<ENTER VALUE>',
            enum: '<ENTER VALUE>'
        }
    ],
    urn:ietf:params:scim:schemas:extension:enterprise:2.0:User: {
        department: '<ENTER VALUE>'
    },
    userName: '<ENTER VALUE>'
}

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.put(`/scim/v2/Users/${id}`, body);
