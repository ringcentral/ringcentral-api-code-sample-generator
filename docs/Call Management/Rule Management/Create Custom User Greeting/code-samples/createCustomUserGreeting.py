# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

answeringRuleId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])

builder = rcsdk.create_multipart_builder()
builder.set_body({
    'type': 'Voicemail',
    'answeringRule': { 'id': answeringRuleId }
})

attachment = ('mygreeting.wav', open('mygreeting.wav','r').read(), 'audio/wav')
builder.add(attachment)

request = builder.request(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting')

resp = platform.send_request(request)