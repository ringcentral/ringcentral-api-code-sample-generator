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
    'name': 'My Prompt'
})

attachment = ('myprompt.mp3', open('myprompt.mp3','r').read(), 'audio/mp3')
builder.add(attachment)

request = builder.request(f'/restapi/v1.0/account/{accountId}/ivr-prompts')

resp = platform.send_request(request)
