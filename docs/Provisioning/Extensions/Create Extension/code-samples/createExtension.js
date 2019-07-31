// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const accountId = '<ENTER VALUE>';

// POST BODY
const body = {
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
    extensionNumber: '<ENTER VALUE>',
    password: '<ENTER VALUE>',
    references: [
        {
            ref: '<ENTER VALUE>',
            type: 'PartnerId'
        },
    ],
    roles: [
        {
            uri: '<ENTER VALUE>',
            id: '<ENTER VALUE>'
        },
    ],
    regionalSettings: {
        homeCountry: {
            id: '<ENTER VALUE>',
            uri: '<ENTER VALUE>',
            name: '<ENTER VALUE>',
            isoCode: '<ENTER VALUE>',
            callingCode: '<ENTER VALUE>'
        },
        timezone: {
            id: '<ENTER VALUE>',
            uri: '<ENTER VALUE>',
            name: '<ENTER VALUE>',
            description: '<ENTER VALUE>'
        },
        language: {
            id: '<ENTER VALUE>',
            uri: '<ENTER VALUE>',
            greeting: true,
            formattingLocale: true,
            localeCode: '<ENTER VALUE>',
            name: '<ENTER VALUE>',
            ui: true
        },
        greetingLanguage: {
            id: '<ENTER VALUE>',
            localeCode: '<ENTER VALUE>',
            name: '<ENTER VALUE>'
        },
        formattingLocale: {
            id: '<ENTER VALUE>',
            localeCode: '<ENTER VALUE>',
            name: '<ENTER VALUE>'
        },
        timeFormat: '12h'
    },
    setupWizardState: 'NotStarted',
    status: 'Enabled',
    statusInfo: {
        comment: '<ENTER VALUE>',
        reason: 'Voluntarily'
    },
    type: 'User',
    hidden: true
};

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension`, body);
