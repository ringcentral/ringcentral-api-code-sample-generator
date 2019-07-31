<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$id = '<ENTER VALUE>';

// POST BODY
$body = array(
    'Operations' => array(
        array(
            'op' => 'add',
            'path' => '<ENTER VALUE>',
            'value' => '<ENTER VALUE>'
        )  
    ),
    'schemas' => array(
        'urn:ietf:params:scim:api:messages:2.0:PatchOp'  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->patch("/scim/v2/Users/{$id}");
?>
