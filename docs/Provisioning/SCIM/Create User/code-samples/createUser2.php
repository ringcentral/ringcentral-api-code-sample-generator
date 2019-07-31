<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// POST BODY
$body = array(
    'active' => true,
    'addresses' => array(
        array(
            'country' => '<ENTER VALUE>',
            'locality' => '<ENTER VALUE>',
            'postalCode' => '<ENTER VALUE>',
            'region' => '<ENTER VALUE>',
            'streetAddress' => '<ENTER VALUE>',
            'type' => 'work'
        )  
    ),
    'emails' => array(
        array(
            'type' => 'work',
            'value' => '<ENTER VALUE>'
        )  
    ),
    'externalId' => '<ENTER VALUE>',
    'id' => '<ENTER VALUE>',
    'name' => array(
        'familyName' => '<ENTER VALUE>',
        'givenName' => '<ENTER VALUE>'
    ),
    'phoneNumbers' => array(
        array(
            'type' => 'work',
            'value' => '<ENTER VALUE>'
        )  
    ),
    'photos' => array(
        array(
            'type' => 'photo',
            'value' => '<ENTER VALUE>'
        )  
    ),
    'schemas' => array(
        'urn:ietf:params:scim:schemas:core:2.0:User'  
    ),
    'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User' => array(
        'department' => '<ENTER VALUE>'
    ),
    'userName' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/scim/v2/Users");
?>
