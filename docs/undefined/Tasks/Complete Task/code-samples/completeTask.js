// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const taskId = '<ENTER VALUE>';

// POST BODY
const body = {
    status: 'Incomplete',
    assignees: [
        {
            type: '<ENTER VALUE>',
            properties: '<ENTER VALUE>'
        }
    ],
    completenessPercentage: 000
}

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.post(`/restapi/v1.0/glip/tasks/${taskId}/complete`, body);
