<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// POST BODY
$body = array(
    'count' => 000,
    'filter' => '<ENTER VALUE>',
    'schemas' => array(
        'urn:ietf:params:scim:api:messages:2.0:SearchRequest'  
    ),
    'startIndex' => 000
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/scim/v2/Users/.search", $body);
?>
