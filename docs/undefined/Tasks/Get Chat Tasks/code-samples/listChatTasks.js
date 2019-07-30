// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const chatId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
const queryParams = {
    //creationTimeTo: '<ENTER VALUE>',
    //creationTimeFrom: '<ENTER VALUE>',
    //creatorId: [ '<ENTER VALUE>' ],
    //status: [ 'Pending', 'InProgress', 'Completed' ],
    //assignmentStatus: 'Unassigned',
    //assigneeId: [ '<ENTER VALUE>' ],
    //assigneeStatus: 'Pending',
    //pageToken: '<ENTER VALUE>',
    //recordCount: 30
}

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();
await platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password });
const r = await platform.get(`/restapi/v1.0/glip/chats/${chatId}/tasks`, queryParams);
