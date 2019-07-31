# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# POST BODY
body = {
    'uri': '<ENTER VALUE>',
    'byDevice': [
        {
            'device': {
                'id': '<ENTER VALUE>',
                'uri': '<ENTER VALUE>',
                'phoneNumber': '<ENTER VALUE>'
            },
            'callerId': {
                'type': '<ENTER VALUE>',
                'phoneInfo': {
                    'id': '<ENTER VALUE>',
                    'uri': '<ENTER VALUE>',
                    'phoneNumber': '<ENTER VALUE>'
                }
            }
        }
    ],
    'byFeature': [
        {
            'feature': 'RingOut',
            'callerId': {
                'type': '<ENTER VALUE>',
                'phoneInfo': {
                    'id': '<ENTER VALUE>',
                    'uri': '<ENTER VALUE>',
                    'phoneNumber': '<ENTER VALUE>'
                }
            }
        }
    ],
    'extensionNameForOutboundCalls': true,
    'extensionNumberForInternalCalls': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id', body)
