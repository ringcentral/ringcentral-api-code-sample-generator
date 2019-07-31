# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'userStatus': 'Offline',
    'dndStatus': 'TakeAllCalls',
    'message': '<ENTER VALUE>',
    'allowSeeMyPresence': true,
    'ringOnMonitoredCall': true,
    'pickUpCallsOnHold': true,
    'activeCalls': [
        {
            'id': '<ENTER VALUE>',
            'direction': 'Inbound',
            'from': '<ENTER VALUE>',
            'fromName': '<ENTER VALUE>',
            'to': '<ENTER VALUE>',
            'toName': '<ENTER VALUE>',
            'startTime': '<ENTER VALUE>',
            'telephonyStatus': '<ENTER VALUE>',
            'sipData': {
                'callId': '<ENTER VALUE>',
                'toTag': '<ENTER VALUE>',
                'fromTag': '<ENTER VALUE>',
                'remoteUri': '<ENTER VALUE>',
                'localUri': '<ENTER VALUE>',
                'rcSessionId': '<ENTER VALUE>'
            },
            'sessionId': '<ENTER VALUE>',
            'terminationType': '<ENTER VALUE>'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence', body)
