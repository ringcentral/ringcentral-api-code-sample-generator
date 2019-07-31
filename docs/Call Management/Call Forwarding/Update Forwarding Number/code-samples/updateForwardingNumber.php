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
