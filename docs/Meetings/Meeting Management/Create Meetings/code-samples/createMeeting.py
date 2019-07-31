# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'topic': '<ENTER VALUE>',
    'meetingType': '<ENTER VALUE>',
    'schedule': {
        'startTime': '<ENTER VALUE>',
        'durationInMinutes': 000,
        'timeZone': {
            'uri': '<ENTER VALUE>',
            'id': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'description': '<ENTER VALUE>'
        }
    },
    'password': '<ENTER VALUE>',
    'host': {
        'id': '<ENTER VALUE>'
    },
    'allowJoinBeforeHost': true,
    'startHostVideo': true,
    'startParticipantsVideo': true,
    'usePersonalMeetingId': true,
    'audioOptions': [
        '<ENTER VALUE>'
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting', body)
