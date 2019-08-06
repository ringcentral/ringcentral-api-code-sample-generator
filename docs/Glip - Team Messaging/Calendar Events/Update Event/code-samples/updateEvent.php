<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$eventId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'id' => '<ENTER VALUE>',
    'creatorId' => '<ENTER VALUE>',
    'title' => '<ENTER VALUE>',
    'startTime' => '<ENTER VALUE>',
    'endTime' => '<ENTER VALUE>',
    'allDay' => true,
    'recurrence' => 'None',
    'endingCondition' => '<ENTER VALUE>',
    'endingAfter' => 000,
    'endingOn' => 'None',
    'color' => 'Black',
    'location' => '<ENTER VALUE>',
    'description' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/glip/events/{$eventId}", $body);
?>
