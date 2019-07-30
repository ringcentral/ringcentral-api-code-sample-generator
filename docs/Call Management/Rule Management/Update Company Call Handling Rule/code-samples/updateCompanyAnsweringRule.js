// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const accountId = '<ENTER VALUE>';
const ruleId = '<ENTER VALUE>';

// POST BODY
const body = {
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
    callHandlingAction: 'Operator',
    extension: {
        callerId: '<ENTER VALUE>',
        name: '<ENTER VALUE>'
    },
    greetings: [
        {
            type: '<ENTER VALUE>',
            properties: '<ENTER VALUE>'
        }
    ]
}

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/answering-rule/${ruleId}`, body);
