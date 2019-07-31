# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
contactId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'dialingPlan': '<ENTER VALUE>'
}

# POST BODY
body = {
    'firstName': '<ENTER VALUE>',
    'lastName': '<ENTER VALUE>',
    'middleName': '<ENTER VALUE>',
    'nickName': '<ENTER VALUE>',
    'company': '<ENTER VALUE>',
    'jobTitle': '<ENTER VALUE>',
    'email': '<ENTER VALUE>',
    'email2': '<ENTER VALUE>',
    'email3': '<ENTER VALUE>',
    'birthday': '<ENTER VALUE>',
    'webPage': '<ENTER VALUE>',
    'notes': '<ENTER VALUE>',
    'homePhone': '<ENTER VALUE>',
    'homePhone2': '<ENTER VALUE>',
    'businessPhone': '<ENTER VALUE>',
    'businessPhone2': '<ENTER VALUE>',
    'mobilePhone': '<ENTER VALUE>',
    'businessFax': '<ENTER VALUE>',
    'companyPhone': '<ENTER VALUE>',
    'assistantPhone': '<ENTER VALUE>',
    'carPhone': '<ENTER VALUE>',
    'otherPhone': '<ENTER VALUE>',
    'otherFax': '<ENTER VALUE>',
    'callbackPhone': '<ENTER VALUE>',
    'homeAddress': {
        'street': '<ENTER VALUE>',
        'city': '<ENTER VALUE>',
        'state': '<ENTER VALUE>',
        'zip': '<ENTER VALUE>'
    },
    'businessAddress': {
        'street': '<ENTER VALUE>',
        'city': '<ENTER VALUE>',
        'state': '<ENTER VALUE>',
        'zip': '<ENTER VALUE>'
    },
    'otherAddress': {
        'street': '<ENTER VALUE>',
        'city': '<ENTER VALUE>',
        'state': '<ENTER VALUE>',
        'zip': '<ENTER VALUE>'
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}')
