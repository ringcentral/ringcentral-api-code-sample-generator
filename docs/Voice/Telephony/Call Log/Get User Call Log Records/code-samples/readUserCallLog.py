# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'extensionNumber': '<ENTER VALUE>',
    #'showBlocked': 'true',
    #'phoneNumber': '<ENTER VALUE>',
    #'direction': [ 'Inbound', 'Outbound' ],
    #'sessionId': '<ENTER VALUE>',
    #'type': [ 'Voice', 'Fax' ],
    #'transport': [ 'PSTN', 'VoIP' ],
    #'view': 'Simple',
    #'withRecording': true,
    #'recordingType': 'Automatic',
    #'dateTo': '<ENTER VALUE>',
    #'dateFrom': '<ENTER VALUE>',
    #'page': '1',
    #'perPage': '100',
    #'showDeleted': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log', queryParams)
