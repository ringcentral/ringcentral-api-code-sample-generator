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
