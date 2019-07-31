# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
subscriptionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'aggregated': true
}

# POST BODY
body = {
    'eventFilters': [
        '<ENTER VALUE>'
    ],
    'deliveryMode': {
        'transportType': 'PubNub',
        'address': '<ENTER VALUE>',
        'encryption': true,
        'certificateName': '<ENTER VALUE>',
        'registrationId': '<ENTER VALUE>',
        'verificationToken': '<ENTER VALUE>'
    },
    'expiresIn': '604800'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/subscription/{subscriptionId}')
