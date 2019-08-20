// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const accountId = '<ENTER VALUE>';

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();

var FormData = require('form-data');
formData = new FormData();
formData.append('json', new Buffer(JSON.stringify({
    type: 'Company',
})), {
    filename: 'request.json',
    contentType: 'application/json'
});
formData.append('binary', require('fs').createReadStream('mygreeting.wav'));

platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password }).then(() => {
    platform.post(`/restapi/v1.0/account/${accountId}/greeting`, formData).then((r) => {
        // HANDLE RESPONSE
    });
});

