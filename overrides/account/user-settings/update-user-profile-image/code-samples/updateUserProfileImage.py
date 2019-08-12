# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])

builder = rcsdk.create_multipart_builder()

image = ('alice_smith.gif', open('alice_smith.gif','r').read(), 'image/gif')
builder.add(image)

request = builder.request(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image')

resp = platform.send_request(request)