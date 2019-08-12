# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])

builder = rcsdk.create_multipart_builder()
builder.set_body({
    'type': 'Company'
})

binary = ('mygreeting.wav', open('mygreeting.wav','r').read(), 'audio/wav')
builder.add(binary)

request = builder.request(f'/restapi/v1.0/account/{accountId}/greeting')

resp = platform.send_request(request)
