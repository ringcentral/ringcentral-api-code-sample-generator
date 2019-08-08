# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
id = '<ENTER VALUE>'

# POST BODY
body = {
    'active': true,
    'addresses': [
        {
            'country': '<ENTER VALUE>',
            'locality': '<ENTER VALUE>',
            'postalCode': '<ENTER VALUE>',
            'region': '<ENTER VALUE>',
            'streetAddress': '<ENTER VALUE>',
            'type': 'work'
        }
    ],
    'emails': [
        {
            'type': 'work',
            'value': '<ENTER VALUE>'
        }
    ],
    'externalId': '<ENTER VALUE>',
    'id': '<ENTER VALUE>',
    'name': {
        'familyName': '<ENTER VALUE>',
        'givenName': '<ENTER VALUE>'
    },
    'phoneNumbers': [
        {
            'type': 'work',
            'value': '<ENTER VALUE>'
        }
    ],
    'photos': [
        {
            'type': 'photo',
            'value': '<ENTER VALUE>'
        }
    ],
    'schemas': [
        'urn:ietf:params:scim:schemas:core:2.0:User'
    ],
    'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User': {
        'department': '<ENTER VALUE>'
    },
    'userName': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/scim/v2/Users/{id}', body)
