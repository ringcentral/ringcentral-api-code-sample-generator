// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
const accountId = '<ENTER VALUE>';
const extensionId = '<ENTER VALUE>';

const recipient = '<ENTER VALUE>';

const SDK = require('ringcentral');
const rcsdk = new SDK({server: process.env.serverURL, appKey: process.env.clientId, appSecret: process.env.clientSecret});
const platform = rcsdk.platform();

var FormData = require('form-data');
formData = new FormData();
formData.append('json', new Buffer(JSON.stringify({
    to: [ {'phoneNumber': recipient} ],
    faxResolution: 'High',
    coverPageText: "This is a demo Fax page from Node JS"
})), {
    filename: 'request.json',
    contentType: 'application/json'
});
formData.append('attachment', require('fs').createReadStream('fax.jpg'));

platform.login({ username: process.env.username, extension: process.env.extension, password: process.env.password }).then(() => {
    platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/fax`, formData).then((r) => {
        // HANDLE REPONSE
    });
});
