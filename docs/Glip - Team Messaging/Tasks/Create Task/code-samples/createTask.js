// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const chatId = '<ENTER VALUE>';

// POST BODY
const body = {
    subject: '<ENTER VALUE>',
    assignees: [
        {
            id: '<ENTER VALUE>'
        },
    ],
    completenessCondition: 'Simple',
    startDate: '<ENTER VALUE>',
    dueDate: '<ENTER VALUE>',
    color: 'Black',
    section: '<ENTER VALUE>',
    description: '<ENTER VALUE>',
    recurrence: {
        schedule: 'None',
        endingCondition: 'None',
        endingAfter: 000,
        endingOn: '<ENTER VALUE>'
    },
    attachments: [
        {
            id: '<ENTER VALUE>'
        },
    ]
};

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/tasks`, body);
