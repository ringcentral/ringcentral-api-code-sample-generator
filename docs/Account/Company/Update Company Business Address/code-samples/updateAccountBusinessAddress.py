# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'company': '<ENTER VALUE>',
    'email': '<ENTER VALUE>',
    'businessAddress': {
        'country': '<ENTER VALUE>',
        'state': '<ENTER VALUE>',
        'city': '<ENTER VALUE>',
        'street': '<ENTER VALUE>',
        'zip': '<ENTER VALUE>'
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/business-address', body)
