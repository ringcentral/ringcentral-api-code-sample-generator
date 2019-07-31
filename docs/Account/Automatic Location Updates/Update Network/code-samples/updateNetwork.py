# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
networkId = '<ENTER VALUE>'

# POST BODY
body = {
    'name': '<ENTER VALUE>',
    'site': '<ENTER VALUE>',
    'publicIpRanges': [
        {
            'id': '<ENTER VALUE>',
            'startIp': '<ENTER VALUE>',
            'endIp': '<ENTER VALUE>'
        }
    ],
    'privateIpRanges': [
        {
            'id': '<ENTER VALUE>',
            'startIp': '<ENTER VALUE>',
            'endIp': '<ENTER VALUE>'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}')
