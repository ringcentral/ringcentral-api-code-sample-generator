// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const accountId = '<ENTER VALUE>';
const extensionId = '<ENTER VALUE>';

// POST BODY
const body = {
    status: 'Disabled',
    statusInfo: {
        comment: '<ENTER VALUE>',
        reason: 'Voluntarily'
    },
    reason: '<ENTER VALUE>',
    comment: '<ENTER VALUE>',
    extensionNumber: '<ENTER VALUE>',
    contact: {
        firstName: '<ENTER VALUE>',
        lastName: '<ENTER VALUE>',
        company: '<ENTER VALUE>',
        jobTitle: '<ENTER VALUE>',
        email: '<ENTER VALUE>',
        businessPhone: '<ENTER VALUE>',
        mobilePhone: '<ENTER VALUE>',
        businessAddress: {
            country: '<ENTER VALUE>',
            state: '<ENTER VALUE>',
            city: '<ENTER VALUE>',
            street: '<ENTER VALUE>',
            zip: '<ENTER VALUE>'
        },
        emailAsLoginName: true,
        pronouncedName: {
            type: 'Default',
            text: '<ENTER VALUE>'
        },
        department: '<ENTER VALUE>'
    },
    regionalSettings: {
        homeCountry: {
            id: '<ENTER VALUE>'
        },
        timezone: {
            id: '<ENTER VALUE>'
        },
        language: {
            id: '<ENTER VALUE>'
        },
        greetingLanguage: {
            id: '<ENTER VALUE>'
        },
        formattingLocale: {
            id: '<ENTER VALUE>'
        },
        timeFormat: '12h'
    },
    setupWizardState: 'NotStarted',
    partnerId: '<ENTER VALUE>',
    ivrPin: '<ENTER VALUE>',
    password: '<ENTER VALUE>',
    callQueueInfo: {
        slaGoal: 000,
        slaThresholdSeconds: 000,
        includeAbandonedCalls: true,
        abandonedThresholdSeconds: 000
    },
    transition: [
        {
            description: '<ENTER VALUE>',
            type: '<ENTER VALUE>',
            properties: '<ENTER VALUE>'
        }
    ]
}

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}`, body);
