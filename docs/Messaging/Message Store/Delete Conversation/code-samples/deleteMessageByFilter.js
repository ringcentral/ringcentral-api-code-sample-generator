// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const extensionId = '<ENTER VALUE>';
const accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
const queryParams = {
    //conversationId: [ '<ENTER VALUE>' ],
    //dateTo: '<ENTER VALUE>',
    //type: 'Fax'
}

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store`, queryParams);
