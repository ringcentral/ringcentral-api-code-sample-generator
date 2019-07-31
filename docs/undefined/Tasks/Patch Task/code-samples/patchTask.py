# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
taskId = '<ENTER VALUE>'

# POST BODY
body = {
    'subject': '<ENTER VALUE>',
    'assignees': [
        {
            'id': '<ENTER VALUE>'
        }
    ],
    'completenessCondition': 'Simple',
    'startDate': '<ENTER VALUE>',
    'dueDate': '<ENTER VALUE>',
    'color': 'Black',
    'section': '<ENTER VALUE>',
    'description': '<ENTER VALUE>',
    'recurrence': {
        'schedule': 'None',
        'endingCondition': 'None',
        'endingAfter': 000,
        'endingOn': '<ENTER VALUE>'
    },
    'attachments': [
        {
            'id': '<ENTER VALUE>'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.patch(f'/restapi/v1.0/glip/tasks/{taskId}')
