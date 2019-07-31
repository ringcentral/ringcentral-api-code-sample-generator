<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$meetingId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'topic' => '<ENTER VALUE>',
    'meetingType' => '<ENTER VALUE>',
    'schedule' => array(
        'startTime' => '<ENTER VALUE>',
        'durationInMinutes' => 000,
        'timeZone' => array(
            'uri' => '<ENTER VALUE>',
            'id' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'description' => '<ENTER VALUE>'
        )
    ),
    'password' => '<ENTER VALUE>',
    'host' => array(
        'id' => '<ENTER VALUE>'
    ),
    'allowJoinBeforeHost' => true,
    'startHostVideo' => true,
    'startParticipantsVideo' => true,
    'usePersonalMeetingId' => true,
    'audioOptions' => array(
        '<ENTER VALUE>'  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/meeting/{$meetingId}");
?>
