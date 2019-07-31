<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'public' => true,
    'name' => '<ENTER VALUE>',
    'description' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->patch("/restapi/v1.0/glip/teams/{$chatId}");
?>
