# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'extensionId': '<ENTER VALUE>',
    #'email': '<ENTER VALUE>',
    #'page': 1,
    #'perPage': 100,
    #'status': [ 'Enabled', 'Disabled', 'NotActivated', 'Unassigned' ],
    #'type': [ 'User', 'FaxUser', 'VirtualUser', 'DigitalUser', 'Department', 'Announcement', 'Voicemail', 'SharedLinesGroup', 'PagingOnly', 'IvrMenu', 'ApplicationExtension', 'ParkLocation', 'Limited', 'Bot' ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension', queryParams)
