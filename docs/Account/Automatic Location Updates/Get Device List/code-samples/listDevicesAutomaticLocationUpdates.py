# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'siteId': '<ENTER VALUE>',
    #'featureEnabled': true,
    #'model': '<ENTER VALUE>',
    #'compatibleOnly': true,
    #'searchString': '<ENTER VALUE>',
    #'orderBy': 'name',
    #'perPage': 000,
    #'page': '1'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices', queryParams)
