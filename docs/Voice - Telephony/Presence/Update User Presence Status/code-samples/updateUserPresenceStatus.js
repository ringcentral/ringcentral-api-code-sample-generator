// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const extensionId = '<ENTER VALUE>';
const accountId = '<ENTER VALUE>';

// POST BODY
const body = {
    userStatus: 'Offline',
    dndStatus: 'TakeAllCalls',
    message: '<ENTER VALUE>',
    allowSeeMyPresence: true,
    ringOnMonitoredCall: true,
    pickUpCallsOnHold: true,
    activeCalls: [
        {
            id: '<ENTER VALUE>',
            direction: 'Inbound',
            from: '<ENTER VALUE>',
            fromName: '<ENTER VALUE>',
            to: '<ENTER VALUE>',
            toName: '<ENTER VALUE>',
            startTime: '<ENTER VALUE>',
            telephonyStatus: '<ENTER VALUE>',
            sipData: {
                callId: '<ENTER VALUE>',
                toTag: '<ENTER VALUE>',
                fromTag: '<ENTER VALUE>',
                remoteUri: '<ENTER VALUE>',
                localUri: '<ENTER VALUE>',
                rcSessionId: '<ENTER VALUE>'
            },
            sessionId: '<ENTER VALUE>',
            terminationType: '<ENTER VALUE>'
        },
    ]
};

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/presence`, body);
