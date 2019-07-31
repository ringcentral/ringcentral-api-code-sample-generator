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
