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

$request = $rcsdk->createMultipartBuilder()
    ->add('image', 'alice_smith.gif');
    ->add(fopen('./alice_smith.gif', 'r'))
    ->request("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/profile-image");

$r = $platform->sendRequest($request);
?>
