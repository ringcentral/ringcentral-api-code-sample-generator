# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'homeCountry': '<ENTER VALUE>',
    #'nationalAsPriority': true
}

# POST BODY
body = {
    'originalStrings': [
        '<ENTER VALUE>'
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post('/restapi/v1.0/number-parser/parse', body, queryParams)
