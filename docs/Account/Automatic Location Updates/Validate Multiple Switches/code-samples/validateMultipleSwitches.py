# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'records': [
        {
            'id': '<ENTER VALUE>',
            'chassisId': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'site': {
                'id': '<ENTER VALUE>',
                'name': '<ENTER VALUE>'
            },
            'emergencyAddress': {
                'country': '<ENTER VALUE>',
                'countryId': '<ENTER VALUE>',
                'countryIsoCode': '<ENTER VALUE>',
                'countryName': '<ENTER VALUE>',
                'state': '<ENTER VALUE>',
                'stateId': '<ENTER VALUE>',
                'stateIsoCode': '<ENTER VALUE>',
                'stateName': '<ENTER VALUE>',
                'city': '<ENTER VALUE>',
                'street': '<ENTER VALUE>',
                'street2': '<ENTER VALUE>',
                'zip': '<ENTER VALUE>'
            }
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-validate')
