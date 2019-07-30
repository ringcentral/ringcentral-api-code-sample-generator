// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const accountId = '<ENTER VALUE>';
const extensionId = '<ENTER VALUE>';
const ruleId = '<ENTER VALUE>';

// POST BODY
const body = {
    forwarding: {
        notifyMySoftPhones: true,
        notifyAdminSoftPhones: true,
        softPhonesRingCount: 1,
        ringingMode: 'Sequentially',
        rules: [
            {
                type: '<ENTER VALUE>',
                properties: '<ENTER VALUE>'
            }
        ],
        mobileTimeout: true
    },
    enabled: true,
    name: '<ENTER VALUE>',
    callers: [
        {
            type: '<ENTER VALUE>',
            properties: '<ENTER VALUE>'
        }
    ],
    calledNumbers: [
        {
            type: '<ENTER VALUE>',
            properties: '<ENTER VALUE>'
        }
    ],
    schedule: {
        weeklyRanges: {
            monday: [
                {
                    type: '<ENTER VALUE>',
                    properties: '<ENTER VALUE>'
                }
            ],
            tuesday: [
                {
                    type: '<ENTER VALUE>',
                    properties: '<ENTER VALUE>'
                }
            ],
            wednesday: [
                {
                    type: '<ENTER VALUE>',
                    properties: '<ENTER VALUE>'
                }
            ],
            thursday: [
                {
                    type: '<ENTER VALUE>',
                    properties: '<ENTER VALUE>'
                }
            ],
            friday: [
                {
                    type: '<ENTER VALUE>',
                    properties: '<ENTER VALUE>'
                }
            ],
            saturday: [
                {
                    type: '<ENTER VALUE>',
                    properties: '<ENTER VALUE>'
                }
            ],
            sunday: [
                {
                    type: '<ENTER VALUE>',
                    properties: '<ENTER VALUE>'
                }
            ]
        },
        ranges: [
            {
                type: '<ENTER VALUE>',
                properties: '<ENTER VALUE>'
            }
        ],
        ref: 'BusinessHours'
    },
    callHandlingAction: 'ForwardCalls',
    unconditionalForwarding: {
        phoneNumber: '<ENTER VALUE>'
    },
    queue: {
        transferMode: 'Rotating',
        fixedOrderAgents: [
            {
                type: '<ENTER VALUE>',
                properties: '<ENTER VALUE>'
            }
        ],
        holdAudioInterruptionMode: 'Never',
        holdAudioInterruptionPeriod: 000,
        agentTimeout: 000,
        wrapUpTime: 000,
        holdTime: 000,
        maxCallers: 000,
        maxCallersAction: 'Voicemail'
    },
    voicemail: {
        enabled: true,
        recipient: {
            uri: '<ENTER VALUE>',
            id: '<ENTER VALUE>'
        }
    },
    greetings: [
        {
            type: '<ENTER VALUE>',
            properties: '<ENTER VALUE>'
        }
    ],
    screening: 'Off',
    showInactiveNumbers: true
}

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule/${ruleId}`, body);
