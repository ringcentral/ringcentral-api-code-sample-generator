<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));

$request = $rcsdk->createMultipartBuilder()
    ->setBody(array(
        'type' => 'Company'
    ))
    ->add('binary', 'mygreeting.wav');
    ->add(fopen('./mygreeting.wav', 'r'))
    ->request("/restapi/v1.0/account/{$accountId}/greeting");

$r = $platform->sendRequest($request);
?>
