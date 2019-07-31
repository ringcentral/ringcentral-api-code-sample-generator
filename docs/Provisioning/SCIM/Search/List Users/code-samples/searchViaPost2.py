# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# POST BODY
body = {
    'count': 000,
    'filter': '<ENTER VALUE>',
    'schemas': [
        'urn:ietf:params:scim:api:messages:2.0:SearchRequest'
    ],
    'startIndex': 000
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post('/scim/v2/Users/.search')
