<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

$recipient = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));

$request = $rcsdk->createMultipartBuilder()
    ->setBody(array(
     'to' => array(array('phoneNumber' => $recipient)),
     'faxResolution' => 'High',
    ))
    ->add(fopen('fax.jpg', 'r'))
    ->request("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/fax");

$r = $platform->sendRequest($request);
?>