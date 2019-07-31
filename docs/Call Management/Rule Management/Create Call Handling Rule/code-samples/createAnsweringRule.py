# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# POST BODY
body = {
    'enabled': true,
    'type': '<ENTER VALUE>',
    'name': '<ENTER VALUE>',
    'callers': [
        {
            'callerId': '<ENTER VALUE>',
            'name': '<ENTER VALUE>'
        }
    ],
    'calledNumbers': [
        {
            'phoneNumber': '<ENTER VALUE>'
        }
    ],
    'schedule': {
        'weeklyRanges': {
            'monday': [
                {
                    'from': '<ENTER VALUE>',
                    'to': '<ENTER VALUE>'
                }
            ],
            'tuesday': [
                {
                    'from': '<ENTER VALUE>',
                    'to': '<ENTER VALUE>'
                }
            ],
            'wednesday': [
                {
                    'from': '<ENTER VALUE>',
                    'to': '<ENTER VALUE>'
                }
            ],
            'thursday': [
                {
                    'from': '<ENTER VALUE>',
                    'to': '<ENTER VALUE>'
                }
            ],
            'friday': [
                {
                    'from': '<ENTER VALUE>',
                    'to': '<ENTER VALUE>'
                }
            ],
            'saturday': [
                {
                    'from': '<ENTER VALUE>',
                    'to': '<ENTER VALUE>'
                }
            ],
            'sunday': [
                {
                    'from': '<ENTER VALUE>',
                    'to': '<ENTER VALUE>'
                }
            ]
        },
        'ranges': [
            {
                'from': '<ENTER VALUE>',
                'to': '<ENTER VALUE>'
            }
        ],
        'ref': 'BusinessHours'
    },
    'callHandlingAction': 'ForwardCalls',
    'forwarding': {
        'notifyMySoftPhones': true,
        'notifyAdminSoftPhones': true,
        'softPhonesRingCount': 000,
        'ringingMode': 'Sequentially',
        'rules': [
            {
                'index': 000,
                'ringCount': 000,
                'enabled': true,
                'forwardingNumbers': [
                    {
                        'uri': '<ENTER VALUE>',
                        'id': '<ENTER VALUE>',
                        'phoneNumber': '<ENTER VALUE>',
                        'label': '<ENTER VALUE>',
                        'type': 'Home'
                    }
                ]
            }
        ],
        'mobileTimeout': true
    },
    'unconditionalForwarding': {
        'phoneNumber': '<ENTER VALUE>'
    },
    'queue': {
        'transferMode': 'Rotating',
        'fixedOrderAgents': [
            {
                'extension': {
                    'id': '<ENTER VALUE>',
                    'uri': '<ENTER VALUE>',
                    'extensionNumber': '<ENTER VALUE>',
                    'partnerId': '<ENTER VALUE>'
                },
                'index': 000
            }
        ],
        'holdAudioInterruptionMode': 'Never',
        'holdAudioInterruptionPeriod': 000,
        'agentTimeout': 000,
        'wrapUpTime': 000,
        'holdTime': 000,
        'maxCallers': 000,
        'maxCallersAction': 'Voicemail'
    },
    'transfer': {
        'extension': {
            'id': '<ENTER VALUE>',
            'uri': '<ENTER VALUE>',
            'extensionNumber': '<ENTER VALUE>',
            'partnerId': '<ENTER VALUE>'
        }
    },
    'voicemail': {
        'enabled': true,
        'recipient': {
            'uri': '<ENTER VALUE>',
            'id': '<ENTER VALUE>'
        }
    },
    'greetings': [
        {
            'type': 'Introductory',
            'usageType': 'UserExtensionAnsweringRule',
            'preset': {
                'uri': '<ENTER VALUE>',
                'id': '<ENTER VALUE>',
                'name': '<ENTER VALUE>'
            }
        }
    ],
    'screening': 'Off'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule')
