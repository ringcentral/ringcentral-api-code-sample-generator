<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$taskId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'subject' => '<ENTER VALUE>',
    'assignees' => array(
        array(
            'id' => '<ENTER VALUE>'
        )  
    ),
    'completenessCondition' => 'Simple',
    'startDate' => '<ENTER VALUE>',
    'dueDate' => '<ENTER VALUE>',
    'color' => 'Black',
    'section' => '<ENTER VALUE>',
    'description' => '<ENTER VALUE>',
    'recurrence' => array(
        'schedule' => 'None',
        'endingCondition' => 'None',
        'endingAfter' => 000,
        'endingOn' => '<ENTER VALUE>'
    ),
    'attachments' => array(
        array(
            'id' => '<ENTER VALUE>'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->patch("/restapi/v1.0/glip/tasks/{$taskId}", $body);
?>
