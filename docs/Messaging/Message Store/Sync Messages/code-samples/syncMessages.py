# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'conversationId': 000,
    #'dateFrom': '<ENTER VALUE>',
    #'dateTo': '<ENTER VALUE>',
    #'direction': [ 'Inbound', 'Outbound' ],
    #'distinctConversations': true,
    #'messageType': [ 'Fax', 'SMS', 'VoiceMail', 'Pager', 'Text' ],
    #'recordCount': 000,
    #'syncToken': '<ENTER VALUE>',
    #'syncType': [ 'FSync', 'ISync' ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync')
