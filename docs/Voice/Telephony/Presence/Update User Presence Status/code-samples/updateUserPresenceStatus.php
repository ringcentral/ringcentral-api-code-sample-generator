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
