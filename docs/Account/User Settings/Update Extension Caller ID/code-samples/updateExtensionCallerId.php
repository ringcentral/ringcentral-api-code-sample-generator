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
