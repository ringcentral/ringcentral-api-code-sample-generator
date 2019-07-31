// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const accountId = '<ENTER VALUE>';
const extensionId = '<ENTER VALUE>';

// POST BODY
const body = {
    enabled: true,
    type: '<ENTER VALUE>',
    name: '<ENTER VALUE>',
    callers: [
        {
            callerId: '<ENTER VALUE>',
            name: '<ENTER VALUE>'
        },
    ],
    calledNumbers: [
        {
            phoneNumber: '<ENTER VALUE>'
        },
    ],
    schedule: {
        weeklyRanges: {
            monday: [
                {
                    from: '<ENTER VALUE>',
                    to: '<ENTER VALUE>'
                },
            ],
            tuesday: [
                {
                    from: '<ENTER VALUE>',
                    to: '<ENTER VALUE>'
                },
            ],
            wednesday: [
                {
                    from: '<ENTER VALUE>',
                    to: '<ENTER VALUE>'
                },
            ],
            thursday: [
                {
                    from: '<ENTER VALUE>',
                    to: '<ENTER VALUE>'
                },
            ],
            friday: [
                {
                    from: '<ENTER VALUE>',
                    to: '<ENTER VALUE>'
                },
            ],
            saturday: [
                {
                    from: '<ENTER VALUE>',
                    to: '<ENTER VALUE>'
                },
            ],
            sunday: [
                {
                    from: '<ENTER VALUE>',
                    to: '<ENTER VALUE>'
                },
            ]
        },
        ranges: [
            {
                from: '<ENTER VALUE>',
                to: '<ENTER VALUE>'
            },
        ],
        ref: 'BusinessHours'
    },
    callHandlingAction: 'ForwardCalls',
    forwarding: {
        notifyMySoftPhones: true,
        notifyAdminSoftPhones: true,
        softPhonesRingCount: 000,
        ringingMode: 'Sequentially',
        rules: [
            {
                index: 000,
                ringCount: 000,
                enabled: true,
                forwardingNumbers: [
                    {
                        uri: '<ENTER VALUE>',
                        id: '<ENTER VALUE>',
                        phoneNumber: '<ENTER VALUE>',
                        label: '<ENTER VALUE>',
                        type: 'Home'
                    },
                ]
            },
        ],
        mobileTimeout: true
    },
    unconditionalForwarding: {
        phoneNumber: '<ENTER VALUE>'
    },
    queue: {
        transferMode: 'Rotating',
        fixedOrderAgents: [
            {
                extension: {
                    id: '<ENTER VALUE>',
                    uri: '<ENTER VALUE>',
                    extensionNumber: '<ENTER VALUE>',
                    partnerId: '<ENTER VALUE>'
                },
                index: 000
            },
        ],
        holdAudioInterruptionMode: 'Never',
        holdAudioInterruptionPeriod: 000,
        agentTimeout: 000,
        wrapUpTime: 000,
        holdTime: 000,
        maxCallers: 000,
        maxCallersAction: 'Voicemail'
    },
    transfer: {
        extension: {
            id: '<ENTER VALUE>',
            uri: '<ENTER VALUE>',
            extensionNumber: '<ENTER VALUE>',
            partnerId: '<ENTER VALUE>'
        }
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
            type: 'Introductory',
            usageType: 'UserExtensionAnsweringRule',
            preset: {
                uri: '<ENTER VALUE>',
                id: '<ENTER VALUE>',
                name: '<ENTER VALUE>'
            }
        },
    ],
    screening: 'Off'
};

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule`, body);
