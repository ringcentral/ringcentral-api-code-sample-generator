<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$taskId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'status' => 'Incomplete',
    'assignees' => array(
        array(
            'id' => '<ENTER VALUE>'
        )  
    ),
    'completenessPercentage' => 000
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/glip/tasks/{$taskId}/complete", $body);
?>
