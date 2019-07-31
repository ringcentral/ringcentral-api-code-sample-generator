# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
ivrMenuId = '<ENTER VALUE>'

# POST BODY
body = {
    'id': '<ENTER VALUE>',
    'uri': '<ENTER VALUE>',
    'name': '<ENTER VALUE>',
    'extensionNumber': '<ENTER VALUE>',
    'prompt': {
        'mode': 'Audio',
        'audio': {
            'uri': '<ENTER VALUE>',
            'id': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'localeCode': '<ENTER VALUE>'
        },
        'text': '<ENTER VALUE>',
        'language': {
            'uri': '<ENTER VALUE>',
            'id': '<ENTER VALUE>'
        }
    },
    'actions': [
        {
            'input': '<ENTER VALUE>',
            'action': 'Connect',
            'extension': {
                'uri': '<ENTER VALUE>',
                'id': '<ENTER VALUE>'
            },
            'phoneNumber': '<ENTER VALUE>'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}', body)
