# RingCentral PHP SDK Code Samples



## Get API Versions

HTTP get `/restapi`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetVersionsResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/API-Info/readAPIVersions) in API Explorer.

## Get Version Info

HTTP get `/restapi/{apiVersion}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$apiVersion = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/{$apiVersion}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetVersionResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/API-Info/readAPIVersion) in API Explorer.

## Get Service Status

HTTP get `/restapi/v1.0/status`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/status");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/API-Info/readAPIStatus) in API Explorer.

## Get User Call Log Records

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'extensionNumber' => '<ENTER VALUE>',
    //'showBlocked' => 'true',
    //'phoneNumber' => '<ENTER VALUE>',
    //'direction' => array( 'Inbound', 'Outbound' ),
    //'sessionId' => '<ENTER VALUE>',
    //'type' => array( 'Voice', 'Fax' ),
    //'transport' => array( 'PSTN', 'VoIP' ),
    //'view' => 'Simple',
    //'withRecording' => true,
    //'recordingType' => 'Automatic',
    //'dateTo' => '<ENTER VALUE>',
    //'dateFrom' => '<ENTER VALUE>',
    //'page' => '1',
    //'perPage' => '100',
    //'showDeleted' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/call-log");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/UserCallLogResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/readUserCallLog) in API Explorer.

## Delete User Call Log

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'dateTo' => '<ENTER VALUE>',
    //'phoneNumber' => '<ENTER VALUE>',
    //'extensionNumber' => '<ENTER VALUE>',
    //'type' => array( 'Voice', 'Fax' ),
    //'direction' => array( 'Inbound', 'Outbound' ),
    //'dateFrom' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/call-log");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/deleteUserCallLog) in API Explorer.

## Sync User Call Log

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log-sync`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'syncType' => array( 'FSync', 'ISync' ),
    //'syncToken' => '<ENTER VALUE>',
    //'dateFrom' => '<ENTER VALUE>',
    //'recordCount' => 000,
    //'statusGroup' => array( 'Missed', 'All' ),
    //'view' => 'Simple',
    //'showDeleted' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/call-log-sync");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallLogSync.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/syncUserCallLog) in API Explorer.

## Get User Call Record

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$callRecordId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'view' => 'Simple'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/call-log/{$callRecordId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/UserCallLogRecord.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/readUserCallRecord) in API Explorer.

## Get User Active Calls

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'direction' => array( 'Inbound', 'Outbound' ),
    //'view' => 'Simple',
    //'type' => array( 'Voice', 'Fax' ),
    //'page' => '1',
    //'perPage' => '100'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/active-calls");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ActiveCallsResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/listExtensionActiveCalls) in API Explorer.

## Get Company Call Log Records

HTTP get `/restapi/v1.0/account/{accountId}/call-log`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'extensionNumber' => '<ENTER VALUE>',
    //'phoneNumber' => '<ENTER VALUE>',
    //'direction' => array( 'Inbound', 'Outbound' ),
    //'type' => array( 'Voice', 'Fax' ),
    //'view' => 'Simple',
    //'withRecording' => true,
    //'recordingType' => 'Automatic',
    //'dateFrom' => '<ENTER VALUE>',
    //'dateTo' => '<ENTER VALUE>',
    //'page' => '1',
    //'perPage' => '100',
    //'sessionId' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/call-log");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/AccountCallLogResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/readCompanyCallLog) in API Explorer.

## Get Company Call Log Record(s)

HTTP get `/restapi/v1.0/account/{accountId}/call-log/{callRecordId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$callRecordId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/call-log/{$callRecordId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CompanyCallLogRecord.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/readCompanyCallRecord) in API Explorer.

## Get Company Active Calls

HTTP get `/restapi/v1.0/account/{accountId}/active-calls`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'direction' => array( 'Inbound', 'Outbound' ),
    //'view' => 'Simple',
    //'type' => array( 'Voice', 'Fax' ),
    //'transport' => array( 'PSTN', 'VoIP' ),
    //'page' => '1',
    //'perPage' => '100'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/active-calls");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ActiveCallsResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Log/listCompanyActiveCalls) in API Explorer.

## Get Call Recording

HTTP get `/restapi/v1.0/account/{accountId}/recording/{recordingId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$recordingId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/recording/{$recordingId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetCallRecordingResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Recordings/readCallRecording) in API Explorer.

## Get Call Recordings Data

HTTP get `/restapi/v1.0/account/{accountId}/recording/{recordingId}/content`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$recordingId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/recording/{$recordingId}/content");
?>
```

You can get response binary data by `$binary = $r->response()->raw()`

[Try it out](https://developer.ringcentral.com/api-reference/Call-Recordings/listCallRecordingData) in API Explorer.

## Create SMS/MMS Message

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/sms`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'from' => array(
        'phoneNumber' => '<ENTER VALUE>'
    ),
    'to' => array(
        array(
            'phoneNumber' => '<ENTER VALUE>'
        )  
    ),
    'text' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/sms");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetMessageInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SMS/createSMSMessage) in API Explorer.

## Create Internal Text Message

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'from' => array(
        'extensionId' => '<ENTER VALUE>'
    ),
    'replyOn' => 000,
    'text' => '<ENTER VALUE>',
    'to' => array(
        array(
            'extensionId' => '<ENTER VALUE>'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/company-pager");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetMessageInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Pager-Messages/createInternalTextMessage) in API Explorer.

## Create Fax Message

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/fax`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/fax");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/FaxResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Fax/createFaxMessage) in API Explorer.

## Get Fax Cover Page List

HTTP get `/restapi/v1.0/dictionary/fax-cover-page`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'page' => '1',
    //'perPage' => '100'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/dictionary/fax-cover-page");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ListFaxCoverPagesResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Fax/listFaxCoverPages) in API Explorer.

## Get Message List

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'availability' => array( 'Alive', 'Deleted', 'Purged' ),
    //'conversationId' => 000,
    //'dateFrom' => '<ENTER VALUE>',
    //'dateTo' => '<ENTER VALUE>',
    //'direction' => array( 'Inbound', 'Outbound' ),
    //'distinctConversations' => true,
    //'messageType' => array( 'Fax', 'SMS', 'VoiceMail', 'Pager', 'Text' ),
    //'readStatus' => array( 'Read', 'Unread' ),
    //'page' => '1',
    //'perPage' => '100',
    //'phoneNumber' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/message-store");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetMessageList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/listMessages) in API Explorer.

## Delete Conversation

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'conversationId' => array( string ),
    //'dateTo' => '<ENTER VALUE>',
    //'type' => 'All'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/message-store");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/deleteMessageByFilter) in API Explorer.

## Get Message

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$messageId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/message-store/{$messageId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetMessageInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/readMessage) in API Explorer.

## Update Message(s)

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$messageId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'readStatus' => 'Read'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/message-store/{$messageId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetMessageInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/updateMessage) in API Explorer.

## Delete Message

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$messageId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'purge' => true,
    //'conversationId' => 000
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/message-store/{$messageId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/deleteMessage) in API Explorer.

## Get Message Content

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$attachmentId = '<ENTER VALUE>';
$messageId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'contentDisposition' => 'Inline'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/message-store/{$messageId}/content/{$attachmentId}");
?>
```

You can get response binary data by `$binary = $r->response()->raw()`

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/readMessageContent) in API Explorer.

## Sync Messages

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'conversationId' => 000,
    //'dateFrom' => '<ENTER VALUE>',
    //'dateTo' => '<ENTER VALUE>',
    //'direction' => array( 'Inbound', 'Outbound' ),
    //'distinctConversations' => true,
    //'messageType' => array( 'Fax', 'SMS', 'VoiceMail', 'Pager', 'Text' ),
    //'recordCount' => 000,
    //'syncToken' => '<ENTER VALUE>',
    //'syncType' => array( 'FSync', 'ISync' )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/message-sync");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetMessageSyncResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/syncMessages) in API Explorer.

## Get Message Store Configuration

HTTP get `/restapi/v1.0/account/{accountId}/message-store-configuration`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/message-store-configuration");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/MessageStoreConfiguration.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/readMessageStoreConfiguration) in API Explorer.

## Update Message Store Configuration

HTTP put `/restapi/v1.0/account/{accountId}/message-store-configuration`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'retentionPeriod' => 000
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/message-store-configuration");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/MessageStoreConfiguration.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Store/updateMessageStoreConfiguration) in API Explorer.

## Make RingOut Call

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'from' => array(
        'phoneNumber' => '<ENTER VALUE>',
        'forwardingNumberId' => '<ENTER VALUE>'
    ),
    'to' => array(
        'phoneNumber' => '<ENTER VALUE>'
    ),
    'callerId' => array(
        'phoneNumber' => '<ENTER VALUE>'
    ),
    'playPrompt' => true,
    'country' => array(
        'id' => '<ENTER VALUE>'
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/ring-out");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetRingOutStatusResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/RingOut/createRingOutCall) in API Explorer.

## Get RingOut Call Status

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$ringoutId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/ring-out/{$ringoutId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetRingOutStatusResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/RingOut/readRingOutCallStatus) in API Explorer.

## Cancel RingOut Call

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$ringoutId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/ring-out/{$ringoutId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/RingOut/deleteRingOutCall) in API Explorer.

## Get Contact List

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'startsWith' => '<ENTER VALUE>',
    //'sortBy' => array( 'FirstName', 'LastName', 'Company' ),
    //'page' => '1',
    //'perPage' => '100',
    //'phoneNumber' => array( string )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/address-book/contact");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ContactList.json)

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/listContacts) in API Explorer.

## Create Contact

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'dialingPlan' => '<ENTER VALUE>'
)

// POST BODY
$body = array(
    'firstName' => '<ENTER VALUE>',
    'lastName' => '<ENTER VALUE>',
    'middleName' => '<ENTER VALUE>',
    'nickName' => '<ENTER VALUE>',
    'company' => '<ENTER VALUE>',
    'jobTitle' => '<ENTER VALUE>',
    'email' => '<ENTER VALUE>',
    'email2' => '<ENTER VALUE>',
    'email3' => '<ENTER VALUE>',
    'birthday' => '<ENTER VALUE>',
    'webPage' => '<ENTER VALUE>',
    'notes' => '<ENTER VALUE>',
    'homePhone' => '<ENTER VALUE>',
    'homePhone2' => '<ENTER VALUE>',
    'businessPhone' => '<ENTER VALUE>',
    'businessPhone2' => '<ENTER VALUE>',
    'mobilePhone' => '<ENTER VALUE>',
    'businessFax' => '<ENTER VALUE>',
    'companyPhone' => '<ENTER VALUE>',
    'assistantPhone' => '<ENTER VALUE>',
    'carPhone' => '<ENTER VALUE>',
    'otherPhone' => '<ENTER VALUE>',
    'otherFax' => '<ENTER VALUE>',
    'callbackPhone' => '<ENTER VALUE>',
    'homeAddress' => array(
        'street' => '<ENTER VALUE>',
        'city' => '<ENTER VALUE>',
        'state' => '<ENTER VALUE>',
        'zip' => '<ENTER VALUE>'
    ),
    'businessAddress' => array(
        'street' => '<ENTER VALUE>',
        'city' => '<ENTER VALUE>',
        'state' => '<ENTER VALUE>',
        'zip' => '<ENTER VALUE>'
    ),
    'otherAddress' => array(
        'street' => '<ENTER VALUE>',
        'city' => '<ENTER VALUE>',
        'state' => '<ENTER VALUE>',
        'zip' => '<ENTER VALUE>'
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/address-book/contact");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/PersonalContactResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/createContact) in API Explorer.

## Get Contact

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$contactId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/address-book/contact/{$contactId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/PersonalContactResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/readContact) in API Explorer.

## Update Contact

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$contactId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'dialingPlan' => '<ENTER VALUE>'
)

// POST BODY
$body = array(
    'firstName' => '<ENTER VALUE>',
    'lastName' => '<ENTER VALUE>',
    'middleName' => '<ENTER VALUE>',
    'nickName' => '<ENTER VALUE>',
    'company' => '<ENTER VALUE>',
    'jobTitle' => '<ENTER VALUE>',
    'email' => '<ENTER VALUE>',
    'email2' => '<ENTER VALUE>',
    'email3' => '<ENTER VALUE>',
    'birthday' => '<ENTER VALUE>',
    'webPage' => '<ENTER VALUE>',
    'notes' => '<ENTER VALUE>',
    'homePhone' => '<ENTER VALUE>',
    'homePhone2' => '<ENTER VALUE>',
    'businessPhone' => '<ENTER VALUE>',
    'businessPhone2' => '<ENTER VALUE>',
    'mobilePhone' => '<ENTER VALUE>',
    'businessFax' => '<ENTER VALUE>',
    'companyPhone' => '<ENTER VALUE>',
    'assistantPhone' => '<ENTER VALUE>',
    'carPhone' => '<ENTER VALUE>',
    'otherPhone' => '<ENTER VALUE>',
    'otherFax' => '<ENTER VALUE>',
    'callbackPhone' => '<ENTER VALUE>',
    'homeAddress' => array(
        'street' => '<ENTER VALUE>',
        'city' => '<ENTER VALUE>',
        'state' => '<ENTER VALUE>',
        'zip' => '<ENTER VALUE>'
    ),
    'businessAddress' => array(
        'street' => '<ENTER VALUE>',
        'city' => '<ENTER VALUE>',
        'state' => '<ENTER VALUE>',
        'zip' => '<ENTER VALUE>'
    ),
    'otherAddress' => array(
        'street' => '<ENTER VALUE>',
        'city' => '<ENTER VALUE>',
        'state' => '<ENTER VALUE>',
        'zip' => '<ENTER VALUE>'
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/address-book/contact/{$contactId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/PersonalContactResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/updateContact) in API Explorer.

## Delete Contact

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$contactId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/address-book/contact/{$contactId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/deleteContact) in API Explorer.

## Address Book Synchronization

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book-sync`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'syncType' => array( 'FSync', 'ISync' ),
    //'syncToken' => '<ENTER VALUE>',
    //'perPage' => 000,
    //'pageId' => 000
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/address-book-sync");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/AddressBookSync.json)

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/syncAddressBook) in API Explorer.

## Get Favorite Contact List

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/favorite");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/FavoriteContactList.json)

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/listFavoriteContacts) in API Explorer.

## Update Favorite Contact List

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'records' => array(
        array(
            'id' => '<ENTER VALUE>',
            'extensionId' => '<ENTER VALUE>',
            'contactId' => '<ENTER VALUE>'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/favorite");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/FavoriteContactList.json)

[Try it out](https://developer.ringcentral.com/api-reference/External-Contacts/updateFavoriteContactList) in API Explorer.

## Search Company Directory Entries

HTTP post `/restapi/v1.0/account/{accountId}/directory/entries/search`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'searchString' => '<ENTER VALUE>',
    'showFederated' => 'true',
    'extensionType' => 'User',
    'orderBy' => array(
        array(
            'index' => 000,
            'fieldName' => 'firstName',
            'direction' => 'Asc'
        )  
    ),
    'page' => 000,
    'perPage' => 000
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/directory/entries/search");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/DirectoryResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Internal-Contacts/searchDirectoryEntries) in API Explorer.

## Get Corporate Directory Entry

HTTP get `/restapi/v1.0/account/{accountId}/directory/entries/{entryId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$entryId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/directory/entries/{$entryId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ContactResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Internal-Contacts/readDirectoryEntry) in API Explorer.

## Get Company Directory Entries

HTTP get `/restapi/v1.0/account/{accountId}/directory/entries`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'showFederated' => 'true',
    //'type' => 'User',
    //'page' => '1',
    //'perPage' => '1000',
    //'siteId' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/directory/entries");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/DirectoryResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Internal-Contacts/listDirectoryEntries) in API Explorer.

## Get Account Federation

HTTP get `/restapi/v1.0/account/{accountId}/directory/federation`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/directory/federation");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/FederationResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Internal-Contacts/readAccountFederation) in API Explorer.

## Get User Presence Status

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'detailedTelephonyState' => true,
    //'sipData' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/presence");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetPresenceInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Presence/readUserPresenceStatus) in API Explorer.

## Update User Presence Status

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'userStatus' => 'Offline',
    'dndStatus' => 'TakeAllCalls',
    'message' => '<ENTER VALUE>',
    'allowSeeMyPresence' => true,
    'ringOnMonitoredCall' => true,
    'pickUpCallsOnHold' => true,
    'activeCalls' => array(
        array(
            'id' => '<ENTER VALUE>',
            'direction' => 'Inbound',
            'from' => '<ENTER VALUE>',
            'fromName' => '<ENTER VALUE>',
            'to' => '<ENTER VALUE>',
            'toName' => '<ENTER VALUE>',
            'startTime' => '<ENTER VALUE>',
            'telephonyStatus' => '<ENTER VALUE>',
            'sipData' => array(
                'callId' => '<ENTER VALUE>',
                'toTag' => '<ENTER VALUE>',
                'fromTag' => '<ENTER VALUE>',
                'remoteUri' => '<ENTER VALUE>',
                'localUri' => '<ENTER VALUE>',
                'rcSessionId' => '<ENTER VALUE>'
            ),
            'sessionId' => '<ENTER VALUE>',
            'terminationType' => '<ENTER VALUE>'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/presence");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/PresenceInfoResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Presence/updateUserPresenceStatus) in API Explorer.

## Get User Presence Status List

HTTP get `/restapi/v1.0/account/{accountId}/presence`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'detailedTelephonyState' => true,
    //'sipData' => true,
    //'page' => 000,
    //'perPage' => 000
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/presence");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/AccountPresenceInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Presence/readAccountPresence) in API Explorer.

## Get Chats

HTTP get `/restapi/v1.0/glip/chats`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'type' => array( 'Everyone', 'Group', 'Personal', 'Direct', 'Team' ),
    //'recordCount' => '30',
    //'pageToken' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/chats");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipChatsList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Chats/listGlipChats) in API Explorer.

## Get Chat

HTTP get `/restapi/v1.0/glip/chats/{chatId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/chats/{$chatId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipChatInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Chats/readGlipChat) in API Explorer.

## Get Conversations

HTTP get `/restapi/v1.0/glip/conversations`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'recordCount' => '30',
    //'pageToken' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/conversations");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipConversationsList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Conversations/listGlipConversations) in API Explorer.

## Create/Open Conversation

HTTP post `/restapi/v1.0/glip/conversations`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// POST BODY
$body = array(
    'members' => array(
        array(
            'id' => '<ENTER VALUE>',
            'email' => '<ENTER VALUE>'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/conversations");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipConversationInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Conversations/createGlipConversation) in API Explorer.

## Get Conversation

HTTP get `/restapi/v1.0/glip/conversations/{chatId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/conversations/{$chatId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipConversationInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Conversations/readGlipConversation) in API Explorer.

## Get Teams

HTTP get `/restapi/v1.0/glip/teams`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'recordCount' => '30',
    //'pageToken' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/teams");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipTeamsList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Teams/listGlipTeams) in API Explorer.

## Create Team

HTTP post `/restapi/v1.0/glip/teams`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// POST BODY
$body = array(
    'public' => true,
    'name' => '<ENTER VALUE>',
    'description' => '<ENTER VALUE>',
    'members' => array(
        array(
            'id' => '<ENTER VALUE>',
            'email' => '<ENTER VALUE>'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/teams");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipTeamInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Teams/createGlipTeam) in API Explorer.

## Get Team

HTTP get `/restapi/v1.0/glip/teams/{chatId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/teams/{$chatId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipTeamInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Teams/readGlipTeam) in API Explorer.

## Update Team

HTTP patch `/restapi/v1.0/glip/teams/{chatId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'public' => true,
    'name' => '<ENTER VALUE>',
    'description' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->patch("/restapi/v1.0/glip/teams/{$chatId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipTeamInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Teams/patchGlipTeam) in API Explorer.

## Delete Team

HTTP delete `/restapi/v1.0/glip/teams/{chatId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/glip/teams/{$chatId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Teams/deleteGlipTeam) in API Explorer.

## Join Team

HTTP post `/restapi/v1.0/glip/teams/{chatId}/join`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/teams/{$chatId}/join");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Teams/joinGlipTeam) in API Explorer.

## Leave Team

HTTP post `/restapi/v1.0/glip/teams/{chatId}/leave`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/teams/{$chatId}/leave");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Teams/leaveGlipTeam) in API Explorer.

## Add Team Members

HTTP post `/restapi/v1.0/glip/teams/{chatId}/add`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'members' => array(
        array(
            'id' => '<ENTER VALUE>',
            'email' => '<ENTER VALUE>'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/teams/{$chatId}/add");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Teams/addGlipTeamMembers) in API Explorer.

## Remove Team Members

HTTP post `/restapi/v1.0/glip/teams/{chatId}/remove`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'members' => array(
        array(
            'id' => '<ENTER VALUE>'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/teams/{$chatId}/remove");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Teams/removeGlipTeamMembers) in API Explorer.

## Archive Team

HTTP post `/restapi/v1.0/glip/teams/{chatId}/archive`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/teams/{$chatId}/archive");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Teams/archiveGlipTeam) in API Explorer.

## Unarchive Team

HTTP post `/restapi/v1.0/glip/teams/{chatId}/unarchive`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/teams/{$chatId}/unarchive");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Teams/unarchiveGlipTeam) in API Explorer.

## Get Everyone Chat

HTTP get `/restapi/v1.0/glip/everyone`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/everyone");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipEveryoneInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Teams/readGlipEveryone) in API Explorer.

## Update Everyone Сhat

HTTP patch `/restapi/v1.0/glip/everyone`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// POST BODY
$body = array(
    'name' => 000,
    'description' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->patch("/restapi/v1.0/glip/everyone");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipEveryoneInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Teams/patchGlipEveryone) in API Explorer.

## Get Recent Chats

HTTP get `/restapi/v1.0/glip/recent/chats`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'type' => array( 'Everyone', 'Group', 'Personal', 'Direct', 'Team' ),
    //'recordCount' => '30'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/recent/chats");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipChatsListWithoutNavigation.json)

[Try it out](https://developer.ringcentral.com/api-reference/Chats/listRecentChats) in API Explorer.

## Get Favorite Chats

HTTP get `/restapi/v1.0/glip/favorites`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'recordCount' => '30'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/favorites");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipChatsListWithoutNavigation.json)

[Try it out](https://developer.ringcentral.com/api-reference/Chats/listFavoriteChats) in API Explorer.

## Add Chat to Favorites

HTTP post `/restapi/v1.0/glip/chats/{chatId}/favorite`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/chats/{$chatId}/favorite");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Chats/favoriteGlipChat) in API Explorer.

## Remove Chat from Favorites

HTTP post `/restapi/v1.0/glip/chats/{chatId}/unfavorite`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/chats/{$chatId}/unfavorite");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Chats/unfavoriteGlipChat) in API Explorer.

## Mark Chat as Read

HTTP post `/restapi/v1.0/glip/chats/{chatId}/read`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/chats/{$chatId}/read");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Chats/markChatRead) in API Explorer.

## Mark Chat as Unread

HTTP post `/restapi/v1.0/glip/chats/{chatId}/unread`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/chats/{$chatId}/unread");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Chats/markChatUnread) in API Explorer.

## Get Post

HTTP get `/restapi/v1.0/glip/chats/{chatId}/posts/{postId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';
$postId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/chats/{$chatId}/posts/{$postId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipPostInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Posts/readGlipPost) in API Explorer.

## Update Post

HTTP patch `/restapi/v1.0/glip/chats/{chatId}/posts/{postId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';
$postId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'text' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->patch("/restapi/v1.0/glip/chats/{$chatId}/posts/{$postId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipPostInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Posts/patchGlipPost) in API Explorer.

## Delete Post

HTTP delete `/restapi/v1.0/glip/chats/{chatId}/posts/{postId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';
$postId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/glip/chats/{$chatId}/posts/{$postId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Posts/deleteGlipPost) in API Explorer.

## Get Posts

HTTP get `/restapi/v1.0/glip/chats/{chatId}/posts`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'recordCount' => '30',
    //'pageToken' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/chats/{$chatId}/posts");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipPostsList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Posts/readGlipPosts) in API Explorer.

## Create Post

HTTP post `/restapi/v1.0/glip/chats/{chatId}/posts`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'text' => '<ENTER VALUE>',
    'attachments' => array(
        array(
            'id' => '<ENTER VALUE>',
            'type' => '<ENTER VALUE>'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/chats/{$chatId}/posts");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipPostInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Posts/createGlipPost) in API Explorer.

## Get User Events List

HTTP get `/restapi/v1.0/glip/events`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'recordCount' => '30',
    //'pageToken' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/events");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipEventsInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Calendar-Events/readGlipEvents) in API Explorer.

## Create Event

HTTP post `/restapi/v1.0/glip/events`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// POST BODY
$body = array(
    'id' => '<ENTER VALUE>',
    'creatorId' => '<ENTER VALUE>',
    'title' => '<ENTER VALUE>',
    'startTime' => '<ENTER VALUE>',
    'endTime' => '<ENTER VALUE>',
    'allDay' => true,
    'recurrence' => 'None',
    'endingCondition' => '<ENTER VALUE>',
    'endingAfter' => 000,
    'endingOn' => 'None',
    'color' => 'Black',
    'location' => '<ENTER VALUE>',
    'description' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/events");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipEventInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Calendar-Events/createEvent) in API Explorer.

## Get Event

HTTP get `/restapi/v1.0/glip/events/{eventId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$eventId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/events/{$eventId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipEventInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Calendar-Events/readEvent) in API Explorer.

## Update Event

HTTP put `/restapi/v1.0/glip/events/{eventId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$eventId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'id' => '<ENTER VALUE>',
    'creatorId' => '<ENTER VALUE>',
    'title' => '<ENTER VALUE>',
    'startTime' => '<ENTER VALUE>',
    'endTime' => '<ENTER VALUE>',
    'allDay' => true,
    'recurrence' => 'None',
    'endingCondition' => '<ENTER VALUE>',
    'endingAfter' => 000,
    'endingOn' => 'None',
    'color' => 'Black',
    'location' => '<ENTER VALUE>',
    'description' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/glip/events/{$eventId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipEventInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Calendar-Events/updateEvent) in API Explorer.

## Delete Event

HTTP delete `/restapi/v1.0/glip/events/{eventId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$eventId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/glip/events/{$eventId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Calendar-Events/deleteEvent) in API Explorer.

## Create Event by Group ID

HTTP post `/restapi/v1.0/glip/groups/{groupId}/events`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$groupId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'id' => '<ENTER VALUE>',
    'creatorId' => '<ENTER VALUE>',
    'title' => '<ENTER VALUE>',
    'startTime' => '<ENTER VALUE>',
    'endTime' => '<ENTER VALUE>',
    'allDay' => true,
    'recurrence' => 'None',
    'endingCondition' => '<ENTER VALUE>',
    'endingAfter' => 000,
    'endingOn' => 'None',
    'color' => 'Black',
    'location' => '<ENTER VALUE>',
    'description' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/groups/{$groupId}/events");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipEventInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Calendar-Events/createEventbyGroupId) in API Explorer.

## Get Group Events

HTTP get `/restapi/v1.0/glip/groups/{groupId}/events`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$groupId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/groups/{$groupId}/events");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipEventInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Calendar-Events/listGroupEvents) in API Explorer.

## Get Chat Tasks

HTTP get `/restapi/v1.0/glip/chats/{chatId}/tasks`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'creationTimeTo' => 'now',
    //'creationTimeFrom' => '<ENTER VALUE>',
    //'creatorId' => array( string ),
    //'status' => array( 'Pending', 'InProgress', 'Completed' ),
    //'assignmentStatus' => 'Unassigned',
    //'assigneeId' => array( string ),
    //'assigneeStatus' => 'Pending',
    //'pageToken' => '<ENTER VALUE>',
    //'recordCount' => '30'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/chats/{$chatId}/tasks");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/TaskList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Tasks/listChatTasks) in API Explorer.

## Create Task

HTTP post `/restapi/v1.0/glip/chats/{chatId}/tasks`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'subject' => '<ENTER VALUE>',
    'assignees' => array(
        array(
            'id' => '<ENTER VALUE>'
        )  
    ),
    'completenessCondition' => 'Simple',
    'startDate' => '<ENTER VALUE>',
    'dueDate' => '<ENTER VALUE>',
    'color' => 'Black',
    'section' => '<ENTER VALUE>',
    'description' => '<ENTER VALUE>',
    'recurrence' => array(
        'schedule' => 'None',
        'endingCondition' => 'None',
        'endingAfter' => 000,
        'endingOn' => '<ENTER VALUE>'
    ),
    'attachments' => array(
        array(
            'id' => '<ENTER VALUE>'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/chats/{$chatId}/tasks");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/TaskList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Tasks/createTask) in API Explorer.

## Get Task

HTTP get `/restapi/v1.0/glip/tasks/{taskId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$taskId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/tasks/{$taskId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/TaskList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Tasks/readTask) in API Explorer.

## Patch Task

HTTP patch `/restapi/v1.0/glip/tasks/{taskId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$taskId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'subject' => '<ENTER VALUE>',
    'assignees' => array(
        array(
            'id' => '<ENTER VALUE>'
        )  
    ),
    'completenessCondition' => 'Simple',
    'startDate' => '<ENTER VALUE>',
    'dueDate' => '<ENTER VALUE>',
    'color' => 'Black',
    'section' => '<ENTER VALUE>',
    'description' => '<ENTER VALUE>',
    'recurrence' => array(
        'schedule' => 'None',
        'endingCondition' => 'None',
        'endingAfter' => 000,
        'endingOn' => '<ENTER VALUE>'
    ),
    'attachments' => array(
        array(
            'id' => '<ENTER VALUE>'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->patch("/restapi/v1.0/glip/tasks/{$taskId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/TaskList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Tasks/patchTask) in API Explorer.

## Delete Task

HTTP delete `/restapi/v1.0/glip/tasks/{taskId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$taskId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/glip/tasks/{$taskId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Tasks/deleteTask) in API Explorer.

## Complete Task

HTTP post `/restapi/v1.0/glip/tasks/{taskId}/complete`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$taskId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'status' => 'Incomplete',
    'assignees' => array(
        array(
            'id' => '<ENTER VALUE>'
        )  
    ),
    'completenessPercentage' => 000
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/tasks/{$taskId}/complete");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/TaskList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Tasks/completeTask) in API Explorer.

## Get Person

HTTP get `/restapi/v1.0/glip/persons/{personId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$personId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/persons/{$personId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipPersonInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Profile/readGlipPerson) in API Explorer.

## Get Company Info

HTTP get `/restapi/v1.0/glip/companies/{companyId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$companyId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/companies/{$companyId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipCompany.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Profile/readGlipCompany) in API Explorer.

## Create Webhook in Group

HTTP post `/restapi/v1.0/glip/groups/{groupId}/webhooks`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$groupId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/groups/{$groupId}/webhooks");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipWebhookInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Webhooks/createGlipGroupWebhook) in API Explorer.

## Get Webhooks in Group

HTTP get `/restapi/v1.0/glip/groups/{groupId}/webhooks`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$groupId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/groups/{$groupId}/webhooks");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipWebhookList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Webhooks/listGlipGroupWebhooks) in API Explorer.

## Get Webhooks

HTTP get `/restapi/v1.0/glip/webhooks`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/webhooks");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipWebhookList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Webhooks/listGlipWebhooks) in API Explorer.

## Get Webhook

HTTP get `/restapi/v1.0/glip/webhooks/{webhookId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$webhookId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/webhooks/{$webhookId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipWebhookList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Webhooks/readGlipWebhook) in API Explorer.

## Delete Webhook

HTTP delete `/restapi/v1.0/glip/webhooks/{webhookId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$webhookId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/glip/webhooks/{$webhookId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Webhooks/deleteGlipWebhook) in API Explorer.

## Activate Webhook

HTTP post `/restapi/v1.0/glip/webhooks/{webhookId}/activate`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$webhookId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/webhooks/{$webhookId}/activate");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Webhooks/activateGlipWebhook) in API Explorer.

## Suspend Webhook

HTTP post `/restapi/v1.0/glip/webhooks/{webhookId}/suspend`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$webhookId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/webhooks/{$webhookId}/suspend");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Webhooks/suspendGlipWebhook) in API Explorer.

## Get Preferences

HTTP get `/restapi/v1.0/glip/preferences`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/preferences");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GlipPreferencesInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Profile/readGlipPreferences) in API Explorer.

## Get Scheduled Meetings

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/meeting");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/MeetingsResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Management/listMeetings) in API Explorer.

## Create Meetings

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'topic' => '<ENTER VALUE>',
    'meetingType' => '<ENTER VALUE>',
    'schedule' => array(
        'startTime' => '<ENTER VALUE>',
        'durationInMinutes' => 000,
        'timeZone' => array(
            'uri' => '<ENTER VALUE>',
            'id' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'description' => '<ENTER VALUE>'
        )
    ),
    'password' => '<ENTER VALUE>',
    'host' => array(
        'id' => '<ENTER VALUE>'
    ),
    'allowJoinBeforeHost' => true,
    'startHostVideo' => true,
    'startParticipantsVideo' => true,
    'usePersonalMeetingId' => true,
    'audioOptions' => array(
        '<ENTER VALUE>'  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/meeting");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/MeetingResponseResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Management/createMeeting) in API Explorer.

## Get Meeting Info

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$meetingId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/meeting/{$meetingId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/MeetingResponseResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Management/readMeeting) in API Explorer.

## Update Meeting

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$meetingId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'topic' => '<ENTER VALUE>',
    'meetingType' => '<ENTER VALUE>',
    'schedule' => array(
        'startTime' => '<ENTER VALUE>',
        'durationInMinutes' => 000,
        'timeZone' => array(
            'uri' => '<ENTER VALUE>',
            'id' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'description' => '<ENTER VALUE>'
        )
    ),
    'password' => '<ENTER VALUE>',
    'host' => array(
        'id' => '<ENTER VALUE>'
    ),
    'allowJoinBeforeHost' => true,
    'startHostVideo' => true,
    'startParticipantsVideo' => true,
    'usePersonalMeetingId' => true,
    'audioOptions' => array(
        '<ENTER VALUE>'  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/meeting/{$meetingId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/MeetingResponseResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Management/updateMeeting) in API Explorer.

## Delete Meeting

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$meetingId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/meeting/{$meetingId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Management/deleteMeeting) in API Explorer.

## End Meeting

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/end`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$meetingId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/meeting/{$meetingId}/end");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Management/endMeeting) in API Explorer.

## Get Meeting Service Info

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/service-info`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/meeting/service-info");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/MeetingServiceInfoResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Configuration/readMeetingServiceInfo) in API Explorer.

## Get Assistants

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assistants`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/meetings-configuration/assistants");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/AssistantsResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Configuration/readAssistants) in API Explorer.

## Get Assisted Users

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assisted`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/meetings-configuration/assisted");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/AssistedUsersResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Meeting-Configuration/readAssistedUsers) in API Explorer.

## Get Subscriptions

HTTP get `/restapi/v1.0/subscription`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/subscription");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/RecordsCollectionResourceSubscriptionResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Subscriptions/listSubscriptions) in API Explorer.

## Create Subscription

HTTP post `/restapi/v1.0/subscription`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// POST BODY
$body = array(
    'eventFilters' => array(
        '<ENTER VALUE>'  
    ),
    'deliveryMode' => array(
        'transportType' => 'PubNub',
        'address' => '<ENTER VALUE>',
        'encryption' => true,
        'certificateName' => '<ENTER VALUE>',
        'registrationId' => '<ENTER VALUE>',
        'verificationToken' => '<ENTER VALUE>'
    ),
    'expiresIn' => '604800'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/subscription");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/SubscriptionInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Subscriptions/createSubscription) in API Explorer.

## Get Subscription

HTTP get `/restapi/v1.0/subscription/{subscriptionId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$subscriptionId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/subscription/{$subscriptionId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/SubscriptionInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Subscriptions/readSubscription) in API Explorer.

## Renew Subscription / Update Event Filters

HTTP put `/restapi/v1.0/subscription/{subscriptionId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$subscriptionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'aggregated' => true
)

// POST BODY
$body = array(
    'eventFilters' => array(
        '<ENTER VALUE>'  
    ),
    'deliveryMode' => array(
        'transportType' => 'PubNub',
        'address' => '<ENTER VALUE>',
        'encryption' => true,
        'certificateName' => '<ENTER VALUE>',
        'registrationId' => '<ENTER VALUE>',
        'verificationToken' => '<ENTER VALUE>'
    ),
    'expiresIn' => '604800'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/subscription/{$subscriptionId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/SubscriptionInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Subscriptions/updateSubscription) in API Explorer.

## Cancel Subscription

HTTP delete `/restapi/v1.0/subscription/{subscriptionId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$subscriptionId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/subscription/{$subscriptionId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Subscriptions/deleteSubscription) in API Explorer.

## Renew Subscription

HTTP post `/restapi/v1.0/subscription/{subscriptionId}/renew`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$subscriptionId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/subscription/{$subscriptionId}/renew");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/SubscriptionInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Subscriptions/renewSubscription) in API Explorer.

## Get Authorization Profile

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/authz-profile");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/AuthProfileResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Permissions/readAuthorizationProfile) in API Explorer.

## Check User Permission

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile/check`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'permissionId' => '<ENTER VALUE>',
    //'targetExtensionId' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/authz-profile/check");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/AuthProfileCheckResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Permissions/checkUserPermission) in API Explorer.

## Get User Business Hours

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/business-hours");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetUserBusinessHoursResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Business-Hours/readUserBusinessHours) in API Explorer.

## Update User Business Hours

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'schedule' => array(
        'weeklyRanges' => array(
            'monday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'tuesday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'wednesday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'thursday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'friday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'saturday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'sunday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            )
        )
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/business-hours");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/UserBusinessHoursUpdateResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Business-Hours/updateUserBusinessHours) in API Explorer.

## Get Company Business Hours

HTTP get `/restapi/v1.0/account/{accountId}/business-hours`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/business-hours");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CompanyBusinessHours.json)

[Try it out](https://developer.ringcentral.com/api-reference/Business-Hours/readCompanyBusinessHours) in API Explorer.

## Update Company Business Hours

HTTP put `/restapi/v1.0/account/{accountId}/business-hours`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'schedule' => array(
        'weeklyRanges' => array(
            'monday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'tuesday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'wednesday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'thursday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'friday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'saturday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'sunday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            )
        )
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/business-hours");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CompanyBusinessHours.json)

[Try it out](https://developer.ringcentral.com/api-reference/Business-Hours/updateCompanyBusinessHours) in API Explorer.

## Get Caller Blocking Settings

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/caller-blocking");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallerBlockingSettings.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Blocking/readCallerBlockingSettings) in API Explorer.

## Update Caller Blocking Settings

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'mode' => 'Specific',
    'noCallerId' => 'BlockCallsAndFaxes',
    'payPhones' => 'Block',
    'greetings' => array(
        array(
            'type' => '<ENTER VALUE>',
            'preset' => array(
                'uri' => '<ENTER VALUE>',
                'id' => '<ENTER VALUE>',
                'name' => '<ENTER VALUE>'
            )
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/caller-blocking");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallerBlockingSettings.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Blocking/updateCallerBlockingSettings) in API Explorer.

## Get Blocked/Allowed Phone Numbers

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'page' => 000,
    //'perPage' => 000,
    //'status' => 'Blocked'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/caller-blocking/phone-numbers");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/BlockedAllowedPhoneNumbersList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Blocking/listBlockedAllowedNumbers) in API Explorer.

## Add Blocked/Allowed Number

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'phoneNumber' => '<ENTER VALUE>',
    'label' => '<ENTER VALUE>',
    'status' => 'Blocked'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/caller-blocking/phone-numbers");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/BlockedAllowedPhoneNumberInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Blocking/createBlockedAllowedNumber) in API Explorer.

## Get Blocked/Allowed Number

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$blockedNumberId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/caller-blocking/phone-numbers/{$blockedNumberId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/BlockedAllowedPhoneNumberInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Blocking/readBlockedAllowedNumber) in API Explorer.

## Delete Blocked/Allowed Number

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$blockedNumberId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/caller-blocking/phone-numbers/{$blockedNumberId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Blocking/deleteBlockedAllowedNumber) in API Explorer.

## Update Blocked/Allowed Number

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$blockedNumberId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'phoneNumber' => '<ENTER VALUE>',
    'label' => '<ENTER VALUE>',
    'status' => 'Blocked'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/caller-blocking/phone-numbers/{$blockedNumberId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/BlockedAllowedPhoneNumberInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Blocking/updateBlockedAllowedNumber) in API Explorer.

## Get Forwarding Number List

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'page' => '1',
    //'perPage' => '100'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/forwarding-number");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetExtensionForwardingNumberListResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Forwarding/listForwardingNumbers) in API Explorer.

## Create Forwarding Number

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'phoneNumber' => '<ENTER VALUE>',
    'label' => '<ENTER VALUE>',
    'type' => 'PhoneLine',
    'device' => array(
        'id' => '<ENTER VALUE>'
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/forwarding-number");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ForwardingNumberInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Forwarding/createForwardingNumber) in API Explorer.

## Get Forwarding Number

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$forwardingNumberId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/forwarding-number/{$forwardingNumberId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ForwardingNumberResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Forwarding/readForwardingNumber) in API Explorer.

## Update Forwarding Number

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$forwardingNumberId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'phoneNumber' => '<ENTER VALUE>',
    'label' => '<ENTER VALUE>',
    'flipNumber' => '<ENTER VALUE>',
    'type' => 'Home'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/forwarding-number/{$forwardingNumberId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ForwardingNumberInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Forwarding/updateForwardingNumber) in API Explorer.

## Delete Forwarding Number

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$forwardingNumberId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/forwarding-number/{$forwardingNumberId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Forwarding/deleteForwardingNumber) in API Explorer.

## Get Call Handling Rules

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'view' => 'Simple',
    //'enabledOnly' => true,
    //'page' => '1',
    //'perPage' => '100'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/answering-rule");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/UserAnsweringRuleList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/listAnsweringRules) in API Explorer.

## Create Call Handling Rule

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'enabled' => true,
    'type' => '<ENTER VALUE>',
    'name' => '<ENTER VALUE>',
    'callers' => array(
        array(
            'callerId' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>'
        )  
    ),
    'calledNumbers' => array(
        array(
            'phoneNumber' => '<ENTER VALUE>'
        )  
    ),
    'schedule' => array(
        'weeklyRanges' => array(
            'monday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'tuesday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'wednesday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'thursday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'friday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'saturday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'sunday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            )
        ),
        'ranges' => array(
            array(
                'from' => '<ENTER VALUE>',
                'to' => '<ENTER VALUE>'
            )  
        ),
        'ref' => 'BusinessHours'
    ),
    'callHandlingAction' => 'ForwardCalls',
    'forwarding' => array(
        'notifyMySoftPhones' => true,
        'notifyAdminSoftPhones' => true,
        'softPhonesRingCount' => 000,
        'ringingMode' => 'Sequentially',
        'rules' => array(
            array(
                'index' => 000,
                'ringCount' => 000,
                'enabled' => true,
                'forwardingNumbers' => array(
                    array(
                        'uri' => '<ENTER VALUE>',
                        'id' => '<ENTER VALUE>',
                        'phoneNumber' => '<ENTER VALUE>',
                        'label' => '<ENTER VALUE>',
                        'type' => 'Home'
                    )  
                )
            )  
        ),
        'mobileTimeout' => true
    ),
    'unconditionalForwarding' => array(
        'phoneNumber' => '<ENTER VALUE>'
    ),
    'queue' => array(
        'transferMode' => 'Rotating',
        'fixedOrderAgents' => array(
            array(
                'extension' => array(
                    'id' => '<ENTER VALUE>',
                    'uri' => '<ENTER VALUE>',
                    'extensionNumber' => '<ENTER VALUE>',
                    'partnerId' => '<ENTER VALUE>'
                ),
                'index' => 000
            )  
        ),
        'holdAudioInterruptionMode' => 'Never',
        'holdAudioInterruptionPeriod' => 000,
        'agentTimeout' => 000,
        'wrapUpTime' => 000,
        'holdTime' => 000,
        'maxCallers' => 000,
        'maxCallersAction' => 'Voicemail'
    ),
    'transfer' => array(
        'extension' => array(
            'id' => '<ENTER VALUE>',
            'uri' => '<ENTER VALUE>',
            'extensionNumber' => '<ENTER VALUE>',
            'partnerId' => '<ENTER VALUE>'
        )
    ),
    'voicemail' => array(
        'enabled' => true,
        'recipient' => array(
            'uri' => '<ENTER VALUE>',
            'id' => '<ENTER VALUE>'
        )
    ),
    'greetings' => array(
        array(
            'type' => 'Introductory',
            'usageType' => 'UserExtensionAnsweringRule',
            'preset' => array(
                'uri' => '<ENTER VALUE>',
                'id' => '<ENTER VALUE>',
                'name' => '<ENTER VALUE>'
            )
        )  
    ),
    'screening' => 'Off'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/answering-rule");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/AnsweringRuleInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/createAnsweringRule) in API Explorer.

## Get Call Handling Rule

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$ruleId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'showInactiveNumbers' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/answering-rule/{$ruleId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/AnsweringRuleInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/readAnsweringRule) in API Explorer.

## Update Call Handling Rule

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$ruleId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'forwarding' => array(
        'notifyMySoftPhones' => true,
        'notifyAdminSoftPhones' => true,
        'softPhonesRingCount' => '1',
        'ringingMode' => 'Sequentially',
        'rules' => array(
            array(
                'index' => 000,
                'ringCount' => 000,
                'enabled' => true,
                'forwardingNumbers' => array(
                    array(
                        'id' => '<ENTER VALUE>',
                        'type' => 'Home'
                    )  
                )
            )  
        ),
        'mobileTimeout' => true
    ),
    'enabled' => true,
    'name' => '<ENTER VALUE>',
    'callers' => array(
        array(
            'callerId' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>'
        )  
    ),
    'calledNumbers' => array(
        array(
            'phoneNumber' => '<ENTER VALUE>'
        )  
    ),
    'schedule' => array(
        'weeklyRanges' => array(
            'monday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'tuesday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'wednesday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'thursday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'friday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'saturday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'sunday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            )
        ),
        'ranges' => array(
            array(
                'from' => '<ENTER VALUE>',
                'to' => '<ENTER VALUE>'
            )  
        ),
        'ref' => 'BusinessHours'
    ),
    'callHandlingAction' => 'ForwardCalls',
    'unconditionalForwarding' => array(
        'phoneNumber' => '<ENTER VALUE>'
    ),
    'queue' => array(
        'transferMode' => 'Rotating',
        'fixedOrderAgents' => array(
            array(
                'extension' => array(
                    'id' => '<ENTER VALUE>',
                    'uri' => '<ENTER VALUE>',
                    'extensionNumber' => '<ENTER VALUE>',
                    'partnerId' => '<ENTER VALUE>'
                ),
                'index' => 000
            )  
        ),
        'holdAudioInterruptionMode' => 'Never',
        'holdAudioInterruptionPeriod' => 000,
        'agentTimeout' => 000,
        'wrapUpTime' => 000,
        'holdTime' => 000,
        'maxCallers' => 000,
        'maxCallersAction' => 'Voicemail'
    ),
    'voicemail' => array(
        'enabled' => true,
        'recipient' => array(
            'uri' => '<ENTER VALUE>',
            'id' => '<ENTER VALUE>'
        )
    ),
    'greetings' => array(
        array(
            'type' => 'Introductory',
            'usageType' => 'UserExtensionAnsweringRule',
            'preset' => array(
                'uri' => '<ENTER VALUE>',
                'id' => '<ENTER VALUE>',
                'name' => '<ENTER VALUE>'
            )
        )  
    ),
    'screening' => 'Off',
    'showInactiveNumbers' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/answering-rule/{$ruleId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/AnsweringRuleInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/updateAnsweringRule) in API Explorer.

## Delete Call Handling Rule

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$ruleId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/answering-rule/{$ruleId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/deleteAnsweringRule) in API Explorer.

## Create Company Call Handling Rule

HTTP post `/restapi/v1.0/account/{accountId}/answering-rule`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'name' => '<ENTER VALUE>',
    'enabled' => 'true',
    'type' => 'BusinessHours',
    'callers' => array(
        array(
            'callerId' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>'
        )  
    ),
    'calledNumbers' => array(
        array(
            'id' => '<ENTER VALUE>'
        )  
    ),
    'schedule' => array(
        'weeklyRanges' => array(
            'monday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'tuesday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'wednesday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'thursday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'friday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'saturday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'sunday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            )
        ),
        'ranges' => array(
            array(
                'from' => '<ENTER VALUE>',
                'to' => '<ENTER VALUE>'
            )  
        ),
        'ref' => 'BusinessHours'
    ),
    'callHandlingAction' => 'Operator',
    'extension' => array(
        'callerId' => '<ENTER VALUE>',
        'name' => '<ENTER VALUE>'
    ),
    'greetings' => array(
        array(
            'type' => 'Introductory',
            'usageType' => 'UserExtensionAnsweringRule',
            'preset' => array(
                'uri' => '<ENTER VALUE>',
                'id' => '<ENTER VALUE>',
                'name' => '<ENTER VALUE>'
            )
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/answering-rule");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CompanyAnsweringRuleInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/createCompanyAnsweringRule) in API Explorer.

## Get Company Call Handling Rule List

HTTP get `/restapi/v1.0/account/{accountId}/answering-rule`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/answering-rule");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CompanyAnsweringRuleList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/listCompanyAnsweringRules) in API Explorer.

## Get Company Call Handling Rule

HTTP get `/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$ruleId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/answering-rule/{$ruleId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CompanyAnsweringRuleInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/readCompanyAnsweringRule) in API Explorer.

## Update Company Call Handling Rule

HTTP put `/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$ruleId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'enabled' => 'true',
    'name' => '<ENTER VALUE>',
    'callers' => array(
        array(
            'callerId' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>'
        )  
    ),
    'calledNumbers' => array(
        array(
            'id' => '<ENTER VALUE>'
        )  
    ),
    'schedule' => array(
        'weeklyRanges' => array(
            'monday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'tuesday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'wednesday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'thursday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'friday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'saturday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'sunday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            )
        ),
        'ranges' => array(
            array(
                'from' => '<ENTER VALUE>',
                'to' => '<ENTER VALUE>'
            )  
        ),
        'ref' => 'BusinessHours'
    ),
    'callHandlingAction' => 'Operator',
    'extension' => array(
        'callerId' => '<ENTER VALUE>',
        'name' => '<ENTER VALUE>'
    ),
    'greetings' => array(
        array(
            'type' => 'Introductory',
            'usageType' => 'UserExtensionAnsweringRule',
            'preset' => array(
                'uri' => '<ENTER VALUE>',
                'id' => '<ENTER VALUE>',
                'name' => '<ENTER VALUE>'
            )
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/answering-rule/{$ruleId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CompanyAnsweringRuleInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/updateCompanyAnsweringRule) in API Explorer.

## Delete Company Call Handling Rule

HTTP delete `/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$ruleId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/answering-rule/{$ruleId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/deleteCompanyAnsweringRule) in API Explorer.

## Get Standard Greeting List

HTTP get `/restapi/v1.0/dictionary/greeting`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'page' => '1',
    //'perPage' => '100',
    //'type' => 'Introductory',
    //'usageType' => 'UserExtensionAnsweringRule'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/dictionary/greeting");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/DictionaryGreetingList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/listStandardGreetings) in API Explorer.

## Get Standard Greeting

HTTP get `/restapi/v1.0/dictionary/greeting/{greetingId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$greetingId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/dictionary/greeting/{$greetingId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/DictionaryGreetingInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/readStandardGreeting) in API Explorer.

## Create Company Greeting

HTTP post `/restapi/v1.0/account/{accountId}/greeting`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/greeting");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CustomCompanyGreetingInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/createCompanyGreeting) in API Explorer.

## Create Custom User Greeting

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/greeting");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CustomUserGreetingInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/createCustomUserGreeting) in API Explorer.

## Get Custom Greeting

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting/{greetingId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$greetingId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/greeting/{$greetingId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CustomUserGreetingInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/readCustomGreeting) in API Explorer.

## Create IVR Prompts

HTTP post `/restapi/v1.0/account/{accountId}/ivr-prompts`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/ivr-prompts");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/PromptInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/createIVRPrompt) in API Explorer.

## Get IVR Prompt List

HTTP get `/restapi/v1.0/account/{accountId}/ivr-prompts`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/ivr-prompts");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/IVRPrompts.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/listIVRPrompts) in API Explorer.

## Get IVR Prompt

HTTP get `/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$promptId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/ivr-prompts/{$promptId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/PromptInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/readIVRPrompt) in API Explorer.

## Delete IVR Prompt

HTTP delete `/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$promptId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/ivr-prompts/{$promptId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/deleteIVRPrompt) in API Explorer.

## Update IVR Prompt

HTTP put `/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$promptId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'filename' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/ivr-prompts/{$promptId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/PromptInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/updateIVRPrompt) in API Explorer.

## Get IVR Prompt Content

HTTP get `/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}/content`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$promptId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/ivr-prompts/{$promptId}/content");
?>
```

You can get response binary data by `$binary = $r->response()->raw()`

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/readIVRPromptContent) in API Explorer.

## Create IVR Menu

HTTP post `/restapi/v1.0/account/{accountId}/ivr-menus`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'id' => '<ENTER VALUE>',
    'uri' => '<ENTER VALUE>',
    'name' => '<ENTER VALUE>',
    'extensionNumber' => '<ENTER VALUE>',
    'prompt' => array(
        'mode' => 'Audio',
        'audio' => array(
            'uri' => '<ENTER VALUE>',
            'id' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'localeCode' => '<ENTER VALUE>'
        ),
        'text' => '<ENTER VALUE>',
        'language' => array(
            'uri' => '<ENTER VALUE>',
            'id' => '<ENTER VALUE>'
        )
    ),
    'actions' => array(
        array(
            'input' => '<ENTER VALUE>',
            'action' => 'Connect',
            'extension' => array(
                'uri' => '<ENTER VALUE>',
                'id' => '<ENTER VALUE>'
            ),
            'phoneNumber' => '<ENTER VALUE>'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/ivr-menus");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/IVRMenuInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/createIVRMenu) in API Explorer.

## Get IVR Menu

HTTP get `/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$ivrMenuId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/ivr-menus/{$ivrMenuId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/IVRMenuInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/readIVRMenu) in API Explorer.

## Update IVR Menu

HTTP put `/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$ivrMenuId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'id' => '<ENTER VALUE>',
    'uri' => '<ENTER VALUE>',
    'name' => '<ENTER VALUE>',
    'extensionNumber' => '<ENTER VALUE>',
    'prompt' => array(
        'mode' => 'Audio',
        'audio' => array(
            'uri' => '<ENTER VALUE>',
            'id' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'localeCode' => '<ENTER VALUE>'
        ),
        'text' => '<ENTER VALUE>',
        'language' => array(
            'uri' => '<ENTER VALUE>',
            'id' => '<ENTER VALUE>'
        )
    ),
    'actions' => array(
        array(
            'input' => '<ENTER VALUE>',
            'action' => 'Connect',
            'extension' => array(
                'uri' => '<ENTER VALUE>',
                'id' => '<ENTER VALUE>'
            ),
            'phoneNumber' => '<ENTER VALUE>'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/ivr-menus/{$ivrMenuId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/IVRMenuInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Routing/updateIVRMenu) in API Explorer.

## Get Call Recording Settings

HTTP get `/restapi/v1.0/account/{accountId}/call-recording`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/call-recording");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallRecordingSettingsResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/readCallRecordingSettings) in API Explorer.

## Update Call Recording Settings

HTTP put `/restapi/v1.0/account/{accountId}/call-recording`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'onDemand' => array(
        'enabled' => true
    ),
    'automatic' => array(
        'enabled' => true,
        'outboundCallTones' => true,
        'outboundCallAnnouncement' => true,
        'allowMute' => true,
        'extensionCount' => 000
    ),
    'greetings' => array(
        array(
            'type' => 'StartRecording',
            'mode' => 'Default'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/call-recording");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallRecordingSettingsResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/updateCallRecordingSettings) in API Explorer.

## Get Call Recording Extension List

HTTP get `/restapi/v1.0/account/{accountId}/call-recording/extensions`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/call-recording/extensions");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallRecordingExtensions.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/listCallRecordingExtensions) in API Explorer.

## Update Call Recording Extension List

HTTP post `/restapi/v1.0/account/{accountId}/call-recording/bulk-assign`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'addedExtensions' => array(
        'id' => '<ENTER VALUE>',
        'uri' => '<ENTER VALUE>',
        'extensionNumber' => '<ENTER VALUE>',
        'type' => '<ENTER VALUE>',
        'callDirection' => 'Outbound'
    ),
    'updatedExtensions' => array(
        'id' => '<ENTER VALUE>',
        'uri' => '<ENTER VALUE>',
        'extensionNumber' => '<ENTER VALUE>',
        'type' => '<ENTER VALUE>',
        'callDirection' => 'Outbound'
    ),
    'removedExtensions' => array(
        'id' => '<ENTER VALUE>',
        'uri' => '<ENTER VALUE>',
        'extensionNumber' => '<ENTER VALUE>',
        'type' => '<ENTER VALUE>',
        'callDirection' => 'Outbound'
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/call-recording/bulk-assign");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/updateCallRecordingExtensionList) in API Explorer.

## Get Call Recording Custom Greeting List

HTTP get `/restapi/v1.0/account/{accountId}/call-recording/custom-greetings`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'type' => 'StartRecording'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/call-recording/custom-greetings");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallRecordingCustomGreetings.json)

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/listCallRecordingCustomGreetings) in API Explorer.

## Delete Call Recording Custom Greeting List

HTTP delete `/restapi/v1.0/account/{accountId}/call-recording/custom-greetings`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/call-recording/custom-greetings");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/deleteCallRecordingCustomGreetingList) in API Explorer.

## Delete Call Recording Custom Greeting

HTTP delete `/restapi/v1.0/account/{accountId}/call-recording/custom-greetings/{greetingId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$greetingId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/call-recording/custom-greetings/{$greetingId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Rule-Management/deleteCallRecordingCustomGreeting) in API Explorer.

## Register SIP Device

HTTP post `/restapi/v1.0/client-info/sip-provision`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// POST BODY
$body = array(
    'device' => array(
        array(
            'id' => '<ENTER VALUE>',
            'appExternalId' => '<ENTER VALUE>',
            'computerName' => '<ENTER VALUE>'
        )  
    ),
    'sipInfo' => array(
        array(
            'transport' => 'UDP'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/client-info/sip-provision");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CreateSipRegistrationResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SIP/createSIPRegistration) in API Explorer.

## Get Extension Phone Number List

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/phone-number`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'usageType' => array( 'MainCompanyNumber', 'AdditionalCompanyNumber', 'CompanyNumber', 'DirectNumber', 'CompanyFaxNumber', 'ForwardedNumber', 'ForwardedCompanyNumber' ),
    //'page' => 000,
    //'perPage' => 000
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/phone-number");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetExtensionPhoneNumbersResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Phone-Numbers/listExtensionPhoneNumbers) in API Explorer.

## Get Extension

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetExtensionInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/readExtension) in API Explorer.

## Update Extension

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'status' => 'Disabled',
    'statusInfo' => array(
        'comment' => '<ENTER VALUE>',
        'reason' => 'Voluntarily'
    ),
    'reason' => '<ENTER VALUE>',
    'comment' => '<ENTER VALUE>',
    'extensionNumber' => '<ENTER VALUE>',
    'contact' => array(
        'firstName' => '<ENTER VALUE>',
        'lastName' => '<ENTER VALUE>',
        'company' => '<ENTER VALUE>',
        'jobTitle' => '<ENTER VALUE>',
        'email' => '<ENTER VALUE>',
        'businessPhone' => '<ENTER VALUE>',
        'mobilePhone' => '<ENTER VALUE>',
        'businessAddress' => array(
            'country' => '<ENTER VALUE>',
            'state' => '<ENTER VALUE>',
            'city' => '<ENTER VALUE>',
            'street' => '<ENTER VALUE>',
            'zip' => '<ENTER VALUE>'
        ),
        'emailAsLoginName' => true,
        'pronouncedName' => array(
            'type' => 'Default',
            'text' => '<ENTER VALUE>'
        ),
        'department' => '<ENTER VALUE>'
    ),
    'regionalSettings' => array(
        'homeCountry' => array(
            'id' => '<ENTER VALUE>'
        ),
        'timezone' => array(
            'id' => '<ENTER VALUE>'
        ),
        'language' => array(
            'id' => '<ENTER VALUE>'
        ),
        'greetingLanguage' => array(
            'id' => '<ENTER VALUE>'
        ),
        'formattingLocale' => array(
            'id' => '<ENTER VALUE>'
        ),
        'timeFormat' => '12h'
    ),
    'setupWizardState' => 'NotStarted',
    'partnerId' => '<ENTER VALUE>',
    'ivrPin' => '<ENTER VALUE>',
    'password' => '<ENTER VALUE>',
    'callQueueInfo' => array(
        'slaGoal' => 000,
        'slaThresholdSeconds' => 000,
        'includeAbandonedCalls' => true,
        'abandonedThresholdSeconds' => 000
    ),
    'transition' => array(
        array(
            'sendWelcomeEmailsToUsers' => true,
            'sendWelcomeEmail' => true
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetExtensionInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/updateExtension) in API Explorer.

## Delete Extension

HTTP delete `/restapi/v1.0/account/{accountId}/extension/{extensionId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/deleteExtension) in API Explorer.

## Get Extension Caller ID

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/caller-id");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ExtensionCallerIdInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/readExtensionCallerId) in API Explorer.

## Update Extension Caller ID

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'uri' => '<ENTER VALUE>',
    'byDevice' => array(
        array(
            'device' => array(
                'id' => '<ENTER VALUE>',
                'uri' => '<ENTER VALUE>',
                'phoneNumber' => '<ENTER VALUE>'
            ),
            'callerId' => array(
                'type' => '<ENTER VALUE>',
                'phoneInfo' => array(
                    'id' => '<ENTER VALUE>',
                    'uri' => '<ENTER VALUE>',
                    'phoneNumber' => '<ENTER VALUE>'
                )
            )
        )  
    ),
    'byFeature' => array(
        array(
            'feature' => 'RingOut',
            'callerId' => array(
                'type' => '<ENTER VALUE>',
                'phoneInfo' => array(
                    'id' => '<ENTER VALUE>',
                    'uri' => '<ENTER VALUE>',
                    'phoneNumber' => '<ENTER VALUE>'
                )
            )
        )  
    ),
    'extensionNameForOutboundCalls' => true,
    'extensionNumberForInternalCalls' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/caller-id");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ExtensionCallerIdInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/updateExtensionCallerId) in API Explorer.

## Get Extension Grant List

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/grant`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'page' => '1',
    //'perPage' => '100'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/grant");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetExtensionGrantListResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/listExtensionGrants) in API Explorer.

## Get Users

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/users`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'type' => 'User'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/users");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/readAutomaticLocationUpdatesUsers) in API Explorer.

## Enable Automatic Location Updates for Users

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/users/bulk-assign`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'enabledUserIds' => array(
        '<ENTER VALUE>'  
    ),
    'disabledUserIds' => array(
        '<ENTER VALUE>'  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/users/bulk-assign");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/assignMultipleUsersAutomaticaLocationUpdates) in API Explorer.

## Get Wireless Point List

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'siteId' => '<ENTER VALUE>',
    //'searchString' => '<ENTER VALUE>',
    //'orderBy' => '<ENTER VALUE>',
    //'perPage' => 000,
    //'page' => '1'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/wireless-points");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/WirelessPointsList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/listWirelessPoints) in API Explorer.

## Create Wireless Point

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'bssid' => '<ENTER VALUE>',
    'name' => '<ENTER VALUE>',
    'site' => array(
        'id' => '<ENTER VALUE>',
        'name' => '<ENTER VALUE>'
    ),
    'emergencyAddress' => array(
        'country' => '<ENTER VALUE>',
        'countryId' => '<ENTER VALUE>',
        'countryIsoCode' => '<ENTER VALUE>',
        'countryName' => '<ENTER VALUE>',
        'state' => '<ENTER VALUE>',
        'stateId' => '<ENTER VALUE>',
        'stateIsoCode' => '<ENTER VALUE>',
        'stateName' => '<ENTER VALUE>',
        'city' => '<ENTER VALUE>',
        'street' => '<ENTER VALUE>',
        'street2' => '<ENTER VALUE>',
        'zip' => '<ENTER VALUE>'
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/wireless-points");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/WirelessPointInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/createWirelessPoint) in API Explorer.

## Get Wireless Point

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$pointId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/wireless-points/{$pointId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/WirelessPointInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/readWirelessPoint) in API Explorer.

## Update Wireless Point

HTTP put `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$pointId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'id' => '<ENTER VALUE>',
    'bssid' => '<ENTER VALUE>',
    'name' => '<ENTER VALUE>',
    'site' => array(
        'id' => '<ENTER VALUE>',
        'name' => '<ENTER VALUE>'
    ),
    'emergencyAddress' => array(
        'country' => '<ENTER VALUE>',
        'countryId' => '<ENTER VALUE>',
        'countryIsoCode' => '<ENTER VALUE>',
        'countryName' => '<ENTER VALUE>',
        'state' => '<ENTER VALUE>',
        'stateId' => '<ENTER VALUE>',
        'stateIsoCode' => '<ENTER VALUE>',
        'stateName' => '<ENTER VALUE>',
        'city' => '<ENTER VALUE>',
        'street' => '<ENTER VALUE>',
        'street2' => '<ENTER VALUE>',
        'zip' => '<ENTER VALUE>'
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/wireless-points/{$pointId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/WirelessPointInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/updateWirelessPoint) in API Explorer.

## Delete Wireless Point

HTTP delete `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points/{pointId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$pointId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/wireless-points/{$pointId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/deleteWirelessPoint) in API Explorer.

## Get Network Map

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/networks");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/NetworksList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/listNetworks) in API Explorer.

## Create Network

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/networks");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/createNetwork) in API Explorer.

## Get Network

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$networkId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/networks/{$networkId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/readNetwork) in API Explorer.

## Update Network

HTTP put `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$networkId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'name' => '<ENTER VALUE>',
    'site' => '<ENTER VALUE>',
    'publicIpRanges' => array(
        array(
            'id' => '<ENTER VALUE>',
            'startIp' => '<ENTER VALUE>',
            'endIp' => '<ENTER VALUE>'
        )  
    ),
    'privateIpRanges' => array(
        array(
            'id' => '<ENTER VALUE>',
            'startIp' => '<ENTER VALUE>',
            'endIp' => '<ENTER VALUE>'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/networks/{$networkId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/updateNetwork) in API Explorer.

## Delete Network

HTTP delete `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/networks/{networkId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$networkId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/networks/{$networkId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/deleteNetwork) in API Explorer.

## Get Device List

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'siteId' => '<ENTER VALUE>',
    //'featureEnabled' => true,
    //'model' => '<ENTER VALUE>',
    //'compatibleOnly' => true,
    //'searchString' => '<ENTER VALUE>',
    //'orderBy' => 'name',
    //'perPage' => 000,
    //'page' => '1'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/devices");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ListDevicesAutomaticLocationUpdates.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/listDevicesAutomaticLocationUpdates) in API Explorer.

## Enable Automatic Location Updates for Devices

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices/bulk-assign`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'enabledDeviceIds' => array(
        '<ENTER VALUE>'  
    ),
    'disabledDeviceIds' => array(
        '<ENTER VALUE>'  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/devices/bulk-assign");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/assignMultipleDevicesAutomaticLocationUpdates) in API Explorer.

## Get Account Switch List

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'siteId' => '<ENTER VALUE>',
    //'searchString' => '<ENTER VALUE>',
    //'orderBy' => '<ENTER VALUE>',
    //'perPage' => 000,
    //'page' => '1'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/switches");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/SwitchesList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/listAccountSwitches) in API Explorer.

## Create Switch

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'chassisId' => '<ENTER VALUE>',
    'name' => '<ENTER VALUE>',
    'site' => array(
        'id' => '<ENTER VALUE>',
        'name' => '<ENTER VALUE>'
    ),
    'emergencyAddress' => array(
        'country' => '<ENTER VALUE>',
        'countryId' => '<ENTER VALUE>',
        'countryIsoCode' => '<ENTER VALUE>',
        'countryName' => '<ENTER VALUE>',
        'state' => '<ENTER VALUE>',
        'stateId' => '<ENTER VALUE>',
        'stateIsoCode' => '<ENTER VALUE>',
        'stateName' => '<ENTER VALUE>',
        'city' => '<ENTER VALUE>',
        'street' => '<ENTER VALUE>',
        'street2' => '<ENTER VALUE>',
        'zip' => '<ENTER VALUE>'
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/switches");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/SwitchInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/createSwitch) in API Explorer.

## Get Switch

HTTP get `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$switchId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/switches/{$switchId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/SwitchInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/readSwitch) in API Explorer.

## Update Switch

HTTP put `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$switchId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'id' => '<ENTER VALUE>',
    'chassisId' => '<ENTER VALUE>',
    'name' => '<ENTER VALUE>',
    'site' => array(
        'id' => '<ENTER VALUE>',
        'name' => '<ENTER VALUE>'
    ),
    'emergencyAddress' => array(
        'country' => '<ENTER VALUE>',
        'countryId' => '<ENTER VALUE>',
        'countryIsoCode' => '<ENTER VALUE>',
        'countryName' => '<ENTER VALUE>',
        'state' => '<ENTER VALUE>',
        'stateId' => '<ENTER VALUE>',
        'stateIsoCode' => '<ENTER VALUE>',
        'stateName' => '<ENTER VALUE>',
        'city' => '<ENTER VALUE>',
        'street' => '<ENTER VALUE>',
        'street2' => '<ENTER VALUE>',
        'zip' => '<ENTER VALUE>'
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/switches/{$switchId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/SwitchInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/updateSwitch) in API Explorer.

## Delete Switch

HTTP delete `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches/{switchId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$switchId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/switches/{$switchId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/deleteSwitch) in API Explorer.

## Create Multiple Switches

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-create`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'records' => array(
        array(
            'chassisId' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'site' => array(
                'id' => '<ENTER VALUE>',
                'name' => '<ENTER VALUE>'
            ),
            'emergencyAddress' => array(
                'country' => '<ENTER VALUE>',
                'countryId' => '<ENTER VALUE>',
                'countryIsoCode' => '<ENTER VALUE>',
                'countryName' => '<ENTER VALUE>',
                'state' => '<ENTER VALUE>',
                'stateId' => '<ENTER VALUE>',
                'stateIsoCode' => '<ENTER VALUE>',
                'stateName' => '<ENTER VALUE>',
                'city' => '<ENTER VALUE>',
                'street' => '<ENTER VALUE>',
                'street2' => '<ENTER VALUE>',
                'zip' => '<ENTER VALUE>'
            )
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/switches-bulk-create");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CreateMultipleSwitchesResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/createMultipleSwitches) in API Explorer.

## Update Multiple Switches

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-update`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'records' => array(
        array(
            'id' => '<ENTER VALUE>',
            'chassisId' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'site' => array(
                'id' => '<ENTER VALUE>',
                'name' => '<ENTER VALUE>'
            ),
            'emergencyAddress' => array(
                'country' => '<ENTER VALUE>',
                'countryId' => '<ENTER VALUE>',
                'countryIsoCode' => '<ENTER VALUE>',
                'countryName' => '<ENTER VALUE>',
                'state' => '<ENTER VALUE>',
                'stateId' => '<ENTER VALUE>',
                'stateIsoCode' => '<ENTER VALUE>',
                'stateName' => '<ENTER VALUE>',
                'city' => '<ENTER VALUE>',
                'street' => '<ENTER VALUE>',
                'street2' => '<ENTER VALUE>',
                'zip' => '<ENTER VALUE>'
            )
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/switches-bulk-update");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/UpdateMultipleSwitchesResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/updateMultipleSwitches) in API Explorer.

## Create Multiple Wireless Points

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-create`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'records' => array(
        array(
            'bssid' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'site' => array(
                'id' => '<ENTER VALUE>',
                'name' => '<ENTER VALUE>'
            ),
            'emergencyAddress' => array(
                'country' => '<ENTER VALUE>',
                'countryId' => '<ENTER VALUE>',
                'countryIsoCode' => '<ENTER VALUE>',
                'countryName' => '<ENTER VALUE>',
                'state' => '<ENTER VALUE>',
                'stateId' => '<ENTER VALUE>',
                'stateIsoCode' => '<ENTER VALUE>',
                'stateName' => '<ENTER VALUE>',
                'city' => '<ENTER VALUE>',
                'street' => '<ENTER VALUE>',
                'street2' => '<ENTER VALUE>',
                'zip' => '<ENTER VALUE>'
            )
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/wireless-points-bulk-create");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CreateMultipleWirelessPointsResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/createMultipleWirelessPoints) in API Explorer.

## Update Multiple Wireless Points

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-update`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'records' => array(
        array(
            'id' => '<ENTER VALUE>',
            'bssid' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'site' => array(
                'id' => '<ENTER VALUE>',
                'name' => '<ENTER VALUE>'
            ),
            'emergencyAddress' => array(
                'country' => '<ENTER VALUE>',
                'countryId' => '<ENTER VALUE>',
                'countryIsoCode' => '<ENTER VALUE>',
                'countryName' => '<ENTER VALUE>',
                'state' => '<ENTER VALUE>',
                'stateId' => '<ENTER VALUE>',
                'stateIsoCode' => '<ENTER VALUE>',
                'stateName' => '<ENTER VALUE>',
                'city' => '<ENTER VALUE>',
                'street' => '<ENTER VALUE>',
                'street2' => '<ENTER VALUE>',
                'zip' => '<ENTER VALUE>'
            )
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/wireless-points-bulk-update");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/UpdateMultipleWirelessPointsResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/updateMultipleWirelessPoints) in API Explorer.

## Validate Multiple Wireless Points

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-validate`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'records' => array(
        array(
            'id' => '<ENTER VALUE>',
            'bssid' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'site' => array(
                'id' => '<ENTER VALUE>',
                'name' => '<ENTER VALUE>'
            ),
            'emergencyAddress' => array(
                'country' => '<ENTER VALUE>',
                'countryId' => '<ENTER VALUE>',
                'countryIsoCode' => '<ENTER VALUE>',
                'countryName' => '<ENTER VALUE>',
                'state' => '<ENTER VALUE>',
                'stateId' => '<ENTER VALUE>',
                'stateIsoCode' => '<ENTER VALUE>',
                'stateName' => '<ENTER VALUE>',
                'city' => '<ENTER VALUE>',
                'street' => '<ENTER VALUE>',
                'street2' => '<ENTER VALUE>',
                'zip' => '<ENTER VALUE>'
            )
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/wireless-points-bulk-validate");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ValidateMultipleWirelessPointsResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/validateMultipleWirelessPoints) in API Explorer.

## Validate Multiple Switches

HTTP post `/restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-validate`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'records' => array(
        array(
            'id' => '<ENTER VALUE>',
            'chassisId' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'site' => array(
                'id' => '<ENTER VALUE>',
                'name' => '<ENTER VALUE>'
            ),
            'emergencyAddress' => array(
                'country' => '<ENTER VALUE>',
                'countryId' => '<ENTER VALUE>',
                'countryIsoCode' => '<ENTER VALUE>',
                'countryName' => '<ENTER VALUE>',
                'state' => '<ENTER VALUE>',
                'stateId' => '<ENTER VALUE>',
                'stateIsoCode' => '<ENTER VALUE>',
                'stateName' => '<ENTER VALUE>',
                'city' => '<ENTER VALUE>',
                'street' => '<ENTER VALUE>',
                'street2' => '<ENTER VALUE>',
                'zip' => '<ENTER VALUE>'
            )
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/switches-bulk-validate");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ValidateMultipleSwitchesResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Automatic-Location-Updates/validateMultipleSwitches) in API Explorer.

## Get Notification Settings

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/notification-settings");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/NotificationSettings.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/readNotificationSettings) in API Explorer.

## Update Notification Settings

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'emailAddresses' => array(
        '<ENTER VALUE>'  
    ),
    'smsEmailAddresses' => array(
        '<ENTER VALUE>'  
    ),
    'advancedMode' => true,
    'voicemails' => array(
        'notifyByEmail' => true,
        'notifyBySms' => true,
        'advancedEmailAddresses' => array(
            '<ENTER VALUE>'  
        ),
        'advancedSmsEmailAddresses' => array(
            '<ENTER VALUE>'  
        ),
        'includeAttachment' => true,
        'markAsRead' => true
    ),
    'inboundFaxes' => array(
        'notifyByEmail' => true,
        'notifyBySms' => true,
        'advancedEmailAddresses' => array(
            '<ENTER VALUE>'  
        ),
        'advancedSmsEmailAddresses' => array(
            '<ENTER VALUE>'  
        ),
        'includeAttachment' => true,
        'markAsRead' => true
    ),
    'outboundFaxes' => array(
        'notifyByEmail' => true,
        'notifyBySms' => true,
        'advancedEmailAddresses' => array(
            '<ENTER VALUE>'  
        ),
        'advancedSmsEmailAddresses' => array(
            '<ENTER VALUE>'  
        )
    ),
    'inboundTexts' => array(
        'notifyByEmail' => true,
        'notifyBySms' => true,
        'advancedEmailAddresses' => array(
            '<ENTER VALUE>'  
        ),
        'advancedSmsEmailAddresses' => array(
            '<ENTER VALUE>'  
        )
    ),
    'missedCalls' => array(
        'notifyByEmail' => true,
        'notifyBySms' => true,
        'advancedEmailAddresses' => array(
            '<ENTER VALUE>'  
        ),
        'advancedSmsEmailAddresses' => array(
            '<ENTER VALUE>'  
        )
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/notification-settings");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/NotificationSettings.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/updateNotificationSettings) in API Explorer.

## Get User Profile Image

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/profile-image");
?>
```

You can get response binary data by `$binary = $r->response()->raw()`

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/readUserProfileImage) in API Explorer.

## Upload User Profile Image

HTTP post `/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/profile-image");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/createUserProfileImage) in API Explorer.

## Update User Profile Image

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/profile-image");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/updateUserProfileImage) in API Explorer.

## Get Scaled User Profile Image

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$scaleSize = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/profile-image/{$scaleSize}");
?>
```

You can get response binary data by `$binary = $r->response()->raw()`

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/readScaledPofileImage) in API Explorer.

## Get User Conferencing Settings

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'countryId' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/conferencing");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetConferencingInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/readConferencingSettings) in API Explorer.

## Update User Conferencing Settings

HTTP put `/restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'phoneNumbers' => array(
        array(
            'phoneNumber' => '<ENTER VALUE>',
            'default' => true
        )  
    ),
    'allowJoinBeforeHost' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/conferencing");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetConferencingInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/User-Settings/updateConferencingSettings) in API Explorer.

## Get Account Info

HTTP get `/restapi/v1.0/account/{accountId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetAccountInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Company/readAccountInfo) in API Explorer.

## Get Account Business Address

HTTP get `/restapi/v1.0/account/{accountId}/business-address`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/business-address");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/AccountBusinessAddressResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Company/readAccountBusinessAddress) in API Explorer.

## Update Company Business Address

HTTP put `/restapi/v1.0/account/{accountId}/business-address`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'company' => '<ENTER VALUE>',
    'email' => '<ENTER VALUE>',
    'businessAddress' => array(
        'country' => '<ENTER VALUE>',
        'state' => '<ENTER VALUE>',
        'city' => '<ENTER VALUE>',
        'street' => '<ENTER VALUE>',
        'zip' => '<ENTER VALUE>'
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/business-address");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/AccountBusinessAddressResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Company/updateAccountBusinessAddress) in API Explorer.

## Get Account Service Info

HTTP get `/restapi/v1.0/account/{accountId}/service-info`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/service-info");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetServiceInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Company/readAccountServiceInfo) in API Explorer.

## Get Language List

HTTP get `/restapi/v1.0/dictionary/language`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/dictionary/language");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/LanguageList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/listLanguages) in API Explorer.

## Get Language

HTTP get `/restapi/v1.0/dictionary/language/{languageId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$languageId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/dictionary/language/{$languageId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/LanguageInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/readLanguage) in API Explorer.

## Get Country List

HTTP get `/restapi/v1.0/dictionary/country`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'loginAllowed' => true,
    //'signupAllowed' => true,
    //'numberSelling' => true,
    //'page' => '1',
    //'perPage' => '100',
    //'freeSoftphoneLine' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/dictionary/country");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetCountryListResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/listCountries) in API Explorer.

## Get Country

HTTP get `/restapi/v1.0/dictionary/country/{countryId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$countryId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/dictionary/country/{$countryId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetCountryInfoDictionaryResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/readCountry) in API Explorer.

## Get Location List

HTTP get `/restapi/v1.0/dictionary/location`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'orderBy' => 'City',
    //'page' => '1',
    //'perPage' => '100',
    //'stateId' => '<ENTER VALUE>',
    //'withNxx' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/dictionary/location");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetLocationListResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/listLocations) in API Explorer.

## Get States List

HTTP get `/restapi/v1.0/dictionary/state`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'allCountries' => true,
    //'countryId' => 000,
    //'page' => '1',
    //'perPage' => '100',
    //'withPhoneNumbers' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/dictionary/state");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetStateListResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/listStates) in API Explorer.

## Get State

HTTP get `/restapi/v1.0/dictionary/state/{stateId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$stateId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/dictionary/state/{$stateId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetStateInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/readState) in API Explorer.

## Get Timezone List

HTTP get `/restapi/v1.0/dictionary/timezone`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'page' => '1',
    //'perPage' => '100'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/dictionary/timezone");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetTimezoneListResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/listTimezones) in API Explorer.

## Get Timezone

HTTP get `/restapi/v1.0/dictionary/timezone/{timezoneId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$timezoneId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'page' => '1',
    //'perPage' => '100'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/dictionary/timezone/{$timezoneId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetTimezoneInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Regional-Settings/readTimezone) in API Explorer.

## Get Company Phone Number List

HTTP get `/restapi/v1.0/account/{accountId}/phone-number`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'page' => '1',
    //'perPage' => '100',
    //'usageType' => array( 'MainCompanyNumber', 'AdditionalCompanyNumber', 'CompanyNumber', 'DirectNumber', 'CompanyFaxNumber', 'ForwardedNumber', 'ForwardedCompanyNumber', 'ContactCenterNumber', 'ConferencingNumber', 'MeetingsNumber' )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/phone-number");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/AccountPhoneNumbers.json)

[Try it out](https://developer.ringcentral.com/api-reference/Phone-Numbers/listAccountPhoneNumbers) in API Explorer.

## Get Phone Number

HTTP get `/restapi/v1.0/account/{accountId}/phone-number/{phoneNumberId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$phoneNumberId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/phone-number/{$phoneNumberId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CompanyPhoneNumberInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Phone-Numbers/readAccountPhoneNumber) in API Explorer.

## Get Extension List

HTTP get `/restapi/v1.0/account/{accountId}/extension`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'extensionId' => '<ENTER VALUE>',
    //'email' => '<ENTER VALUE>',
    //'page' => '1',
    //'perPage' => '100',
    //'status' => array( 'Enabled', 'Disabled', 'NotActivated', 'Unassigned' ),
    //'type' => array( 'User', 'FaxUser', 'VirtualUser', 'DigitalUser', 'Department', 'Announcement', 'Voicemail', 'SharedLinesGroup', 'PagingOnly', 'IvrMenu', 'ApplicationExtension', 'ParkLocation', 'Limited', 'Bot' )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetExtensionListResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Extensions/listExtensions) in API Explorer.

## Create Extension

HTTP post `/restapi/v1.0/account/{accountId}/extension`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'contact' => array(
        'firstName' => '<ENTER VALUE>',
        'lastName' => '<ENTER VALUE>',
        'company' => '<ENTER VALUE>',
        'jobTitle' => '<ENTER VALUE>',
        'email' => '<ENTER VALUE>',
        'businessPhone' => '<ENTER VALUE>',
        'mobilePhone' => '<ENTER VALUE>',
        'businessAddress' => array(
            'country' => '<ENTER VALUE>',
            'state' => '<ENTER VALUE>',
            'city' => '<ENTER VALUE>',
            'street' => '<ENTER VALUE>',
            'zip' => '<ENTER VALUE>'
        ),
        'emailAsLoginName' => true,
        'pronouncedName' => array(
            'type' => 'Default',
            'text' => '<ENTER VALUE>'
        ),
        'department' => '<ENTER VALUE>'
    ),
    'extensionNumber' => '<ENTER VALUE>',
    'password' => '<ENTER VALUE>',
    'references' => array(
        array(
            'ref' => '<ENTER VALUE>',
            'type' => 'PartnerId'
        )  
    ),
    'roles' => array(
        array(
            'uri' => '<ENTER VALUE>',
            'id' => '<ENTER VALUE>'
        )  
    ),
    'regionalSettings' => array(
        'homeCountry' => array(
            'id' => '<ENTER VALUE>',
            'uri' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'isoCode' => '<ENTER VALUE>',
            'callingCode' => '<ENTER VALUE>'
        ),
        'timezone' => array(
            'id' => '<ENTER VALUE>',
            'uri' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'description' => '<ENTER VALUE>'
        ),
        'language' => array(
            'id' => '<ENTER VALUE>',
            'uri' => '<ENTER VALUE>',
            'greeting' => true,
            'formattingLocale' => true,
            'localeCode' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'ui' => true
        ),
        'greetingLanguage' => array(
            'id' => '<ENTER VALUE>',
            'localeCode' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>'
        ),
        'formattingLocale' => array(
            'id' => '<ENTER VALUE>',
            'localeCode' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>'
        ),
        'timeFormat' => '12h'
    ),
    'setupWizardState' => 'NotStarted',
    'status' => 'Enabled',
    'statusInfo' => array(
        'comment' => '<ENTER VALUE>',
        'reason' => 'Voluntarily'
    ),
    'type' => 'User',
    'hidden' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/extension");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ExtensionCreationResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Extensions/createExtension) in API Explorer.

## Get User Template List

HTTP get `/restapi/v1.0/account/{accountId}/templates`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'type' => 'UserSettings',
    //'page' => '<ENTER VALUE>',
    //'perPage' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/templates");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/UserTemplates.json)

[Try it out](https://developer.ringcentral.com/api-reference/Extensions/listUserTemplates) in API Explorer.

## Get User Template

HTTP get `/restapi/v1.0/account/{accountId}/templates/{templateId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$templateId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/templates/{$templateId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/TemplateInfo.json)

[Try it out](https://developer.ringcentral.com/api-reference/Extensions/readUserTemplate) in API Explorer.

## Get Call Queues

HTTP get `/restapi/v1.0/account/{accountId}/call-queues`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'page' => '1',
    //'perPage' => '100',
    //'memberExtensionId' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/call-queues");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallQueues.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Queues/listCallQueues) in API Explorer.

## Get Call Queue Members

HTTP get `/restapi/v1.0/account/{accountId}/call-queues/{groupId}/members`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$groupId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'page' => '1',
    //'perPage' => '100'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/call-queues/{$groupId}/members");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallQueueMembers.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Queues/listCallQueueMembers) in API Explorer.

## Assign Multiple Call Queue Members

HTTP post `/restapi/v1.0/account/{accountId}/call-queues/{groupId}/bulk-assign`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$groupId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'addedExtensionIds' => array(
        '<ENTER VALUE>'  
    ),
    'removedExtensionIds' => array(
        '<ENTER VALUE>'  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/call-queues/{$groupId}/bulk-assign");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Queues/assignMultipleCallQueueMembers) in API Explorer.

## Get Paging Group Users

HTTP get `/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$pagingOnlyGroupId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'page' => '1',
    //'perPage' => '100'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/paging-only-groups/{$pagingOnlyGroupId}/users");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/PagingOnlyGroupUsers.json)

[Try it out](https://developer.ringcentral.com/api-reference/Paging-Only-Groups/listPagingGroupUsers) in API Explorer.

## Get Paging Group Devices

HTTP get `/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$pagingOnlyGroupId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'page' => '1',
    //'perPage' => '100'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/paging-only-groups/{$pagingOnlyGroupId}/devices");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/PagingOnlyGroupDevices.json)

[Try it out](https://developer.ringcentral.com/api-reference/Paging-Only-Groups/listPagingGroupDevices) in API Explorer.

## Assign Paging Group Users and Devices

HTTP post `/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/bulk-assign`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$pagingOnlyGroupId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'addedUserIds' => array(
        '<ENTER VALUE>'  
    ),
    'removedUserIds' => array(
        '<ENTER VALUE>'  
    ),
    'addedDeviceIds' => array(
        '<ENTER VALUE>'  
    ),
    'removedDeviceIds' => array(
        '<ENTER VALUE>'  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/paging-only-groups/{$pagingOnlyGroupId}/bulk-assign");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Paging-Only-Groups/assignMultiplePagingGroupUsersDevices) in API Explorer.

## Create Call Monitoring Group

HTTP post `/restapi/v1.0/account/{accountId}/call-monitoring-groups`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'id' => '<ENTER VALUE>',
    'name' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/call-monitoring-groups");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallMonitoringGroup.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Monitoring-Groups/createCallMonitoringGroup) in API Explorer.

## Get Call Monitoring Groups List

HTTP get `/restapi/v1.0/account/{accountId}/call-monitoring-groups`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'page' => '1',
    //'perPage' => '100',
    //'memberExtensionId' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/call-monitoring-groups");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallMonitoringGroups.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Monitoring-Groups/listCallMonitoringGroups) in API Explorer.

## Updates Call Monitoring Group

HTTP put `/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$groupId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'id' => '<ENTER VALUE>',
    'name' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/call-monitoring-groups/{$groupId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallMonitoringGroup.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Monitoring-Groups/updateCallMonitoringGroup) in API Explorer.

## Delete Call Monitoring Group

HTTP delete `/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$groupId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/call-monitoring-groups/{$groupId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Monitoring-Groups/deleteCallMonitoringGroup) in API Explorer.

## Get Call Monitoring Group Member List

HTTP get `/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/members`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$groupId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'page' => '1',
    //'perPage' => '100'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/call-monitoring-groups/{$groupId}/members");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallMonitoringGroupMemberList.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Monitoring-Groups/listCallMonitoringGroupMembers) in API Explorer.

## Update Call Monitoring Group List

HTTP post `/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/bulk-assign`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$groupId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'updatedExtensions' => array(
        array(
            'id' => '<ENTER VALUE>',
            'permissions' => array(
                'Monitoring'  
            )
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/call-monitoring-groups/{$groupId}/bulk-assign");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Monitoring-Groups/updateCallMonitoringGroupList) in API Explorer.

## Parse Phone Number

HTTP post `/restapi/v1.0/number-parser/parse`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'homeCountry' => '<ENTER VALUE>',
    //'nationalAsPriority' => true
)

// POST BODY
$body = array(
    'originalStrings' => array(
        '<ENTER VALUE>'  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/number-parser/parse");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ParsePhoneNumberResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Phone-Numbers/parsePhoneNumber) in API Explorer.

## Get Device

HTTP get `/restapi/v1.0/account/{accountId}/device/{deviceId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$deviceId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'syncEmergencyAddress' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/device/{$deviceId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetDeviceInfoResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Devices/readDevice) in API Explorer.

## Update Device

HTTP put `/restapi/v1.0/account/{accountId}/device/{deviceId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$deviceId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'emergencyServiceAddress' => array(
        'customerName' => '<ENTER VALUE>',
        'street' => '<ENTER VALUE>',
        'street2' => '<ENTER VALUE>',
        'city' => '<ENTER VALUE>',
        'zip' => '<ENTER VALUE>',
        'state' => '<ENTER VALUE>',
        'country' => '<ENTER VALUE>'
    ),
    'extension' => array(
        'id' => '<ENTER VALUE>'
    ),
    'phoneLines' => array(
        'phoneLines' => array(
            array(
                'id' => '<ENTER VALUE>'
            )  
        )
    ),
    'useAsCommonPhone' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/device/{$deviceId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/DeviceResource.json)

[Try it out](https://developer.ringcentral.com/api-reference/Devices/updateDevice) in API Explorer.

## Get Extension Device List

HTTP get `/restapi/v1.0/account/{accountId}/extension/{extensionId}/device`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'linePooling' => 'Host',
    //'feature' => 'Intercom'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/device");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/GetExtensionDevicesResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/Devices/listExtensionDevices) in API Explorer.

## Check Health

HTTP get `/scim/v2/health`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/scim/v2/health");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/checkHealth2) in API Explorer.

## Get Service Provider Config

HTTP get `/scim/v2/ServiceProviderConfig`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/scim/v2/ServiceProviderConfig");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/ServiceProviderConfig.json)

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/readServiceProviderConfig2) in API Explorer.

## Search/List Users

HTTP get `/scim/v2/Users`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'filter' => '<ENTER VALUE>',
    //'startIndex' => '1',
    //'count' => '100'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/scim/v2/Users");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/UserSearchResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/searchViaGet2) in API Explorer.

## Create User

HTTP post `/scim/v2/Users`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// POST BODY
$body = array(
    'active' => true,
    'addresses' => array(
        array(
            'country' => '<ENTER VALUE>',
            'locality' => '<ENTER VALUE>',
            'postalCode' => '<ENTER VALUE>',
            'region' => '<ENTER VALUE>',
            'streetAddress' => '<ENTER VALUE>',
            'type' => 'work'
        )  
    ),
    'emails' => array(
        array(
            'type' => 'work',
            'value' => '<ENTER VALUE>'
        )  
    ),
    'externalId' => '<ENTER VALUE>',
    'id' => '<ENTER VALUE>',
    'name' => array(
        'familyName' => '<ENTER VALUE>',
        'givenName' => '<ENTER VALUE>'
    ),
    'phoneNumbers' => array(
        array(
            'type' => 'work',
            'value' => '<ENTER VALUE>'
        )  
    ),
    'photos' => array(
        array(
            'type' => 'photo',
            'value' => '<ENTER VALUE>'
        )  
    ),
    'schemas' => array(
        'urn:ietf:params:scim:schemas:core:2.0:User'  
    ),
    'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User' => array(
        'department' => '<ENTER VALUE>'
    ),
    'userName' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/scim/v2/Users");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/UserResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/createUser2) in API Explorer.

## Search/List Users

HTTP post `/scim/v2/Users/.search`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// POST BODY
$body = array(
    'count' => 000,
    'filter' => '<ENTER VALUE>',
    'schemas' => array(
        'urn:ietf:params:scim:api:messages:2.0:SearchRequest'  
    ),
    'startIndex' => 000
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/scim/v2/Users/.search");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/UserSearchResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/searchViaPost2) in API Explorer.

## Get User

HTTP get `/scim/v2/Users/{id}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$id = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/scim/v2/Users/{$id}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/UserResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/readUser2) in API Explorer.

## Update/Replace User

HTTP put `/scim/v2/Users/{id}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$id = '<ENTER VALUE>';

// POST BODY
$body = array(
    'active' => true,
    'addresses' => array(
        array(
            'country' => '<ENTER VALUE>',
            'locality' => '<ENTER VALUE>',
            'postalCode' => '<ENTER VALUE>',
            'region' => '<ENTER VALUE>',
            'streetAddress' => '<ENTER VALUE>',
            'type' => 'work'
        )  
    ),
    'emails' => array(
        array(
            'type' => 'work',
            'value' => '<ENTER VALUE>'
        )  
    ),
    'externalId' => '<ENTER VALUE>',
    'id' => '<ENTER VALUE>',
    'name' => array(
        'familyName' => '<ENTER VALUE>',
        'givenName' => '<ENTER VALUE>'
    ),
    'phoneNumbers' => array(
        array(
            'type' => 'work',
            'value' => '<ENTER VALUE>'
        )  
    ),
    'photos' => array(
        array(
            'type' => 'photo',
            'value' => '<ENTER VALUE>'
        )  
    ),
    'schemas' => array(
        'urn:ietf:params:scim:schemas:core:2.0:User'  
    ),
    'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User' => array(
        'department' => '<ENTER VALUE>'
    ),
    'userName' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/scim/v2/Users/{$id}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/UserResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/replaceUser2) in API Explorer.

## Delete User

HTTP delete `/scim/v2/Users/{id}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$id = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/scim/v2/Users/{$id}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/deleteUser2) in API Explorer.

## Update/Patch User

HTTP patch `/scim/v2/Users/{id}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$id = '<ENTER VALUE>';

// POST BODY
$body = array(
    'Operations' => array(
        array(
            'op' => 'add',
            'path' => '<ENTER VALUE>',
            'value' => '<ENTER VALUE>'
        )  
    ),
    'schemas' => array(
        'urn:ietf:params:scim:api:messages:2.0:PatchOp'  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->patch("/scim/v2/Users/{$id}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/UserResponse.json)

[Try it out](https://developer.ringcentral.com/api-reference/SCIM/patchUser2) in API Explorer.

## Create CallOut Call Session

HTTP post `/restapi/v1.0/account/{accountId}/telephony/call-out`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'from' => array(
        'deviceId' => '<ENTER VALUE>'
    ),
    'to' => array(
        'phoneNumber' => '<ENTER VALUE>',
        'extensionNumber' => '<ENTER VALUE>'
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/telephony/call-out");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallSession.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/createCallOutCallSession) in API Explorer.

## Get Call Session Status

HTTP get `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$telephonySessionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'timestamp' => '<ENTER VALUE>',
    //'timeout' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/telephony/sessions/{$telephonySessionId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallSessionObject.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/readCallSessionStatus) in API Explorer.

## Drop Call Session

HTTP delete `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$telephonySessionId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->delete("/restapi/v1.0/account/{$accountId}/telephony/sessions/{$telephonySessionId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/deleteCallSession) in API Explorer.

## Hold Call Party

HTTP post `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/hold`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$telephonySessionId = '<ENTER VALUE>';
$partyId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/telephony/sessions/{$telephonySessionId}/parties/{$partyId}/hold");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallParty.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/holdCallParty) in API Explorer.

## Unhold Call Party

HTTP post `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/unhold`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$telephonySessionId = '<ENTER VALUE>';
$partyId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/telephony/sessions/{$telephonySessionId}/parties/{$partyId}/unhold");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallParty.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/unholdCallParty) in API Explorer.

## Reject Call Party

HTTP post `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reject`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$telephonySessionId = '<ENTER VALUE>';
$partyId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/telephony/sessions/{$telephonySessionId}/parties/{$partyId}/reject");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/rejectParty) in API Explorer.

## Transfer Call Party

HTTP post `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/transfer`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$telephonySessionId = '<ENTER VALUE>';
$partyId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'phoneNumber' => '<ENTER VALUE>',
    'voicemail' => '<ENTER VALUE>',
    'parkOrbit' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/telephony/sessions/{$telephonySessionId}/parties/{$partyId}/transfer");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallParty.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/transferCallParty) in API Explorer.

## Forward Call Party

HTTP post `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/forward`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$telephonySessionId = '<ENTER VALUE>';
$partyId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'phoneNumber' => '<ENTER VALUE>',
    'voicemail' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/telephony/sessions/{$telephonySessionId}/parties/{$partyId}/forward");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallParty.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/forwardCallParty) in API Explorer.

## Call Flip on Party

HTTP post `/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/flip`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$telephonySessionId = '<ENTER VALUE>';
$partyId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'callFlipId' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/v1.0/account/{$accountId}/telephony/sessions/{$telephonySessionId}/parties/{$partyId}/flip");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/callFlipParty) in API Explorer.

## Get Call Party Status

HTTP get `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$telephonySessionId = '<ENTER VALUE>';
$partyId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/telephony/sessions/{$telephonySessionId}/parties/{$partyId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallParty.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/readCallPartyStatus) in API Explorer.

## Update Call Party

HTTP patch `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$telephonySessionId = '<ENTER VALUE>';
$partyId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'party' => array(
        'muted' => true,
        'standAlone' => true
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->patch("/restapi/v1.0/account/{$accountId}/telephony/sessions/{$telephonySessionId}/parties/{$partyId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallParty.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/updateCallParty) in API Explorer.

## Create Recording

HTTP post `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$telephonySessionId = '<ENTER VALUE>';
$partyId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/telephony/sessions/{$telephonySessionId}/parties/{$partyId}/recordings");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/startCallRecording) in API Explorer.

## Pause/Resume Recording

HTTP patch `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/recordings/{recordingId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$telephonySessionId = '<ENTER VALUE>';
$partyId = '<ENTER VALUE>';
$recordingId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'brandId' => '~'
)

// POST BODY
$body = array(
    'active' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->patch("/restapi/v1.0/account/{$accountId}/telephony/sessions/{$telephonySessionId}/parties/{$partyId}/recordings/{$recordingId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/CallRecording.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/pauseResumeCallRecording) in API Explorer.

## Supervise Call

HTTP post `/restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/supervise`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$telephonySessionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'mode' => 'Listen',
    'deviceId' => '<ENTER VALUE>',
    'extensionNumber' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/telephony/sessions/{$telephonySessionId}/supervise");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/SuperviseCallSession.json)

[Try it out](https://developer.ringcentral.com/api-reference/Call-Control/superviseCallSession) in API Explorer.

## Get Glip Data Archive

HTTP get `/restapi/v1.0/glip/data-export/{taskId}/archive/{archiveId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$taskId = '<ENTER VALUE>';
$archiveId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/data-export/{$taskId}/archive/{$archiveId}");
?>
```

You can get response binary data by `$binary = $r->response()->raw()`

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Compliance-Exports/readComplianceArchive) in API Explorer.

## Create Data Export Task

HTTP post `/restapi/v1.0/glip/data-export`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// POST BODY
$body = array(
    'dateFrom' => '<ENTER VALUE>',
    'dateTo' => '<ENTER VALUE>',
    'userIds' => array(
        '<ENTER VALUE>'  
    ),
    'chatIds' => array(
        '<ENTER VALUE>'  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/data-export");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/DataExportTask.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Compliance-Exports/createDataExportTask) in API Explorer.

## Get Data Export Task

HTTP get `/restapi/v1.0/glip/data-export/{taskId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$taskId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/data-export/{$taskId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/DataExportTask.json)

[Try it out](https://developer.ringcentral.com/api-reference/Glip-Compliance-Exports/readDataExportTask) in API Explorer.

## Create Message Store Report

HTTP post `/restapi/v1.0/account/{accountId}/message-store-report`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'dateFrom' => '<ENTER VALUE>',
    'dateTo' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/message-store-report");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/MessageStoreReport.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Exports/createMessageStoreReport) in API Explorer.

## Get Message Store Report Task

HTTP get `/restapi/v1.0/account/{accountId}/message-store-report/{taskId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$taskId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/message-store-report/{$taskId}");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/MessageStoreReport.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Exports/readMessageStoreReportTask) in API Explorer.

## Get Message Store Report Archive

HTTP get `/restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$taskId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/message-store-report/{$taskId}/archive");
?>
```

You can get response json data by `$json = r->json();`
- `json` is an object with [this definition](./bin/definitions/MessageStoreReportArchive.json)

[Try it out](https://developer.ringcentral.com/api-reference/Message-Exports/readMessageStoreReportArchive) in API Explorer.

## Get Message Store Report Archive Content

HTTP get `/restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive/{archiveId}`

```php
<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$taskId = '<ENTER VALUE>';
$archiveId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/message-store-report/{$taskId}/archive/{$archiveId}");
?>
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference/Message-Exports/readMessageStoreReportArchiveContent) in API Explorer.

