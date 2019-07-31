// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const accountId = '<ENTER VALUE>';
const extensionId = '<ENTER VALUE>';

// POST BODY
const body = {
    uri: '<ENTER VALUE>',
    byDevice: [
        {
            device: {
                id: '<ENTER VALUE>',
                uri: '<ENTER VALUE>',
                phoneNumber: '<ENTER VALUE>'
            },
            callerId: {
                type: '<ENTER VALUE>',
                phoneInfo: {
                    id: '<ENTER VALUE>',
                    uri: '<ENTER VALUE>',
                    phoneNumber: '<ENTER VALUE>'
                }
            }
        },
    ],
    byFeature: [
        {
            feature: 'RingOut',
            callerId: {
                type: '<ENTER VALUE>',
                phoneInfo: {
                    id: '<ENTER VALUE>',
                    uri: '<ENTER VALUE>',
                    phoneNumber: '<ENTER VALUE>'
                }
            }
        },
    ],
    extensionNameForOutboundCalls: true,
    extensionNumberForInternalCalls: true
};

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-id`, body);
