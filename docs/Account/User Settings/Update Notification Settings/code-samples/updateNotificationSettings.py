# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# POST BODY
body = {
    'emailAddresses': [
        '<ENTER VALUE>'
    ],
    'smsEmailAddresses': [
        '<ENTER VALUE>'
    ],
    'advancedMode': true,
    'voicemails': {
        'notifyByEmail': true,
        'notifyBySms': true,
        'advancedEmailAddresses': [
            '<ENTER VALUE>'
        ],
        'advancedSmsEmailAddresses': [
            '<ENTER VALUE>'
        ],
        'includeAttachment': true,
        'markAsRead': true
    },
    'inboundFaxes': {
        'notifyByEmail': true,
        'notifyBySms': true,
        'advancedEmailAddresses': [
            '<ENTER VALUE>'
        ],
        'advancedSmsEmailAddresses': [
            '<ENTER VALUE>'
        ],
        'includeAttachment': true,
        'markAsRead': true
    },
    'outboundFaxes': {
        'notifyByEmail': true,
        'notifyBySms': true,
        'advancedEmailAddresses': [
            '<ENTER VALUE>'
        ],
        'advancedSmsEmailAddresses': [
            '<ENTER VALUE>'
        ]
    },
    'inboundTexts': {
        'notifyByEmail': true,
        'notifyBySms': true,
        'advancedEmailAddresses': [
            '<ENTER VALUE>'
        ],
        'advancedSmsEmailAddresses': [
            '<ENTER VALUE>'
        ]
    },
    'missedCalls': {
        'notifyByEmail': true,
        'notifyBySms': true,
        'advancedEmailAddresses': [
            '<ENTER VALUE>'
        ],
        'advancedSmsEmailAddresses': [
            '<ENTER VALUE>'
        ]
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings')
