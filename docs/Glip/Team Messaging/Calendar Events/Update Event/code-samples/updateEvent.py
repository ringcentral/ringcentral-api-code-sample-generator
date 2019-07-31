# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
eventId = '<ENTER VALUE>'

# POST BODY
body = {
    'id': '<ENTER VALUE>',
    'creatorId': '<ENTER VALUE>',
    'title': '<ENTER VALUE>',
    'startTime': '<ENTER VALUE>',
    'endTime': '<ENTER VALUE>',
    'allDay': true,
    'recurrence': 'None',
    'endingCondition': '<ENTER VALUE>',
    'endingAfter': 000,
    'endingOn': 'None',
    'color': 'Black',
    'location': '<ENTER VALUE>',
    'description': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/glip/events/{eventId}', body)
