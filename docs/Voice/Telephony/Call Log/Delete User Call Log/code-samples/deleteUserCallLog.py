# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'dateTo': '<ENTER VALUE>',
    #'phoneNumber': '<ENTER VALUE>',
    #'extensionNumber': '<ENTER VALUE>',
    #'type': [ 'Voice', 'Fax' ],
    #'direction': [ 'Inbound', 'Outbound' ],
    #'dateFrom': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log')
