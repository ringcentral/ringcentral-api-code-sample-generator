# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'addedExtensions': {
        'id': '<ENTER VALUE>',
        'uri': '<ENTER VALUE>',
        'extensionNumber': '<ENTER VALUE>',
        'type': '<ENTER VALUE>',
        'callDirection': 'Outbound'
    },
    'updatedExtensions': {
        'id': '<ENTER VALUE>',
        'uri': '<ENTER VALUE>',
        'extensionNumber': '<ENTER VALUE>',
        'type': '<ENTER VALUE>',
        'callDirection': 'Outbound'
    },
    'removedExtensions': {
        'id': '<ENTER VALUE>',
        'uri': '<ENTER VALUE>',
        'extensionNumber': '<ENTER VALUE>',
        'type': '<ENTER VALUE>',
        'callDirection': 'Outbound'
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/call-recording/bulk-assign', body)
