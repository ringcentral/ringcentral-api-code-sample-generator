// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
const queryParams = {
    //page: 1,
    //perPage: 100,
    //usageType: [ 'MainCompanyNumber', 'AdditionalCompanyNumber', 'CompanyNumber', 'DirectNumber', 'CompanyFaxNumber', 'ForwardedNumber', 'ForwardedCompanyNumber', 'ContactCenterNumber', 'ConferencingNumber', 'MeetingsNumber' ]
}

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/phone-number`, queryParams);
