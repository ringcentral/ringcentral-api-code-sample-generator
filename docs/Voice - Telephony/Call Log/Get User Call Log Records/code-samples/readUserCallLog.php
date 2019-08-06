<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'extensionNumber' => '<ENTER VALUE>',
    //'showBlocked' => true,
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
    //'page' => 1,
    //'perPage' => 100,
    //'showDeleted' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/call-log", $queryParams);
?>
