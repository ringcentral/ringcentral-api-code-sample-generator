// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const extensionId = '<ENTER VALUE>';
const accountId = '<ENTER VALUE>';

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();

var FormData = require('form-data');
formData = new FormData();
formData.append('image', require('fs').createReadStream('alice_smith.gif'));

platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password }).then(() => {
    platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/profile-image`, formData).then((r) => {
        // PROCESS RESPONSE
    });
});

