# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'allCountries': true,
    #'countryId': 000,
    #'page': 1,
    #'perPage': 100,
    #'withPhoneNumbers': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/dictionary/state', queryParams)
