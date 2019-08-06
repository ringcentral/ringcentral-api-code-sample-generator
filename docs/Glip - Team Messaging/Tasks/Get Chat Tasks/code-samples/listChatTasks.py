# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'creationTimeTo': 'now',
    #'creationTimeFrom': '<ENTER VALUE>',
    #'creatorId': [ string ],
    #'status': [ 'Pending', 'InProgress', 'Completed' ],
    #'assignmentStatus': 'Unassigned',
    #'assigneeId': [ string ],
    #'assigneeStatus': 'Pending',
    #'pageToken': '<ENTER VALUE>',
    #'recordCount': 30
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/glip/chats/{chatId}/tasks', queryParams)
