<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$chatId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'creationTimeTo' => 'now',
    //'creationTimeFrom' => '<ENTER VALUE>',
    //'creatorId' => array( string ),
    //'status' => array( 'Pending', 'InProgress', 'Completed' ),
    //'assignmentStatus' => 'Unassigned',
    //'assigneeId' => array( string ),
    //'assigneeStatus' => 'Pending',
    //'pageToken' => '<ENTER VALUE>',
    //'recordCount' => '30'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/glip/chats/{$chatId}/tasks", $queryParams);
?>
