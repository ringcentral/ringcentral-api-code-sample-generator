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
