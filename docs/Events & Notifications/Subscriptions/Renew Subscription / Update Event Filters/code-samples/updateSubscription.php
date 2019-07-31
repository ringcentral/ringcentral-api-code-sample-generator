<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$subscriptionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'aggregated' => true
)

// POST BODY
$body = array(
    'eventFilters' => array(
        '<ENTER VALUE>'  
    ),
    'deliveryMode' => array(
        'transportType' => 'PubNub',
        'address' => '<ENTER VALUE>',
        'encryption' => true,
        'certificateName' => '<ENTER VALUE>',
        'registrationId' => '<ENTER VALUE>',
        'verificationToken' => '<ENTER VALUE>'
    ),
    'expiresIn' => '604800'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/subscription/{$subscriptionId}");
?>
