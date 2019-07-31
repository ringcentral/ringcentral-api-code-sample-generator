<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// POST BODY
$body = array(
    'dateFrom' => '<ENTER VALUE>',
    'dateTo' => '<ENTER VALUE>',
    'userIds' => array(
        '<ENTER VALUE>'  
    ),
    'chatIds' => array(
        '<ENTER VALUE>'  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/data-export");
?>
