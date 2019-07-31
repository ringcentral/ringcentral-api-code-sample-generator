# RingCentral Python SDK Code Samples



## Get API Versions

HTTP get `/restapi`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetVersionsResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/API-Info/readAPIVersions) in API Explorer.

## Get Version Info

HTTP get `/restapi/{apiVersion}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
apiVersion = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/{apiVersion}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetVersionResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/API-Info/readAPIVersion) in API Explorer.

## Get Service Status

HTTP get `/restapi/v1.0/status`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/status')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/API-Info/readAPIStatus) in API Explorer.

## Get User Call Log Records

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'extensionNumber': '<ENTER VALUE>',
    #'showBlocked': true,
    #'phoneNumber': '<ENTER VALUE>',
    #'direction': [ 'Inbound', 'Outbound' ],
    #'sessionId': '<ENTER VALUE>',
    #'type': [ 'Voice', 'Fax' ],
    #'transport': [ 'PSTN', 'VoIP' ],
    #'view': 'Simple',
    #'withRecording': true,
    #'recordingType': 'Automatic',
    #'dateTo': '<ENTER VALUE>',
    #'dateFrom': '<ENTER VALUE>',
    #'page': 1,
    #'perPage': 100,
    #'showDeleted': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/UserCallLogResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/readUserCallLog) in API Explorer.

## Delete User Call Log

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log`

```python
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
r = platform.delete(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log', queryParams)
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/deleteUserCallLog) in API Explorer.

## Sync User Call Log

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log-sync`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'syncType': [ 'FSync', 'ISync' ],
    #'syncToken': '<ENTER VALUE>',
    #'dateFrom': '<ENTER VALUE>',
    #'recordCount': 000,
    #'statusGroup': [ 'Missed', 'All' ],
    #'view': 'Simple',
    #'showDeleted': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log-sync', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallLogSync.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/syncUserCallLog) in API Explorer.

## Get User Call Record

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
callRecordId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'view': 'Simple'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/UserCallLogRecord.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/readUserCallRecord) in API Explorer.

## Get User Active Calls

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'direction': [ 'Inbound', 'Outbound' ],
    #'view': 'Simple',
    #'type': [ 'Voice', 'Fax' ],
    #'page': 1,
    #'perPage': 100
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ActiveCallsResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/listExtensionActiveCalls) in API Explorer.

## Get Company Call Log Records

HTTP get `/restapi/v1.0/account/{accountId}/call-log`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'extensionNumber': '<ENTER VALUE>',
    #'phoneNumber': '<ENTER VALUE>',
    #'direction': [ 'Inbound', 'Outbound' ],
    #'type': [ 'Voice', 'Fax' ],
    #'view': 'Simple',
    #'withRecording': true,
    #'recordingType': 'Automatic',
    #'dateFrom': '<ENTER VALUE>',
    #'dateTo': '<ENTER VALUE>',
    #'page': 1,
    #'perPage': 100,
    #'sessionId': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/call-log', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/AccountCallLogResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/readCompanyCallLog) in API Explorer.

## Get Company Call Log Record(s)

HTTP get `/restapi/v1.0/account/{accountId}/call-log/{callRecordId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
callRecordId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/call-log/{callRecordId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CompanyCallLogRecord.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/readCompanyCallRecord) in API Explorer.

## Get Company Active Calls

HTTP get `/restapi/v1.0/account/{accountId}/active-calls`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'direction': [ 'Inbound', 'Outbound' ],
    #'view': 'Simple',
    #'type': [ 'Voice', 'Fax' ],
    #'transport': [ 'PSTN', 'VoIP' ],
    #'page': 1,
    #'perPage': 100
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/active-calls', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ActiveCallsResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/listCompanyActiveCalls) in API Explorer.

## Get Call Recording

HTTP get `/restapi/v1.0/account/{accountId}/recording/{recordingId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
recordingId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/recording/{recordingId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetCallRecordingResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Recordings/readCallRecording) in API Explorer.

## Get Call Recordings Data

HTTP get `/restapi/v1.0/account/{accountId}/recording/{recordingId}/content`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
recordingId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/recording/{recordingId}/content')
```

You can get response binary data by `binary = r.response().content`

[Try it out](https://developer.ringcentral.com/api-reference/Call-Recordings/listCallRecordingData) in API Explorer.

## Create SMS/MMS Message

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/sms`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# POST BODY
body = {
    'from': {
        'phoneNumber': '<ENTER VALUE>'
    },
    'to': [
        {
            'phoneNumber': '<ENTER VALUE>'
        }
    ],
    'text': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/sms', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetMessageInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SMS/createSMSMessage) in API Explorer.

## Create Internal Text Message

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# POST BODY
body = {
    'from': {
        'extensionId': '<ENTER VALUE>'
    },
    'replyOn': 000,
    'text': '<ENTER VALUE>',
    'to': [
        {
            'extensionId': '<ENTER VALUE>'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetMessageInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Pager-Messages/createInternalTextMessage) in API Explorer.

## Create Fax Message

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/fax`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/fax')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/FaxResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Fax/createFaxMessage) in API Explorer.

## Get Fax Cover Page List

HTTP get `/restapi/v1.0/dictionary/fax-cover-page`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'page': 1,
    #'perPage': 100
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/dictionary/fax-cover-page', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ListFaxCoverPagesResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Fax/listFaxCoverPages) in API Explorer.

## Get Message List

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'availability': [ 'Alive', 'Deleted', 'Purged' ],
    #'conversationId': 000,
    #'dateFrom': '<ENTER VALUE>',
    #'dateTo': '<ENTER VALUE>',
    #'direction': [ 'Inbound', 'Outbound' ],
    #'distinctConversations': true,
    #'messageType': [ 'Fax', 'SMS', 'VoiceMail', 'Pager', 'Text' ],
    #'readStatus': [ 'Read', 'Unread' ],
    #'page': 1,
    #'perPage': 100,
    #'phoneNumber': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetMessageList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/listMessages) in API Explorer.

## Delete Conversation

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'conversationId': [ string ],
    #'dateTo': '<ENTER VALUE>',
    #'type': 'All'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store', queryParams)
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/deleteMessageByFilter) in API Explorer.

## Get Message

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
messageId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetMessageInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/readMessage) in API Explorer.

## Update Message(s)

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
messageId = '<ENTER VALUE>'

# POST BODY
body = {
    'readStatus': 'Read'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetMessageInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/updateMessage) in API Explorer.

## Delete Message

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
messageId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'purge': true,
    #'conversationId': 000
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}', queryParams)
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/deleteMessage) in API Explorer.

## Get Message Content

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
attachmentId = '<ENTER VALUE>'
messageId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'contentDisposition': 'Inline'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}', queryParams)
```

You can get response binary data by `binary = r.response().content`

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/readMessageContent) in API Explorer.

## Sync Messages

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'conversationId': 000,
    #'dateFrom': '<ENTER VALUE>',
    #'dateTo': '<ENTER VALUE>',
    #'direction': [ 'Inbound', 'Outbound' ],
    #'distinctConversations': true,
    #'messageType': [ 'Fax', 'SMS', 'VoiceMail', 'Pager', 'Text' ],
    #'recordCount': 000,
    #'syncToken': '<ENTER VALUE>',
    #'syncType': [ 'FSync', 'ISync' ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetMessageSyncResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/syncMessages) in API Explorer.

## Get Message Store Configuration

HTTP get `/restapi/v1.0/account/{accountId}/message-store-configuration`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/message-store-configuration')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/MessageStoreConfiguration.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/readMessageStoreConfiguration) in API Explorer.

## Update Message Store Configuration

HTTP put `/restapi/v1.0/account/{accountId}/message-store-configuration`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'retentionPeriod': 000
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/message-store-configuration', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/MessageStoreConfiguration.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/updateMessageStoreConfiguration) in API Explorer.

## Make RingOut Call

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# POST BODY
body = {
    'from': {
        'phoneNumber': '<ENTER VALUE>',
        'forwardingNumberId': '<ENTER VALUE>'
    },
    'to': {
        'phoneNumber': '<ENTER VALUE>'
    },
    'callerId': {
        'phoneNumber': '<ENTER VALUE>'
    },
    'playPrompt': true,
    'country': {
        'id': '<ENTER VALUE>'
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetRingOutStatusResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/RingOut/createRingOutCall) in API Explorer.

## Get RingOut Call Status

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
ringoutId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetRingOutStatusResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/RingOut/readRingOutCallStatus) in API Explorer.

## Cancel RingOut Call

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
ringoutId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/RingOut/deleteRingOutCall) in API Explorer.

## Get Contact List

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'startsWith': '<ENTER VALUE>',
    #'sortBy': [ 'FirstName', 'LastName', 'Company' ],
    #'page': 1,
    #'perPage': 100,
    #'phoneNumber': [ string ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ContactList.json)

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/listContacts) in API Explorer.

## Create Contact

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

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
r = platform.post(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact', body, queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/PersonalContactResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/createContact) in API Explorer.

## Get Contact

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
contactId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/PersonalContactResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/readContact) in API Explorer.

## Update Contact

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`

```python
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
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}', body, queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/PersonalContactResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/updateContact) in API Explorer.

## Delete Contact

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
contactId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/deleteContact) in API Explorer.

## Address Book Synchronization

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book-sync`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'syncType': [ 'FSync', 'ISync' ],
    #'syncToken': '<ENTER VALUE>',
    #'perPage': 000,
    #'pageId': 000
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book-sync', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/AddressBookSync.json)

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/syncAddressBook) in API Explorer.

## Get Favorite Contact List

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/FavoriteContactList.json)

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/listFavoriteContacts) in API Explorer.

## Update Favorite Contact List

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# POST BODY
body = {
    'records': [
        {
            'id': '<ENTER VALUE>',
            'extensionId': '<ENTER VALUE>',
            'contactId': '<ENTER VALUE>'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/FavoriteContactList.json)

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/updateFavoriteContactList) in API Explorer.

## Search Company Directory Entries

HTTP post `/restapi/v1.0/account/{accountId}/directory/entries/search`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'searchString': '<ENTER VALUE>',
    'showFederated': true,
    'extensionType': 'User',
    'orderBy': [
        {
            'index': 000,
            'fieldName': 'firstName',
            'direction': 'Asc'
        }
    ],
    'page': 000,
    'perPage': 000
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/directory/entries/search', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/DirectoryResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Internal-Contacts/searchDirectoryEntries) in API Explorer.

## Get Corporate Directory Entry

HTTP get `/restapi/v1.0/account/{accountId}/directory/entries/{entryId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
entryId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/directory/entries/{entryId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ContactResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Internal-Contacts/readDirectoryEntry) in API Explorer.

## Get Company Directory Entries

HTTP get `/restapi/v1.0/account/{accountId}/directory/entries`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'showFederated': true,
    #'type': 'User',
    #'page': '1',
    #'perPage': 1000,
    #'siteId': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/directory/entries', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/DirectoryResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Internal-Contacts/listDirectoryEntries) in API Explorer.

## Get Account Federation

HTTP get `/restapi/v1.0/account/{accountId}/directory/federation`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/directory/federation')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/FederationResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Internal-Contacts/readAccountFederation) in API Explorer.

## Get User Presence Status

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'detailedTelephonyState': true,
    #'sipData': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetPresenceInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Presence/readUserPresenceStatus) in API Explorer.

## Update User Presence Status

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'userStatus': 'Offline',
    'dndStatus': 'TakeAllCalls',
    'message': '<ENTER VALUE>',
    'allowSeeMyPresence': true,
    'ringOnMonitoredCall': true,
    'pickUpCallsOnHold': true,
    'activeCalls': [
        {
            'id': '<ENTER VALUE>',
            'direction': 'Inbound',
            'from': '<ENTER VALUE>',
            'fromName': '<ENTER VALUE>',
            'to': '<ENTER VALUE>',
            'toName': '<ENTER VALUE>',
            'startTime': '<ENTER VALUE>',
            'telephonyStatus': '<ENTER VALUE>',
            'sipData': {
                'callId': '<ENTER VALUE>',
                'toTag': '<ENTER VALUE>',
                'fromTag': '<ENTER VALUE>',
                'remoteUri': '<ENTER VALUE>',
                'localUri': '<ENTER VALUE>',
                'rcSessionId': '<ENTER VALUE>'
            },
            'sessionId': '<ENTER VALUE>',
            'terminationType': '<ENTER VALUE>'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/PresenceInfoResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Presence/updateUserPresenceStatus) in API Explorer.

## Get User Presence Status List

HTTP get `/restapi/v1.0/account/{accountId}/presence`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'detailedTelephonyState': true,
    #'sipData': true,
    #'page': 000,
    #'perPage': 000
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/presence', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/AccountPresenceInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Presence/readAccountPresence) in API Explorer.

## Get Chats

HTTP get `/restapi/v1.0/glip/chats`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'type': [ 'Everyone', 'Group', 'Personal', 'Direct', 'Team' ],
    #'recordCount': 30,
    #'pageToken': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/glip/chats', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipChatsList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Chats/listGlipChats) in API Explorer.

## Get Chat

HTTP get `/restapi/v1.0/glip/chats/{chatId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/glip/chats/{chatId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipChatInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Chats/readGlipChat) in API Explorer.

## Get Conversations

HTTP get `/restapi/v1.0/glip/conversations`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'recordCount': 30,
    #'pageToken': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/glip/conversations', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipConversationsList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Conversations/listGlipConversations) in API Explorer.

## Create/Open Conversation

HTTP post `/restapi/v1.0/glip/conversations`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# POST BODY
body = {
    'members': [
        {
            'id': '<ENTER VALUE>',
            'email': '<ENTER VALUE>'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post('/restapi/v1.0/glip/conversations', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipConversationInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Conversations/createGlipConversation) in API Explorer.

## Get Conversation

HTTP get `/restapi/v1.0/glip/conversations/{chatId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/glip/conversations/{chatId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipConversationInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Conversations/readGlipConversation) in API Explorer.

## Get Teams

HTTP get `/restapi/v1.0/glip/teams`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'recordCount': 30,
    #'pageToken': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/glip/teams', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipTeamsList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Teams/listGlipTeams) in API Explorer.

## Create Team

HTTP post `/restapi/v1.0/glip/teams`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# POST BODY
body = {
    'public': true,
    'name': '<ENTER VALUE>',
    'description': '<ENTER VALUE>',
    'members': [
        {
            'id': '<ENTER VALUE>',
            'email': '<ENTER VALUE>'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post('/restapi/v1.0/glip/teams', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipTeamInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Teams/createGlipTeam) in API Explorer.

## Get Team

HTTP get `/restapi/v1.0/glip/teams/{chatId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/glip/teams/{chatId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipTeamInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Teams/readGlipTeam) in API Explorer.

## Update Team

HTTP patch `/restapi/v1.0/glip/teams/{chatId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

# POST BODY
body = {
    'public': true,
    'name': '<ENTER VALUE>',
    'description': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.patch(f'/restapi/v1.0/glip/teams/{chatId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipTeamInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Teams/patchGlipTeam) in API Explorer.

## Delete Team

HTTP delete `/restapi/v1.0/glip/teams/{chatId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/glip/teams/{chatId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Teams/deleteGlipTeam) in API Explorer.

## Join Team

HTTP post `/restapi/v1.0/glip/teams/{chatId}/join`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/glip/teams/{chatId}/join')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Teams/joinGlipTeam) in API Explorer.

## Leave Team

HTTP post `/restapi/v1.0/glip/teams/{chatId}/leave`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/glip/teams/{chatId}/leave')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Teams/leaveGlipTeam) in API Explorer.

## Add Team Members

HTTP post `/restapi/v1.0/glip/teams/{chatId}/add`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

# POST BODY
body = {
    'members': [
        {
            'id': '<ENTER VALUE>',
            'email': '<ENTER VALUE>'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/glip/teams/{chatId}/add', body)
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Teams/addGlipTeamMembers) in API Explorer.

## Remove Team Members

HTTP post `/restapi/v1.0/glip/teams/{chatId}/remove`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

# POST BODY
body = {
    'members': [
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
r = platform.post(f'/restapi/v1.0/glip/teams/{chatId}/remove', body)
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Teams/removeGlipTeamMembers) in API Explorer.

## Archive Team

HTTP post `/restapi/v1.0/glip/teams/{chatId}/archive`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/glip/teams/{chatId}/archive')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Teams/archiveGlipTeam) in API Explorer.

## Unarchive Team

HTTP post `/restapi/v1.0/glip/teams/{chatId}/unarchive`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/glip/teams/{chatId}/unarchive')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Teams/unarchiveGlipTeam) in API Explorer.

## Get Everyone Chat

HTTP get `/restapi/v1.0/glip/everyone`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/glip/everyone')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipEveryoneInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Teams/readGlipEveryone) in API Explorer.

## Update Everyone Сhat

HTTP patch `/restapi/v1.0/glip/everyone`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# POST BODY
body = {
    'name': 000,
    'description': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.patch('/restapi/v1.0/glip/everyone', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipEveryoneInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Teams/patchGlipEveryone) in API Explorer.

## Get Recent Chats

HTTP get `/restapi/v1.0/glip/recent/chats`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'type': [ 'Everyone', 'Group', 'Personal', 'Direct', 'Team' ],
    #'recordCount': 30
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/glip/recent/chats', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipChatsListWithoutNavigation.json)

[Try it out](https://developer.ringcentral.com/api-reference/Chats/listRecentChats) in API Explorer.

## Get Favorite Chats

HTTP get `/restapi/v1.0/glip/favorites`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'recordCount': 30
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/glip/favorites', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipChatsListWithoutNavigation.json)

[Try it out](https://developer.ringcentral.com/api-reference/Chats/listFavoriteChats) in API Explorer.

## Add Chat to Favorites

HTTP post `/restapi/v1.0/glip/chats/{chatId}/favorite`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/glip/chats/{chatId}/favorite')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Chats/favoriteGlipChat) in API Explorer.

## Remove Chat from Favorites

HTTP post `/restapi/v1.0/glip/chats/{chatId}/unfavorite`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/glip/chats/{chatId}/unfavorite')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Chats/unfavoriteGlipChat) in API Explorer.

## Mark Chat as Read

HTTP post `/restapi/v1.0/glip/chats/{chatId}/read`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/glip/chats/{chatId}/read')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Chats/markChatRead) in API Explorer.

## Mark Chat as Unread

HTTP post `/restapi/v1.0/glip/chats/{chatId}/unread`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/glip/chats/{chatId}/unread')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Chats/markChatUnread) in API Explorer.

## Get Post

HTTP get `/restapi/v1.0/glip/chats/{chatId}/posts/{postId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'
postId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/glip/chats/{chatId}/posts/{postId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipPostInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Posts/readGlipPost) in API Explorer.

## Update Post

HTTP patch `/restapi/v1.0/glip/chats/{chatId}/posts/{postId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'
postId = '<ENTER VALUE>'

# POST BODY
body = {
    'text': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.patch(f'/restapi/v1.0/glip/chats/{chatId}/posts/{postId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipPostInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Posts/patchGlipPost) in API Explorer.

## Delete Post

HTTP delete `/restapi/v1.0/glip/chats/{chatId}/posts/{postId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'
postId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/glip/chats/{chatId}/posts/{postId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Posts/deleteGlipPost) in API Explorer.

## Get Posts

HTTP get `/restapi/v1.0/glip/chats/{chatId}/posts`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'recordCount': 30,
    #'pageToken': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/glip/chats/{chatId}/posts', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipPostsList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Posts/readGlipPosts) in API Explorer.

## Create Post

HTTP post `/restapi/v1.0/glip/chats/{chatId}/posts`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

# POST BODY
body = {
    'text': '<ENTER VALUE>',
    'attachments': [
        {
            'id': '<ENTER VALUE>',
            'type': '<ENTER VALUE>'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/glip/chats/{chatId}/posts', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipPostInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Posts/createGlipPost) in API Explorer.

## Get User Events List

HTTP get `/restapi/v1.0/glip/events`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'recordCount': 30,
    #'pageToken': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/glip/events', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipEventsInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Calendar-Events/readGlipEvents) in API Explorer.

## Create Event

HTTP post `/restapi/v1.0/glip/events`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

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
r = platform.post('/restapi/v1.0/glip/events', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipEventInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Calendar-Events/createEvent) in API Explorer.

## Get Event

HTTP get `/restapi/v1.0/glip/events/{eventId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
eventId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/glip/events/{eventId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipEventInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Calendar-Events/readEvent) in API Explorer.

## Update Event

HTTP put `/restapi/v1.0/glip/events/{eventId}`

```python
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
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipEventInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Calendar-Events/updateEvent) in API Explorer.

## Delete Event

HTTP delete `/restapi/v1.0/glip/events/{eventId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
eventId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/glip/events/{eventId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Calendar-Events/deleteEvent) in API Explorer.

## Create Event by Group ID

HTTP post `/restapi/v1.0/glip/groups/{groupId}/events`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
groupId = '<ENTER VALUE>'

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
r = platform.post(f'/restapi/v1.0/glip/groups/{groupId}/events', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipEventInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Calendar-Events/createEventbyGroupId) in API Explorer.

## Get Group Events

HTTP get `/restapi/v1.0/glip/groups/{groupId}/events`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
groupId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/glip/groups/{groupId}/events')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipEventInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Calendar-Events/listGroupEvents) in API Explorer.

## Get Chat Tasks

HTTP get `/restapi/v1.0/glip/chats/{chatId}/tasks`

```python
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
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/TaskList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Tasks/listChatTasks) in API Explorer.

## Create Task

HTTP post `/restapi/v1.0/glip/chats/{chatId}/tasks`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
chatId = '<ENTER VALUE>'

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
r = platform.post(f'/restapi/v1.0/glip/chats/{chatId}/tasks', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/TaskList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Tasks/createTask) in API Explorer.

## Get Task

HTTP get `/restapi/v1.0/glip/tasks/{taskId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
taskId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/glip/tasks/{taskId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/TaskList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Tasks/readTask) in API Explorer.

## Patch Task

HTTP patch `/restapi/v1.0/glip/tasks/{taskId}`

```python
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
r = platform.patch(f'/restapi/v1.0/glip/tasks/{taskId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/TaskList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Tasks/patchTask) in API Explorer.

## Delete Task

HTTP delete `/restapi/v1.0/glip/tasks/{taskId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
taskId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/glip/tasks/{taskId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Tasks/deleteTask) in API Explorer.

## Complete Task

HTTP post `/restapi/v1.0/glip/tasks/{taskId}/complete`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
taskId = '<ENTER VALUE>'

# POST BODY
body = {
    'status': 'Incomplete',
    'assignees': [
        {
            'id': '<ENTER VALUE>'
        }
    ],
    'completenessPercentage': 000
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/glip/tasks/{taskId}/complete', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/TaskList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Tasks/completeTask) in API Explorer.

## Get Person

HTTP get `/restapi/v1.0/glip/persons/{personId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
personId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/glip/persons/{personId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipPersonInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Profile/readGlipPerson) in API Explorer.

## Get Company Info

HTTP get `/restapi/v1.0/glip/companies/{companyId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
companyId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/glip/companies/{companyId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipCompany.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Profile/readGlipCompany) in API Explorer.

## Create Webhook in Group

HTTP post `/restapi/v1.0/glip/groups/{groupId}/webhooks`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
groupId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/glip/groups/{groupId}/webhooks')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipWebhookInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Webhooks/createGlipGroupWebhook) in API Explorer.

## Get Webhooks in Group

HTTP get `/restapi/v1.0/glip/groups/{groupId}/webhooks`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
groupId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/glip/groups/{groupId}/webhooks')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipWebhookList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Webhooks/listGlipGroupWebhooks) in API Explorer.

## Get Webhooks

HTTP get `/restapi/v1.0/glip/webhooks`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/glip/webhooks')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipWebhookList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Webhooks/listGlipWebhooks) in API Explorer.

## Get Webhook

HTTP get `/restapi/v1.0/glip/webhooks/{webhookId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
webhookId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/glip/webhooks/{webhookId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipWebhookList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Webhooks/readGlipWebhook) in API Explorer.

## Delete Webhook

HTTP delete `/restapi/v1.0/glip/webhooks/{webhookId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
webhookId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/glip/webhooks/{webhookId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Webhooks/deleteGlipWebhook) in API Explorer.

## Activate Webhook

HTTP post `/restapi/v1.0/glip/webhooks/{webhookId}/activate`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
webhookId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/glip/webhooks/{webhookId}/activate')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Webhooks/activateGlipWebhook) in API Explorer.

## Suspend Webhook

HTTP post `/restapi/v1.0/glip/webhooks/{webhookId}/suspend`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
webhookId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/glip/webhooks/{webhookId}/suspend')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Webhooks/suspendGlipWebhook) in API Explorer.

## Get Preferences

HTTP get `/restapi/v1.0/glip/preferences`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/glip/preferences')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GlipPreferencesInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Profile/readGlipPreferences) in API Explorer.

## Get Scheduled Meetings

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/MeetingsResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Management/listMeetings) in API Explorer.

## Create Meetings

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'topic': '<ENTER VALUE>',
    'meetingType': '<ENTER VALUE>',
    'schedule': {
        'startTime': '<ENTER VALUE>',
        'durationInMinutes': 000,
        'timeZone': {
            'uri': '<ENTER VALUE>',
            'id': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'description': '<ENTER VALUE>'
        }
    },
    'password': '<ENTER VALUE>',
    'host': {
        'id': '<ENTER VALUE>'
    },
    'allowJoinBeforeHost': true,
    'startHostVideo': true,
    'startParticipantsVideo': true,
    'usePersonalMeetingId': true,
    'audioOptions': [
        '<ENTER VALUE>'
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/MeetingResponseResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Management/createMeeting) in API Explorer.

## Get Meeting Info

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
meetingId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/MeetingResponseResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Management/readMeeting) in API Explorer.

## Update Meeting

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
meetingId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'topic': '<ENTER VALUE>',
    'meetingType': '<ENTER VALUE>',
    'schedule': {
        'startTime': '<ENTER VALUE>',
        'durationInMinutes': 000,
        'timeZone': {
            'uri': '<ENTER VALUE>',
            'id': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'description': '<ENTER VALUE>'
        }
    },
    'password': '<ENTER VALUE>',
    'host': {
        'id': '<ENTER VALUE>'
    },
    'allowJoinBeforeHost': true,
    'startHostVideo': true,
    'startParticipantsVideo': true,
    'usePersonalMeetingId': true,
    'audioOptions': [
        '<ENTER VALUE>'
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/MeetingResponseResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Management/updateMeeting) in API Explorer.

## Delete Meeting

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
meetingId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Management/deleteMeeting) in API Explorer.

## End Meeting

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/end`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
meetingId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/end')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Management/endMeeting) in API Explorer.

## Get Meeting Service Info

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/service-info`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/service-info')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/MeetingServiceInfoResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Configuration/readMeetingServiceInfo) in API Explorer.

## Get Assistants

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assistants`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assistants')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/AssistantsResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Configuration/readAssistants) in API Explorer.

## Get Assisted Users

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assisted`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assisted')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/AssistedUsersResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Configuration/readAssistedUsers) in API Explorer.

## Get Subscriptions

HTTP get `/restapi/v1.0/subscription`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/subscription')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/RecordsCollectionResourceSubscriptionResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Subscriptions/listSubscriptions) in API Explorer.

## Create Subscription

HTTP post `/restapi/v1.0/subscription`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# POST BODY
body = {
    'eventFilters': [
        '<ENTER VALUE>'
    ],
    'deliveryMode': {
        'transportType': 'PubNub',
        'address': '<ENTER VALUE>',
        'encryption': true,
        'certificateName': '<ENTER VALUE>',
        'registrationId': '<ENTER VALUE>',
        'verificationToken': '<ENTER VALUE>'
    },
    'expiresIn': 604800
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post('/restapi/v1.0/subscription', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/SubscriptionInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Subscriptions/createSubscription) in API Explorer.

## Get Subscription

HTTP get `/restapi/v1.0/subscription/{subscriptionId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
subscriptionId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/subscription/{subscriptionId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/SubscriptionInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Subscriptions/readSubscription) in API Explorer.

## Renew Subscription / Update Event Filters

HTTP put `/restapi/v1.0/subscription/{subscriptionId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
subscriptionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'aggregated': true
}

# POST BODY
body = {
    'eventFilters': [
        '<ENTER VALUE>'
    ],
    'deliveryMode': {
        'transportType': 'PubNub',
        'address': '<ENTER VALUE>',
        'encryption': true,
        'certificateName': '<ENTER VALUE>',
        'registrationId': '<ENTER VALUE>',
        'verificationToken': '<ENTER VALUE>'
    },
    'expiresIn': 604800
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/subscription/{subscriptionId}', body, queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/SubscriptionInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Subscriptions/updateSubscription) in API Explorer.

## Cancel Subscription

HTTP delete `/restapi/v1.0/subscription/{subscriptionId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
subscriptionId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/subscription/{subscriptionId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Subscriptions/deleteSubscription) in API Explorer.

## Renew Subscription

HTTP post `/restapi/v1.0/subscription/{subscriptionId}/renew`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
subscriptionId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/subscription/{subscriptionId}/renew')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/SubscriptionInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Subscriptions/renewSubscription) in API Explorer.

## Get Authorization Profile

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/AuthProfileResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Permissions/readAuthorizationProfile) in API Explorer.

## Check User Permission

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile/check`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'permissionId': '<ENTER VALUE>',
    #'targetExtensionId': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile/check', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/AuthProfileCheckResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Permissions/checkUserPermission) in API Explorer.

## Get User Business Hours

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetUserBusinessHoursResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Business-Hours/readUserBusinessHours) in API Explorer.

## Update User Business Hours

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# POST BODY
body = {
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
        }
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/UserBusinessHoursUpdateResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Business-Hours/updateUserBusinessHours) in API Explorer.

## Get Company Business Hours

HTTP get `/restapi/v1.0/account/{accountId}/business-hours`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/business-hours')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CompanyBusinessHours.json)

[Try it out](https://developer.ringcentral.com/api-reference/Business-Hours/readCompanyBusinessHours) in API Explorer.

## Update Company Business Hours

HTTP put `/restapi/v1.0/account/{accountId}/business-hours`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
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
        }
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/business-hours', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CompanyBusinessHours.json)

[Try it out](https://developer.ringcentral.com/api-reference/Business-Hours/updateCompanyBusinessHours) in API Explorer.

## Get Caller Blocking Settings

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallerBlockingSettings.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Blocking/readCallerBlockingSettings) in API Explorer.

## Update Caller Blocking Settings

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# POST BODY
body = {
    'mode': 'Specific',
    'noCallerId': 'BlockCallsAndFaxes',
    'payPhones': 'Block',
    'greetings': [
        {
            'type': '<ENTER VALUE>',
            'preset': {
                'uri': '<ENTER VALUE>',
                'id': '<ENTER VALUE>',
                'name': '<ENTER VALUE>'
            }
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallerBlockingSettings.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Blocking/updateCallerBlockingSettings) in API Explorer.

## Get Blocked/Allowed Phone Numbers

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'page': 000,
    #'perPage': 000,
    #'status': 'Blocked'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/BlockedAllowedPhoneNumbersList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Blocking/listBlockedAllowedNumbers) in API Explorer.

## Add Blocked/Allowed Number

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# POST BODY
body = {
    'phoneNumber': '<ENTER VALUE>',
    'label': '<ENTER VALUE>',
    'status': 'Blocked'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/BlockedAllowedPhoneNumberInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Blocking/createBlockedAllowedNumber) in API Explorer.

## Get Blocked/Allowed Number

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
blockedNumberId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/BlockedAllowedPhoneNumberInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Blocking/readBlockedAllowedNumber) in API Explorer.

## Delete Blocked/Allowed Number

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
blockedNumberId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Blocking/deleteBlockedAllowedNumber) in API Explorer.

## Update Blocked/Allowed Number

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
blockedNumberId = '<ENTER VALUE>'

# POST BODY
body = {
    'phoneNumber': '<ENTER VALUE>',
    'label': '<ENTER VALUE>',
    'status': 'Blocked'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/BlockedAllowedPhoneNumberInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Blocking/updateBlockedAllowedNumber) in API Explorer.

## Get Forwarding Number List

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'page': 1,
    #'perPage': 100
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetExtensionForwardingNumberListResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Forwarding/listForwardingNumbers) in API Explorer.

## Create Forwarding Number

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# POST BODY
body = {
    'phoneNumber': '<ENTER VALUE>',
    'label': '<ENTER VALUE>',
    'type': 'PhoneLine',
    'device': {
        'id': '<ENTER VALUE>'
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ForwardingNumberInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Forwarding/createForwardingNumber) in API Explorer.

## Get Forwarding Number

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
forwardingNumberId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ForwardingNumberResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Forwarding/readForwardingNumber) in API Explorer.

## Update Forwarding Number

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
forwardingNumberId = '<ENTER VALUE>'

# POST BODY
body = {
    'phoneNumber': '<ENTER VALUE>',
    'label': '<ENTER VALUE>',
    'flipNumber': '<ENTER VALUE>',
    'type': 'Home'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ForwardingNumberInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Forwarding/updateForwardingNumber) in API Explorer.

## Delete Forwarding Number

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
forwardingNumberId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Forwarding/deleteForwardingNumber) in API Explorer.

## Get Call Handling Rules

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'view': 'Simple',
    #'enabledOnly': true,
    #'page': '1',
    #'perPage': '100'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/UserAnsweringRuleList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/listAnsweringRules) in API Explorer.

## Create Call Handling Rule

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule`

```python
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
r = platform.post(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/AnsweringRuleInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/createAnsweringRule) in API Explorer.

## Get Call Handling Rule

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
ruleId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'showInactiveNumbers': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/AnsweringRuleInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/readAnsweringRule) in API Explorer.

## Update Call Handling Rule

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
ruleId = '<ENTER VALUE>'

# POST BODY
body = {
    'forwarding': {
        'notifyMySoftPhones': true,
        'notifyAdminSoftPhones': true,
        'softPhonesRingCount': 1,
        'ringingMode': 'Sequentially',
        'rules': [
            {
                'index': 000,
                'ringCount': 000,
                'enabled': true,
                'forwardingNumbers': [
                    {
                        'id': '<ENTER VALUE>',
                        'type': 'Home'
                    }
                ]
            }
        ],
        'mobileTimeout': true
    },
    'enabled': true,
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
    'screening': 'Off',
    'showInactiveNumbers': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/AnsweringRuleInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/updateAnsweringRule) in API Explorer.

## Delete Call Handling Rule

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
ruleId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/deleteAnsweringRule) in API Explorer.

## Create Company Call Handling Rule

HTTP post `/restapi/v1.0/account/{accountId}/answering-rule`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'name': '<ENTER VALUE>',
    'enabled': true,
    'type': 'BusinessHours',
    'callers': [
        {
            'callerId': '<ENTER VALUE>',
            'name': '<ENTER VALUE>'
        }
    ],
    'calledNumbers': [
        {
            'id': '<ENTER VALUE>'
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
    'callHandlingAction': 'Operator',
    'extension': {
        'callerId': '<ENTER VALUE>',
        'name': '<ENTER VALUE>'
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
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/answering-rule', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CompanyAnsweringRuleInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/createCompanyAnsweringRule) in API Explorer.

## Get Company Call Handling Rule List

HTTP get `/restapi/v1.0/account/{accountId}/answering-rule`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/answering-rule')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CompanyAnsweringRuleList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/listCompanyAnsweringRules) in API Explorer.

## Get Company Call Handling Rule

HTTP get `/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
ruleId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CompanyAnsweringRuleInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/readCompanyAnsweringRule) in API Explorer.

## Update Company Call Handling Rule

HTTP put `/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
ruleId = '<ENTER VALUE>'

# POST BODY
body = {
    'enabled': true,
    'name': '<ENTER VALUE>',
    'callers': [
        {
            'callerId': '<ENTER VALUE>',
            'name': '<ENTER VALUE>'
        }
    ],
    'calledNumbers': [
        {
            'id': '<ENTER VALUE>'
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
    'callHandlingAction': 'Operator',
    'extension': {
        'callerId': '<ENTER VALUE>',
        'name': '<ENTER VALUE>'
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
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CompanyAnsweringRuleInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/updateCompanyAnsweringRule) in API Explorer.

## Delete Company Call Handling Rule

HTTP delete `/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
ruleId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/deleteCompanyAnsweringRule) in API Explorer.

## Get Standard Greeting List

HTTP get `/restapi/v1.0/dictionary/greeting`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'page': 1,
    #'perPage': 100,
    #'type': 'Introductory',
    #'usageType': 'UserExtensionAnsweringRule'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/dictionary/greeting', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/DictionaryGreetingList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/listStandardGreetings) in API Explorer.

## Get Standard Greeting

HTTP get `/restapi/v1.0/dictionary/greeting/{greetingId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
greetingId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/dictionary/greeting/{greetingId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/DictionaryGreetingInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/readStandardGreeting) in API Explorer.

## Create Company Greeting

HTTP post `/restapi/v1.0/account/{accountId}/greeting`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/greeting')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CustomCompanyGreetingInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/createCompanyGreeting) in API Explorer.

## Create Custom User Greeting

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CustomUserGreetingInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/createCustomUserGreeting) in API Explorer.

## Get Custom Greeting

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting/{greetingId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
greetingId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting/{greetingId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CustomUserGreetingInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/readCustomGreeting) in API Explorer.

## Create IVR Prompts

HTTP post `/restapi/v1.0/account/{accountId}/ivr-prompts`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/ivr-prompts')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/PromptInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/createIVRPrompt) in API Explorer.

## Get IVR Prompt List

HTTP get `/restapi/v1.0/account/{accountId}/ivr-prompts`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/ivr-prompts')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/IVRPrompts.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/listIVRPrompts) in API Explorer.

## Get IVR Prompt

HTTP get `/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
promptId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/PromptInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/readIVRPrompt) in API Explorer.

## Delete IVR Prompt

HTTP delete `/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
promptId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/deleteIVRPrompt) in API Explorer.

## Update IVR Prompt

HTTP put `/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
promptId = '<ENTER VALUE>'

# POST BODY
body = {
    'filename': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/PromptInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/updateIVRPrompt) in API Explorer.

## Get IVR Prompt Content

HTTP get `/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}/content`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
promptId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}/content')
```

You can get response binary data by `binary = r.response().content`

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/readIVRPromptContent) in API Explorer.

## Create IVR Menu

HTTP post `/restapi/v1.0/account/{accountId}/ivr-menus`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'id': '<ENTER VALUE>',
    'uri': '<ENTER VALUE>',
    'name': '<ENTER VALUE>',
    'extensionNumber': '<ENTER VALUE>',
    'prompt': {
        'mode': 'Audio',
        'audio': {
            'uri': '<ENTER VALUE>',
            'id': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'localeCode': '<ENTER VALUE>'
        },
        'text': '<ENTER VALUE>',
        'language': {
            'uri': '<ENTER VALUE>',
            'id': '<ENTER VALUE>'
        }
    },
    'actions': [
        {
            'input': '<ENTER VALUE>',
            'action': 'Connect',
            'extension': {
                'uri': '<ENTER VALUE>',
                'id': '<ENTER VALUE>'
            },
            'phoneNumber': '<ENTER VALUE>'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/ivr-menus', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/IVRMenuInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/createIVRMenu) in API Explorer.

## Get IVR Menu

HTTP get `/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
ivrMenuId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/IVRMenuInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/readIVRMenu) in API Explorer.

## Update IVR Menu

HTTP put `/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
ivrMenuId = '<ENTER VALUE>'

# POST BODY
body = {
    'id': '<ENTER VALUE>',
    'uri': '<ENTER VALUE>',
    'name': '<ENTER VALUE>',
    'extensionNumber': '<ENTER VALUE>',
    'prompt': {
        'mode': 'Audio',
        'audio': {
            'uri': '<ENTER VALUE>',
            'id': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'localeCode': '<ENTER VALUE>'
        },
        'text': '<ENTER VALUE>',
        'language': {
            'uri': '<ENTER VALUE>',
            'id': '<ENTER VALUE>'
        }
    },
    'actions': [
        {
            'input': '<ENTER VALUE>',
            'action': 'Connect',
            'extension': {
                'uri': '<ENTER VALUE>',
                'id': '<ENTER VALUE>'
            },
            'phoneNumber': '<ENTER VALUE>'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/IVRMenuInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/updateIVRMenu) in API Explorer.

## Get Call Recording Settings

HTTP get `/restapi/v1.0/account/{accountId}/call-recording`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/call-recording')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallRecordingSettingsResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/readCallRecordingSettings) in API Explorer.

## Update Call Recording Settings

HTTP put `/restapi/v1.0/account/{accountId}/call-recording`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'onDemand': {
        'enabled': true
    },
    'automatic': {
        'enabled': true,
        'outboundCallTones': true,
        'outboundCallAnnouncement': true,
        'allowMute': true,
        'extensionCount': 000
    },
    'greetings': [
        {
            'type': 'StartRecording',
            'mode': 'Default'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/call-recording', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallRecordingSettingsResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/updateCallRecordingSettings) in API Explorer.

## Get Call Recording Extension List

HTTP get `/restapi/v1.0/account/{accountId}/call-recording/extensions`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/call-recording/extensions')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallRecordingExtensions.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/listCallRecordingExtensions) in API Explorer.

## Update Call Recording Extension List

HTTP post `/restapi/v1.0/account/{accountId}/call-recording/bulk-assign`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'addedExtensions': {
        'id': '<ENTER VALUE>',
        'uri': '<ENTER VALUE>',
        'extensionNumber': '<ENTER VALUE>',
        'type': '<ENTER VALUE>',
        'callDirection': 'Outbound'
    },
    'updatedExtensions': {
        'id': '<ENTER VALUE>',
        'uri': '<ENTER VALUE>',
        'extensionNumber': '<ENTER VALUE>',
        'type': '<ENTER VALUE>',
        'callDirection': 'Outbound'
    },
    'removedExtensions': {
        'id': '<ENTER VALUE>',
        'uri': '<ENTER VALUE>',
        'extensionNumber': '<ENTER VALUE>',
        'type': '<ENTER VALUE>',
        'callDirection': 'Outbound'
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/call-recording/bulk-assign', body)
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/updateCallRecordingExtensionList) in API Explorer.

## Get Call Recording Custom Greeting List

HTTP get `/restapi/v1.0/account/{accountId}/call-recording/custom-greetings`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'type': 'StartRecording'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/call-recording/custom-greetings', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallRecordingCustomGreetings.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/listCallRecordingCustomGreetings) in API Explorer.

## Delete Call Recording Custom Greeting List

HTTP delete `/restapi/v1.0/account/{accountId}/call-recording/custom-greetings`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/call-recording/custom-greetings')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/deleteCallRecordingCustomGreetingList) in API Explorer.

## Delete Call Recording Custom Greeting

HTTP delete `/restapi/v1.0/account/{accountId}/call-recording/custom-greetings/{greetingId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
greetingId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/call-recording/custom-greetings/{greetingId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/deleteCallRecordingCustomGreeting) in API Explorer.

## Register SIP Device

HTTP post `/restapi/v1.0/client-info/sip-provision`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# POST BODY
body = {
    'device': [
        {
            'id': '<ENTER VALUE>',
            'appExternalId': '<ENTER VALUE>',
            'computerName': '<ENTER VALUE>'
        }
    ],
    'sipInfo': [
        {
            'transport': 'UDP'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post('/restapi/v1.0/client-info/sip-provision', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CreateSipRegistrationResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SIP/createSIPRegistration) in API Explorer.

## Get Extension Phone Number List

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/phone-number`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'usageType': [ 'MainCompanyNumber', 'AdditionalCompanyNumber', 'CompanyNumber', 'DirectNumber', 'CompanyFaxNumber', 'ForwardedNumber', 'ForwardedCompanyNumber' ],
    #'page': 000,
    #'perPage': 000
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/phone-number', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetExtensionPhoneNumbersResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Phone-Numbers/listExtensionPhoneNumbers) in API Explorer.

## Get Extension

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetExtensionInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/readExtension) in API Explorer.

## Update Extension

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# POST BODY
body = {
    'status': 'Disabled',
    'statusInfo': {
        'comment': '<ENTER VALUE>',
        'reason': 'Voluntarily'
    },
    'reason': '<ENTER VALUE>',
    'comment': '<ENTER VALUE>',
    'extensionNumber': '<ENTER VALUE>',
    'contact': {
        'firstName': '<ENTER VALUE>',
        'lastName': '<ENTER VALUE>',
        'company': '<ENTER VALUE>',
        'jobTitle': '<ENTER VALUE>',
        'email': '<ENTER VALUE>',
        'businessPhone': '<ENTER VALUE>',
        'mobilePhone': '<ENTER VALUE>',
        'businessAddress': {
            'country': '<ENTER VALUE>',
            'state': '<ENTER VALUE>',
            'city': '<ENTER VALUE>',
            'street': '<ENTER VALUE>',
            'zip': '<ENTER VALUE>'
        },
        'emailAsLoginName': true,
        'pronouncedName': {
            'type': 'Default',
            'text': '<ENTER VALUE>'
        },
        'department': '<ENTER VALUE>'
    },
    'regionalSettings': {
        'homeCountry': {
            'id': '<ENTER VALUE>'
        },
        'timezone': {
            'id': '<ENTER VALUE>'
        },
        'language': {
            'id': '<ENTER VALUE>'
        },
        'greetingLanguage': {
            'id': '<ENTER VALUE>'
        },
        'formattingLocale': {
            'id': '<ENTER VALUE>'
        },
        'timeFormat': '12h'
    },
    'setupWizardState': 'NotStarted',
    'partnerId': '<ENTER VALUE>',
    'ivrPin': '<ENTER VALUE>',
    'password': '<ENTER VALUE>',
    'callQueueInfo': {
        'slaGoal': 000,
        'slaThresholdSeconds': 000,
        'includeAbandonedCalls': true,
        'abandonedThresholdSeconds': 000
    },
    'transition': [
        {
            'sendWelcomeEmailsToUsers': true,
            'sendWelcomeEmail': true
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetExtensionInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/updateExtension) in API Explorer.

## Delete Extension

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/deleteExtension) in API Explorer.

## Get Extension Caller ID

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ExtensionCallerIdInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/readExtensionCallerId) in API Explorer.

## Update Extension Caller ID

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# POST BODY
body = {
    'uri': '<ENTER VALUE>',
    'byDevice': [
        {
            'device': {
                'id': '<ENTER VALUE>',
                'uri': '<ENTER VALUE>',
                'phoneNumber': '<ENTER VALUE>'
            },
            'callerId': {
                'type': '<ENTER VALUE>',
                'phoneInfo': {
                    'id': '<ENTER VALUE>',
                    'uri': '<ENTER VALUE>',
                    'phoneNumber': '<ENTER VALUE>'
                }
            }
        }
    ],
    'byFeature': [
        {
            'feature': 'RingOut',
            'callerId': {
                'type': '<ENTER VALUE>',
                'phoneInfo': {
                    'id': '<ENTER VALUE>',
                    'uri': '<ENTER VALUE>',
                    'phoneNumber': '<ENTER VALUE>'
                }
            }
        }
    ],
    'extensionNameForOutboundCalls': true,
    'extensionNumberForInternalCalls': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ExtensionCallerIdInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/updateExtensionCallerId) in API Explorer.

## Get Extension Grant List

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/grant`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'page': '1',
    #'perPage': '100'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/grant', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetExtensionGrantListResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/listExtensionGrants) in API Explorer.

## Get Users

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/users`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'type': 'User'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/users', queryParams)
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/readAutomaticLocationUpdatesUsers) in API Explorer.

## Enable Automatic Location Updates for Users

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/users/bulk-assign`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'enabledUserIds': [
        '<ENTER VALUE>'
    ],
    'disabledUserIds': [
        '<ENTER VALUE>'
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/users/bulk-assign', body)
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/assignMultipleUsersAutomaticaLocationUpdates) in API Explorer.

## Get Wireless Point List

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'siteId': '<ENTER VALUE>',
    #'searchString': '<ENTER VALUE>',
    #'orderBy': '<ENTER VALUE>',
    #'perPage': 000,
    #'page': 1
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/WirelessPointsList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/listWirelessPoints) in API Explorer.

## Create Wireless Point

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'bssid': '<ENTER VALUE>',
    'name': '<ENTER VALUE>',
    'site': {
        'id': '<ENTER VALUE>',
        'name': '<ENTER VALUE>'
    },
    'emergencyAddress': {
        'country': '<ENTER VALUE>',
        'countryId': '<ENTER VALUE>',
        'countryIsoCode': '<ENTER VALUE>',
        'countryName': '<ENTER VALUE>',
        'state': '<ENTER VALUE>',
        'stateId': '<ENTER VALUE>',
        'stateIsoCode': '<ENTER VALUE>',
        'stateName': '<ENTER VALUE>',
        'city': '<ENTER VALUE>',
        'street': '<ENTER VALUE>',
        'street2': '<ENTER VALUE>',
        'zip': '<ENTER VALUE>'
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/WirelessPointInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/createWirelessPoint) in API Explorer.

## Get Wireless Point

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
pointId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/WirelessPointInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/readWirelessPoint) in API Explorer.

## Update Wireless Point

HTTP put `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
pointId = '<ENTER VALUE>'

# POST BODY
body = {
    'id': '<ENTER VALUE>',
    'bssid': '<ENTER VALUE>',
    'name': '<ENTER VALUE>',
    'site': {
        'id': '<ENTER VALUE>',
        'name': '<ENTER VALUE>'
    },
    'emergencyAddress': {
        'country': '<ENTER VALUE>',
        'countryId': '<ENTER VALUE>',
        'countryIsoCode': '<ENTER VALUE>',
        'countryName': '<ENTER VALUE>',
        'state': '<ENTER VALUE>',
        'stateId': '<ENTER VALUE>',
        'stateIsoCode': '<ENTER VALUE>',
        'stateName': '<ENTER VALUE>',
        'city': '<ENTER VALUE>',
        'street': '<ENTER VALUE>',
        'street2': '<ENTER VALUE>',
        'zip': '<ENTER VALUE>'
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/WirelessPointInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/updateWirelessPoint) in API Explorer.

## Delete Wireless Point

HTTP delete `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
pointId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/deleteWirelessPoint) in API Explorer.

## Get Network Map

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/NetworksList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/listNetworks) in API Explorer.

## Create Network

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/createNetwork) in API Explorer.

## Get Network

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
networkId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/readNetwork) in API Explorer.

## Update Network

HTTP put `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
networkId = '<ENTER VALUE>'

# POST BODY
body = {
    'name': '<ENTER VALUE>',
    'site': '<ENTER VALUE>',
    'publicIpRanges': [
        {
            'id': '<ENTER VALUE>',
            'startIp': '<ENTER VALUE>',
            'endIp': '<ENTER VALUE>'
        }
    ],
    'privateIpRanges': [
        {
            'id': '<ENTER VALUE>',
            'startIp': '<ENTER VALUE>',
            'endIp': '<ENTER VALUE>'
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}', body)
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/updateNetwork) in API Explorer.

## Delete Network

HTTP delete `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
networkId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/deleteNetwork) in API Explorer.

## Get Device List

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices`

```python
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
    #'page': 1
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ListDevicesAutomaticLocationUpdates.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/listDevicesAutomaticLocationUpdates) in API Explorer.

## Enable Automatic Location Updates for Devices

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices/bulk-assign`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'enabledDeviceIds': [
        '<ENTER VALUE>'
    ],
    'disabledDeviceIds': [
        '<ENTER VALUE>'
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices/bulk-assign', body)
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/assignMultipleDevicesAutomaticLocationUpdates) in API Explorer.

## Get Account Switch List

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'siteId': '<ENTER VALUE>',
    #'searchString': '<ENTER VALUE>',
    #'orderBy': '<ENTER VALUE>',
    #'perPage': 000,
    #'page': 1
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/SwitchesList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/listAccountSwitches) in API Explorer.

## Create Switch

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'chassisId': '<ENTER VALUE>',
    'name': '<ENTER VALUE>',
    'site': {
        'id': '<ENTER VALUE>',
        'name': '<ENTER VALUE>'
    },
    'emergencyAddress': {
        'country': '<ENTER VALUE>',
        'countryId': '<ENTER VALUE>',
        'countryIsoCode': '<ENTER VALUE>',
        'countryName': '<ENTER VALUE>',
        'state': '<ENTER VALUE>',
        'stateId': '<ENTER VALUE>',
        'stateIsoCode': '<ENTER VALUE>',
        'stateName': '<ENTER VALUE>',
        'city': '<ENTER VALUE>',
        'street': '<ENTER VALUE>',
        'street2': '<ENTER VALUE>',
        'zip': '<ENTER VALUE>'
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/SwitchInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/createSwitch) in API Explorer.

## Get Switch

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
switchId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/SwitchInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/readSwitch) in API Explorer.

## Update Switch

HTTP put `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
switchId = '<ENTER VALUE>'

# POST BODY
body = {
    'id': '<ENTER VALUE>',
    'chassisId': '<ENTER VALUE>',
    'name': '<ENTER VALUE>',
    'site': {
        'id': '<ENTER VALUE>',
        'name': '<ENTER VALUE>'
    },
    'emergencyAddress': {
        'country': '<ENTER VALUE>',
        'countryId': '<ENTER VALUE>',
        'countryIsoCode': '<ENTER VALUE>',
        'countryName': '<ENTER VALUE>',
        'state': '<ENTER VALUE>',
        'stateId': '<ENTER VALUE>',
        'stateIsoCode': '<ENTER VALUE>',
        'stateName': '<ENTER VALUE>',
        'city': '<ENTER VALUE>',
        'street': '<ENTER VALUE>',
        'street2': '<ENTER VALUE>',
        'zip': '<ENTER VALUE>'
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/SwitchInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/updateSwitch) in API Explorer.

## Delete Switch

HTTP delete `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
switchId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/deleteSwitch) in API Explorer.

## Create Multiple Switches

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-create`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'records': [
        {
            'chassisId': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'site': {
                'id': '<ENTER VALUE>',
                'name': '<ENTER VALUE>'
            },
            'emergencyAddress': {
                'country': '<ENTER VALUE>',
                'countryId': '<ENTER VALUE>',
                'countryIsoCode': '<ENTER VALUE>',
                'countryName': '<ENTER VALUE>',
                'state': '<ENTER VALUE>',
                'stateId': '<ENTER VALUE>',
                'stateIsoCode': '<ENTER VALUE>',
                'stateName': '<ENTER VALUE>',
                'city': '<ENTER VALUE>',
                'street': '<ENTER VALUE>',
                'street2': '<ENTER VALUE>',
                'zip': '<ENTER VALUE>'
            }
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-create', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CreateMultipleSwitchesResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/createMultipleSwitches) in API Explorer.

## Update Multiple Switches

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-update`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'records': [
        {
            'id': '<ENTER VALUE>',
            'chassisId': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'site': {
                'id': '<ENTER VALUE>',
                'name': '<ENTER VALUE>'
            },
            'emergencyAddress': {
                'country': '<ENTER VALUE>',
                'countryId': '<ENTER VALUE>',
                'countryIsoCode': '<ENTER VALUE>',
                'countryName': '<ENTER VALUE>',
                'state': '<ENTER VALUE>',
                'stateId': '<ENTER VALUE>',
                'stateIsoCode': '<ENTER VALUE>',
                'stateName': '<ENTER VALUE>',
                'city': '<ENTER VALUE>',
                'street': '<ENTER VALUE>',
                'street2': '<ENTER VALUE>',
                'zip': '<ENTER VALUE>'
            }
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-update', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/UpdateMultipleSwitchesResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/updateMultipleSwitches) in API Explorer.

## Create Multiple Wireless Points

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-create`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'records': [
        {
            'bssid': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'site': {
                'id': '<ENTER VALUE>',
                'name': '<ENTER VALUE>'
            },
            'emergencyAddress': {
                'country': '<ENTER VALUE>',
                'countryId': '<ENTER VALUE>',
                'countryIsoCode': '<ENTER VALUE>',
                'countryName': '<ENTER VALUE>',
                'state': '<ENTER VALUE>',
                'stateId': '<ENTER VALUE>',
                'stateIsoCode': '<ENTER VALUE>',
                'stateName': '<ENTER VALUE>',
                'city': '<ENTER VALUE>',
                'street': '<ENTER VALUE>',
                'street2': '<ENTER VALUE>',
                'zip': '<ENTER VALUE>'
            }
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-create', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CreateMultipleWirelessPointsResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/createMultipleWirelessPoints) in API Explorer.

## Update Multiple Wireless Points

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-update`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'records': [
        {
            'id': '<ENTER VALUE>',
            'bssid': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'site': {
                'id': '<ENTER VALUE>',
                'name': '<ENTER VALUE>'
            },
            'emergencyAddress': {
                'country': '<ENTER VALUE>',
                'countryId': '<ENTER VALUE>',
                'countryIsoCode': '<ENTER VALUE>',
                'countryName': '<ENTER VALUE>',
                'state': '<ENTER VALUE>',
                'stateId': '<ENTER VALUE>',
                'stateIsoCode': '<ENTER VALUE>',
                'stateName': '<ENTER VALUE>',
                'city': '<ENTER VALUE>',
                'street': '<ENTER VALUE>',
                'street2': '<ENTER VALUE>',
                'zip': '<ENTER VALUE>'
            }
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-update', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/UpdateMultipleWirelessPointsResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/updateMultipleWirelessPoints) in API Explorer.

## Validate Multiple Wireless Points

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-validate`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'records': [
        {
            'id': '<ENTER VALUE>',
            'bssid': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'site': {
                'id': '<ENTER VALUE>',
                'name': '<ENTER VALUE>'
            },
            'emergencyAddress': {
                'country': '<ENTER VALUE>',
                'countryId': '<ENTER VALUE>',
                'countryIsoCode': '<ENTER VALUE>',
                'countryName': '<ENTER VALUE>',
                'state': '<ENTER VALUE>',
                'stateId': '<ENTER VALUE>',
                'stateIsoCode': '<ENTER VALUE>',
                'stateName': '<ENTER VALUE>',
                'city': '<ENTER VALUE>',
                'street': '<ENTER VALUE>',
                'street2': '<ENTER VALUE>',
                'zip': '<ENTER VALUE>'
            }
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-validate', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ValidateMultipleWirelessPointsResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/validateMultipleWirelessPoints) in API Explorer.

## Validate Multiple Switches

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-validate`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'records': [
        {
            'id': '<ENTER VALUE>',
            'chassisId': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'site': {
                'id': '<ENTER VALUE>',
                'name': '<ENTER VALUE>'
            },
            'emergencyAddress': {
                'country': '<ENTER VALUE>',
                'countryId': '<ENTER VALUE>',
                'countryIsoCode': '<ENTER VALUE>',
                'countryName': '<ENTER VALUE>',
                'state': '<ENTER VALUE>',
                'stateId': '<ENTER VALUE>',
                'stateIsoCode': '<ENTER VALUE>',
                'stateName': '<ENTER VALUE>',
                'city': '<ENTER VALUE>',
                'street': '<ENTER VALUE>',
                'street2': '<ENTER VALUE>',
                'zip': '<ENTER VALUE>'
            }
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-validate', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ValidateMultipleSwitchesResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/validateMultipleSwitches) in API Explorer.

## Get Notification Settings

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/NotificationSettings.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/readNotificationSettings) in API Explorer.

## Update Notification Settings

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings`

```python
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
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/NotificationSettings.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/updateNotificationSettings) in API Explorer.

## Get User Profile Image

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image')
```

You can get response binary data by `binary = r.response().content`

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/readUserProfileImage) in API Explorer.

## Upload User Profile Image

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/createUserProfileImage) in API Explorer.

## Update User Profile Image

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
extensionId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/updateUserProfileImage) in API Explorer.

## Get Scaled User Profile Image

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'
scaleSize = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}')
```

You can get response binary data by `binary = r.response().content`

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/readScaledPofileImage) in API Explorer.

## Get User Conferencing Settings

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'countryId': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetConferencingInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/readConferencingSettings) in API Explorer.

## Update User Conferencing Settings

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# POST BODY
body = {
    'phoneNumbers': [
        {
            'phoneNumber': '<ENTER VALUE>',
            'default': true
        }
    ],
    'allowJoinBeforeHost': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetConferencingInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/updateConferencingSettings) in API Explorer.

## Get Account Info

HTTP get `/restapi/v1.0/account/{accountId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetAccountInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Company/readAccountInfo) in API Explorer.

## Get Account Business Address

HTTP get `/restapi/v1.0/account/{accountId}/business-address`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/business-address')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/AccountBusinessAddressResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Company/readAccountBusinessAddress) in API Explorer.

## Update Company Business Address

HTTP put `/restapi/v1.0/account/{accountId}/business-address`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'company': '<ENTER VALUE>',
    'email': '<ENTER VALUE>',
    'businessAddress': {
        'country': '<ENTER VALUE>',
        'state': '<ENTER VALUE>',
        'city': '<ENTER VALUE>',
        'street': '<ENTER VALUE>',
        'zip': '<ENTER VALUE>'
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/business-address', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/AccountBusinessAddressResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Company/updateAccountBusinessAddress) in API Explorer.

## Get Account Service Info

HTTP get `/restapi/v1.0/account/{accountId}/service-info`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/service-info')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetServiceInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Company/readAccountServiceInfo) in API Explorer.

## Get Language List

HTTP get `/restapi/v1.0/dictionary/language`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/dictionary/language')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/LanguageList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/listLanguages) in API Explorer.

## Get Language

HTTP get `/restapi/v1.0/dictionary/language/{languageId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
languageId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/dictionary/language/{languageId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/LanguageInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/readLanguage) in API Explorer.

## Get Country List

HTTP get `/restapi/v1.0/dictionary/country`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'loginAllowed': true,
    #'signupAllowed': true,
    #'numberSelling': true,
    #'page': 1,
    #'perPage': 100,
    #'freeSoftphoneLine': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/dictionary/country', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetCountryListResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/listCountries) in API Explorer.

## Get Country

HTTP get `/restapi/v1.0/dictionary/country/{countryId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
countryId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/dictionary/country/{countryId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetCountryInfoDictionaryResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/readCountry) in API Explorer.

## Get Location List

HTTP get `/restapi/v1.0/dictionary/location`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'orderBy': 'City',
    #'page': 1,
    #'perPage': 100,
    #'stateId': '<ENTER VALUE>',
    #'withNxx': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/dictionary/location', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetLocationListResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/listLocations) in API Explorer.

## Get States List

HTTP get `/restapi/v1.0/dictionary/state`

```python
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
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetStateListResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/listStates) in API Explorer.

## Get State

HTTP get `/restapi/v1.0/dictionary/state/{stateId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
stateId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/dictionary/state/{stateId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetStateInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/readState) in API Explorer.

## Get Timezone List

HTTP get `/restapi/v1.0/dictionary/timezone`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'page': '1',
    #'perPage': '100'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/restapi/v1.0/dictionary/timezone', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetTimezoneListResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/listTimezones) in API Explorer.

## Get Timezone

HTTP get `/restapi/v1.0/dictionary/timezone/{timezoneId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
timezoneId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'page': '1',
    #'perPage': '100'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/dictionary/timezone/{timezoneId}', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetTimezoneInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/readTimezone) in API Explorer.

## Get Company Phone Number List

HTTP get `/restapi/v1.0/account/{accountId}/phone-number`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'page': 1,
    #'perPage': 100,
    #'usageType': [ 'MainCompanyNumber', 'AdditionalCompanyNumber', 'CompanyNumber', 'DirectNumber', 'CompanyFaxNumber', 'ForwardedNumber', 'ForwardedCompanyNumber', 'ContactCenterNumber', 'ConferencingNumber', 'MeetingsNumber' ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/phone-number', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/AccountPhoneNumbers.json)

[Try it out](https://developer.ringcentral.com/api-reference/Phone-Numbers/listAccountPhoneNumbers) in API Explorer.

## Get Phone Number

HTTP get `/restapi/v1.0/account/{accountId}/phone-number/{phoneNumberId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
phoneNumberId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/phone-number/{phoneNumberId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CompanyPhoneNumberInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Phone-Numbers/readAccountPhoneNumber) in API Explorer.

## Get Extension List

HTTP get `/restapi/v1.0/account/{accountId}/extension`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'extensionId': '<ENTER VALUE>',
    #'email': '<ENTER VALUE>',
    #'page': 1,
    #'perPage': 100,
    #'status': [ 'Enabled', 'Disabled', 'NotActivated', 'Unassigned' ],
    #'type': [ 'User', 'FaxUser', 'VirtualUser', 'DigitalUser', 'Department', 'Announcement', 'Voicemail', 'SharedLinesGroup', 'PagingOnly', 'IvrMenu', 'ApplicationExtension', 'ParkLocation', 'Limited', 'Bot' ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetExtensionListResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Extensions/listExtensions) in API Explorer.

## Create Extension

HTTP post `/restapi/v1.0/account/{accountId}/extension`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'contact': {
        'firstName': '<ENTER VALUE>',
        'lastName': '<ENTER VALUE>',
        'company': '<ENTER VALUE>',
        'jobTitle': '<ENTER VALUE>',
        'email': '<ENTER VALUE>',
        'businessPhone': '<ENTER VALUE>',
        'mobilePhone': '<ENTER VALUE>',
        'businessAddress': {
            'country': '<ENTER VALUE>',
            'state': '<ENTER VALUE>',
            'city': '<ENTER VALUE>',
            'street': '<ENTER VALUE>',
            'zip': '<ENTER VALUE>'
        },
        'emailAsLoginName': true,
        'pronouncedName': {
            'type': 'Default',
            'text': '<ENTER VALUE>'
        },
        'department': '<ENTER VALUE>'
    },
    'extensionNumber': '<ENTER VALUE>',
    'password': '<ENTER VALUE>',
    'references': [
        {
            'ref': '<ENTER VALUE>',
            'type': 'PartnerId'
        }
    ],
    'roles': [
        {
            'uri': '<ENTER VALUE>',
            'id': '<ENTER VALUE>'
        }
    ],
    'regionalSettings': {
        'homeCountry': {
            'id': '<ENTER VALUE>',
            'uri': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'isoCode': '<ENTER VALUE>',
            'callingCode': '<ENTER VALUE>'
        },
        'timezone': {
            'id': '<ENTER VALUE>',
            'uri': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'description': '<ENTER VALUE>'
        },
        'language': {
            'id': '<ENTER VALUE>',
            'uri': '<ENTER VALUE>',
            'greeting': true,
            'formattingLocale': true,
            'localeCode': '<ENTER VALUE>',
            'name': '<ENTER VALUE>',
            'ui': true
        },
        'greetingLanguage': {
            'id': '<ENTER VALUE>',
            'localeCode': '<ENTER VALUE>',
            'name': '<ENTER VALUE>'
        },
        'formattingLocale': {
            'id': '<ENTER VALUE>',
            'localeCode': '<ENTER VALUE>',
            'name': '<ENTER VALUE>'
        },
        'timeFormat': '12h'
    },
    'setupWizardState': 'NotStarted',
    'status': 'Enabled',
    'statusInfo': {
        'comment': '<ENTER VALUE>',
        'reason': 'Voluntarily'
    },
    'type': 'User',
    'hidden': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/extension', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ExtensionCreationResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Extensions/createExtension) in API Explorer.

## Get User Template List

HTTP get `/restapi/v1.0/account/{accountId}/templates`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'type': 'UserSettings',
    #'page': '<ENTER VALUE>',
    #'perPage': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/templates', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/UserTemplates.json)

[Try it out](https://developer.ringcentral.com/api-reference/Extensions/listUserTemplates) in API Explorer.

## Get User Template

HTTP get `/restapi/v1.0/account/{accountId}/templates/{templateId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
templateId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/templates/{templateId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/TemplateInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Extensions/readUserTemplate) in API Explorer.

## Get Call Queues

HTTP get `/restapi/v1.0/account/{accountId}/call-queues`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'page': 1,
    #'perPage': 100,
    #'memberExtensionId': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/call-queues', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallQueues.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Queues/listCallQueues) in API Explorer.

## Get Call Queue Members

HTTP get `/restapi/v1.0/account/{accountId}/call-queues/{groupId}/members`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
groupId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'page': 1,
    #'perPage': 100
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/call-queues/{groupId}/members', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallQueueMembers.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Queues/listCallQueueMembers) in API Explorer.

## Assign Multiple Call Queue Members

HTTP post `/restapi/v1.0/account/{accountId}/call-queues/{groupId}/bulk-assign`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
groupId = '<ENTER VALUE>'

# POST BODY
body = {
    'addedExtensionIds': [
        '<ENTER VALUE>'
    ],
    'removedExtensionIds': [
        '<ENTER VALUE>'
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/call-queues/{groupId}/bulk-assign', body)
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Queues/assignMultipleCallQueueMembers) in API Explorer.

## Get Paging Group Users

HTTP get `/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
pagingOnlyGroupId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'page': 1,
    #'perPage': 100
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/PagingOnlyGroupUsers.json)

[Try it out](https://developer.ringcentral.com/api-reference/Paging-Only-Groups/listPagingGroupUsers) in API Explorer.

## Get Paging Group Devices

HTTP get `/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
pagingOnlyGroupId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'page': 1,
    #'perPage': 100
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/PagingOnlyGroupDevices.json)

[Try it out](https://developer.ringcentral.com/api-reference/Paging-Only-Groups/listPagingGroupDevices) in API Explorer.

## Assign Paging Group Users and Devices

HTTP post `/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/bulk-assign`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
pagingOnlyGroupId = '<ENTER VALUE>'

# POST BODY
body = {
    'addedUserIds': [
        '<ENTER VALUE>'
    ],
    'removedUserIds': [
        '<ENTER VALUE>'
    ],
    'addedDeviceIds': [
        '<ENTER VALUE>'
    ],
    'removedDeviceIds': [
        '<ENTER VALUE>'
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/bulk-assign', body)
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Paging-Only-Groups/assignMultiplePagingGroupUsersDevices) in API Explorer.

## Create Call Monitoring Group

HTTP post `/restapi/v1.0/account/{accountId}/call-monitoring-groups`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'id': '<ENTER VALUE>',
    'name': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/call-monitoring-groups', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallMonitoringGroup.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Monitoring-Groups/createCallMonitoringGroup) in API Explorer.

## Get Call Monitoring Groups List

HTTP get `/restapi/v1.0/account/{accountId}/call-monitoring-groups`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'page': 1,
    #'perPage': 100,
    #'memberExtensionId': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/call-monitoring-groups', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallMonitoringGroups.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Monitoring-Groups/listCallMonitoringGroups) in API Explorer.

## Updates Call Monitoring Group

HTTP put `/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
groupId = '<ENTER VALUE>'

# POST BODY
body = {
    'id': '<ENTER VALUE>',
    'name': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallMonitoringGroup.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Monitoring-Groups/updateCallMonitoringGroup) in API Explorer.

## Delete Call Monitoring Group

HTTP delete `/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
groupId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Monitoring-Groups/deleteCallMonitoringGroup) in API Explorer.

## Get Call Monitoring Group Member List

HTTP get `/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/members`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
groupId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'page': 1,
    #'perPage': 100
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/members', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallMonitoringGroupMemberList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Monitoring-Groups/listCallMonitoringGroupMembers) in API Explorer.

## Update Call Monitoring Group List

HTTP post `/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/bulk-assign`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
groupId = '<ENTER VALUE>'

# POST BODY
body = {
    'updatedExtensions': [
        {
            'id': '<ENTER VALUE>',
            'permissions': [
                'Monitoring'
            ]
        }
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/bulk-assign', body)
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Monitoring-Groups/updateCallMonitoringGroupList) in API Explorer.

## Parse Phone Number

HTTP post `/restapi/v1.0/number-parser/parse`

```python
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
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ParsePhoneNumberResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Phone-Numbers/parsePhoneNumber) in API Explorer.

## Get Device

HTTP get `/restapi/v1.0/account/{accountId}/device/{deviceId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
deviceId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'syncEmergencyAddress': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/device/{deviceId}', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetDeviceInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Devices/readDevice) in API Explorer.

## Update Device

HTTP put `/restapi/v1.0/account/{accountId}/device/{deviceId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
deviceId = '<ENTER VALUE>'
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'emergencyServiceAddress': {
        'customerName': '<ENTER VALUE>',
        'street': '<ENTER VALUE>',
        'street2': '<ENTER VALUE>',
        'city': '<ENTER VALUE>',
        'zip': '<ENTER VALUE>',
        'state': '<ENTER VALUE>',
        'country': '<ENTER VALUE>'
    },
    'extension': {
        'id': '<ENTER VALUE>'
    },
    'phoneLines': {
        'phoneLines': [
            {
                'id': '<ENTER VALUE>'
            }
        ]
    },
    'useAsCommonPhone': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/restapi/v1.0/account/{accountId}/device/{deviceId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/DeviceResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Devices/updateDevice) in API Explorer.

## Get Extension Device List

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/device`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
extensionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'linePooling': 'Host',
    #'feature': 'Intercom'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/extension/{extensionId}/device', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/GetExtensionDevicesResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Devices/listExtensionDevices) in API Explorer.

## Check Health

HTTP get `/scim/v2/health`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/scim/v2/health')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/checkHealth2) in API Explorer.

## Get Service Provider Config

HTTP get `/scim/v2/ServiceProviderConfig`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/scim/v2/ServiceProviderConfig')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/ServiceProviderConfig.json)

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/readServiceProviderConfig2) in API Explorer.

## Search/List Users

HTTP get `/scim/v2/Users`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'filter': '<ENTER VALUE>',
    #'startIndex': 1,
    #'count': 100
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get('/scim/v2/Users', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/UserSearchResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/searchViaGet2) in API Explorer.

## Create User

HTTP post `/scim/v2/Users`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# POST BODY
body = {
    'active': true,
    'addresses': [
        {
            'country': '<ENTER VALUE>',
            'locality': '<ENTER VALUE>',
            'postalCode': '<ENTER VALUE>',
            'region': '<ENTER VALUE>',
            'streetAddress': '<ENTER VALUE>',
            'type': 'work'
        }
    ],
    'emails': [
        {
            'type': 'work',
            'value': '<ENTER VALUE>'
        }
    ],
    'externalId': '<ENTER VALUE>',
    'id': '<ENTER VALUE>',
    'name': {
        'familyName': '<ENTER VALUE>',
        'givenName': '<ENTER VALUE>'
    },
    'phoneNumbers': [
        {
            'type': 'work',
            'value': '<ENTER VALUE>'
        }
    ],
    'photos': [
        {
            'type': 'photo',
            'value': '<ENTER VALUE>'
        }
    ],
    'schemas': [
        'urn:ietf:params:scim:schemas:core:2.0:User'
    ],
    'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User': {
        'department': '<ENTER VALUE>'
    },
    'userName': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post('/scim/v2/Users', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/UserResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/createUser2) in API Explorer.

## Search/List Users

HTTP post `/scim/v2/Users/.search`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# POST BODY
body = {
    'count': 000,
    'filter': '<ENTER VALUE>',
    'schemas': [
        'urn:ietf:params:scim:api:messages:2.0:SearchRequest'
    ],
    'startIndex': 000
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post('/scim/v2/Users/.search', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/UserSearchResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/searchViaPost2) in API Explorer.

## Get User

HTTP get `/scim/v2/Users/{id}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
id = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/scim/v2/Users/{id}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/UserResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/readUser2) in API Explorer.

## Update/Replace User

HTTP put `/scim/v2/Users/{id}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
id = '<ENTER VALUE>'

# POST BODY
body = {
    'active': true,
    'addresses': [
        {
            'country': '<ENTER VALUE>',
            'locality': '<ENTER VALUE>',
            'postalCode': '<ENTER VALUE>',
            'region': '<ENTER VALUE>',
            'streetAddress': '<ENTER VALUE>',
            'type': 'work'
        }
    ],
    'emails': [
        {
            'type': 'work',
            'value': '<ENTER VALUE>'
        }
    ],
    'externalId': '<ENTER VALUE>',
    'id': '<ENTER VALUE>',
    'name': {
        'familyName': '<ENTER VALUE>',
        'givenName': '<ENTER VALUE>'
    },
    'phoneNumbers': [
        {
            'type': 'work',
            'value': '<ENTER VALUE>'
        }
    ],
    'photos': [
        {
            'type': 'photo',
            'value': '<ENTER VALUE>'
        }
    ],
    'schemas': [
        'urn:ietf:params:scim:schemas:core:2.0:User'
    ],
    'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User': {
        'department': '<ENTER VALUE>'
    },
    'userName': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.put(f'/scim/v2/Users/{id}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/UserResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/replaceUser2) in API Explorer.

## Delete User

HTTP delete `/scim/v2/Users/{id}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
id = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/scim/v2/Users/{id}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/deleteUser2) in API Explorer.

## Update/Patch User

HTTP patch `/scim/v2/Users/{id}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
id = '<ENTER VALUE>'

# POST BODY
body = {
    'Operations': [
        {
            'op': 'add',
            'path': '<ENTER VALUE>',
            'value': '<ENTER VALUE>'
        }
    ],
    'schemas': [
        'urn:ietf:params:scim:api:messages:2.0:PatchOp'
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.patch(f'/scim/v2/Users/{id}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/UserResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/patchUser2) in API Explorer.

## Create CallOut Call Session

HTTP post `/restapi/v1.0/account/{accountId}/telephony/call-out`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'from': {
        'deviceId': '<ENTER VALUE>'
    },
    'to': {
        'phoneNumber': '<ENTER VALUE>',
        'extensionNumber': '<ENTER VALUE>'
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/telephony/call-out', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallSession.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/createCallOutCallSession) in API Explorer.

## Get Call Session Status

HTTP get `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
telephonySessionId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'timestamp': '<ENTER VALUE>',
    #'timeout': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}', queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallSessionObject.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/readCallSessionStatus) in API Explorer.

## Drop Call Session

HTTP delete `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
telephonySessionId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.delete(f'/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/deleteCallSession) in API Explorer.

## Hold Call Party

HTTP post `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/hold`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
telephonySessionId = '<ENTER VALUE>'
partyId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/hold')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallParty.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/holdCallParty) in API Explorer.

## Unhold Call Party

HTTP post `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/unhold`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
telephonySessionId = '<ENTER VALUE>'
partyId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/unhold')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallParty.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/unholdCallParty) in API Explorer.

## Reject Call Party

HTTP post `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reject`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
telephonySessionId = '<ENTER VALUE>'
partyId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reject')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/rejectParty) in API Explorer.

## Transfer Call Party

HTTP post `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/transfer`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
telephonySessionId = '<ENTER VALUE>'
partyId = '<ENTER VALUE>'

# POST BODY
body = {
    'phoneNumber': '<ENTER VALUE>',
    'voicemail': '<ENTER VALUE>',
    'parkOrbit': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/transfer', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallParty.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/transferCallParty) in API Explorer.

## Forward Call Party

HTTP post `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/forward`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
telephonySessionId = '<ENTER VALUE>'
partyId = '<ENTER VALUE>'

# POST BODY
body = {
    'phoneNumber': '<ENTER VALUE>',
    'voicemail': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/forward', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallParty.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/forwardCallParty) in API Explorer.

## Call Flip on Party

HTTP post `/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/flip`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
telephonySessionId = '<ENTER VALUE>'
partyId = '<ENTER VALUE>'

# POST BODY
body = {
    'callFlipId': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/flip', body)
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/callFlipParty) in API Explorer.

## Get Call Party Status

HTTP get `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
telephonySessionId = '<ENTER VALUE>'
partyId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallParty.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/readCallPartyStatus) in API Explorer.

## Update Call Party

HTTP patch `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
telephonySessionId = '<ENTER VALUE>'
partyId = '<ENTER VALUE>'

# POST BODY
body = {
    'party': {
        'muted': true,
        'standAlone': true
    }
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.patch(f'/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallParty.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/updateCallParty) in API Explorer.

## Create Recording

HTTP post `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
telephonySessionId = '<ENTER VALUE>'
partyId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/startCallRecording) in API Explorer.

## Pause/Resume Recording

HTTP patch `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings/{recordingId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
telephonySessionId = '<ENTER VALUE>'
partyId = '<ENTER VALUE>'
recordingId = '<ENTER VALUE>'

# OPTIONAL QUERY PARAMETERS
queryParams = {
    #'brandId': '~'
}

# POST BODY
body = {
    'active': true
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.patch(f'/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings/{recordingId}', body, queryParams)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/CallRecording.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/pauseResumeCallRecording) in API Explorer.

## Supervise Call

HTTP post `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/supervise`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
telephonySessionId = '<ENTER VALUE>'

# POST BODY
body = {
    'mode': 'Listen',
    'deviceId': '<ENTER VALUE>',
    'extensionNumber': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/supervise', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/SuperviseCallSession.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/superviseCallSession) in API Explorer.

## Get Glip Data Archive

HTTP get `/restapi/v1.0/glip/data-export/{taskId}/archive/{archiveId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
taskId = '<ENTER VALUE>'
archiveId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/glip/data-export/{taskId}/archive/{archiveId}')
```

You can get response binary data by `binary = r.response().content`

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Compliance-Exports/readComplianceArchive) in API Explorer.

## Create Data Export Task

HTTP post `/restapi/v1.0/glip/data-export`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# POST BODY
body = {
    'dateFrom': '<ENTER VALUE>',
    'dateTo': '<ENTER VALUE>',
    'userIds': [
        '<ENTER VALUE>'
    ],
    'chatIds': [
        '<ENTER VALUE>'
    ]
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post('/restapi/v1.0/glip/data-export', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/DataExportTask.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Compliance-Exports/createDataExportTask) in API Explorer.

## Get Data Export Task

HTTP get `/restapi/v1.0/glip/data-export/{taskId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
taskId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/glip/data-export/{taskId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/DataExportTask.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Compliance-Exports/readDataExportTask) in API Explorer.

## Create Message Store Report

HTTP post `/restapi/v1.0/account/{accountId}/message-store-report`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'

# POST BODY
body = {
    'dateFrom': '<ENTER VALUE>',
    'dateTo': '<ENTER VALUE>'
}

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.post(f'/restapi/v1.0/account/{accountId}/message-store-report', body)
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/MessageStoreReport.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Exports/createMessageStoreReport) in API Explorer.

## Get Message Store Report Task

HTTP get `/restapi/v1.0/account/{accountId}/message-store-report/{taskId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
taskId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/message-store-report/{taskId}')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/MessageStoreReport.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Exports/readMessageStoreReportTask) in API Explorer.

## Get Message Store Report Archive

HTTP get `/restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
taskId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive')
```

You can get response json data by `json = r.json()`
- `json` is an object with [this definition](./bin/definitions/MessageStoreReportArchive.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Exports/readMessageStoreReportArchive) in API Explorer.

## Get Message Store Report Archive Content

HTTP get `/restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive/{archiveId}`

```python
# https://developers.ringcentral.com/my-account.html#/applications
# Find your credentials at the above url, set them as environment variables, or enter them below

# PATH PARAMETERS
accountId = '<ENTER VALUE>'
taskId = '<ENTER VALUE>'
archiveId = '<ENTER VALUE>'

import os
from ringcentral import SDK
rcsdk = SDK(os.environ['clientId'], os.environ['clientSecret'], os.environ['serverURL'])
platform = rcsdk.platform()
platform.login(os.environ['username'], os.environ['extension'], os.environ['password'])
r = platform.get(f'/restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive/{archiveId}')
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Message-Exports/readMessageStoreReportArchiveContent) in API Explorer.

