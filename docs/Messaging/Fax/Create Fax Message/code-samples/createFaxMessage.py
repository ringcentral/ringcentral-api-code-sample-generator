# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

recipient = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])

builder = rcsdk.create_multipart_builder()
builder.set_body({
    'to': [{'phoneNumber': recipient}],
    'faxResolution': "High",
    'coverPageText': "This is a demo Fax page from Python"
})

attachment = ('fax.jpg', open('fax.jpg','r').read(), 'image/jpeg')
builder.add(attachment)

request = builder.request(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/fax')

resp = platform.send_request(request)
