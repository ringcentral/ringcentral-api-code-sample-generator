# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'schedule': {
        'weeklyRanges': {
            'monday': [
                {
                    'from': '<ENTER VALUE>',
                    'to': '<ENTER VALUE>'
                }
            ],
            'tuesday': [
                {
                    'from': '<ENTER VALUE>',
                    'to': '<ENTER VALUE>'
                }
            ],
            'wednesday': [
                {
                    'from': '<ENTER VALUE>',
                    'to': '<ENTER VALUE>'
                }
            ],
            'thursday': [
                {
                    'from': '<ENTER VALUE>',
                    'to': '<ENTER VALUE>'
                }
            ],
            'friday': [
                {
                    'from': '<ENTER VALUE>',
                    'to': '<ENTER VALUE>'
                }
            ],
            'saturday': [
                {
                    'from': '<ENTER VALUE>',
                    'to': '<ENTER VALUE>'
                }
            ],
            'sunday': [
                {
                    'from': '<ENTER VALUE>',
                    'to': '<ENTER VALUE>'
                }
            ]
        }
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/business-hours', body)
