<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'records' => array(
        array(
            'id' => '<ENTER VALUE>',
            'chassisId' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'site' => array(
                'id' => '<ENTER VALUE>',
                'name' => '<ENTER VALUE>'
            ),
            'emergencyAddress' => array(
                'country' => '<ENTER VALUE>',
                'countryId' => '<ENTER VALUE>',
                'countryIsoCode' => '<ENTER VALUE>',
                'countryName' => '<ENTER VALUE>',
                'state' => '<ENTER VALUE>',
                'stateId' => '<ENTER VALUE>',
                'stateIsoCode' => '<ENTER VALUE>',
                'stateName' => '<ENTER VALUE>',
                'city' => '<ENTER VALUE>',
                'street' => '<ENTER VALUE>',
                'street2' => '<ENTER VALUE>',
                'zip' => '<ENTER VALUE>'
            )
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/emergency-address-auto-update/switches-bulk-validate");
?>
