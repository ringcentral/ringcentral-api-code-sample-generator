<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'status' => 'Disabled',
    'statusInfo' => array(
        'comment' => '<ENTER VALUE>',
        'reason' => 'Voluntarily'
    ),
    'reason' => '<ENTER VALUE>',
    'comment' => '<ENTER VALUE>',
    'extensionNumber' => '<ENTER VALUE>',
    'contact' => array(
        'firstName' => '<ENTER VALUE>',
        'lastName' => '<ENTER VALUE>',
        'company' => '<ENTER VALUE>',
        'jobTitle' => '<ENTER VALUE>',
        'email' => '<ENTER VALUE>',
        'businessPhone' => '<ENTER VALUE>',
        'mobilePhone' => '<ENTER VALUE>',
        'businessAddress' => array(
            'country' => '<ENTER VALUE>',
            'state' => '<ENTER VALUE>',
            'city' => '<ENTER VALUE>',
            'street' => '<ENTER VALUE>',
            'zip' => '<ENTER VALUE>'
        ),
        'emailAsLoginName' => true,
        'pronouncedName' => array(
            'type' => 'Default',
            'text' => '<ENTER VALUE>'
        ),
        'department' => '<ENTER VALUE>'
    ),
    'regionalSettings' => array(
        'homeCountry' => array(
            'id' => '<ENTER VALUE>'
        ),
        'timezone' => array(
            'id' => '<ENTER VALUE>'
        ),
        'language' => array(
            'id' => '<ENTER VALUE>'
        ),
        'greetingLanguage' => array(
            'id' => '<ENTER VALUE>'
        ),
        'formattingLocale' => array(
            'id' => '<ENTER VALUE>'
        ),
        'timeFormat' => '12h'
    ),
    'setupWizardState' => 'NotStarted',
    'partnerId' => '<ENTER VALUE>',
    'ivrPin' => '<ENTER VALUE>',
    'password' => '<ENTER VALUE>',
    'callQueueInfo' => array(
        'slaGoal' => 000,
        'slaThresholdSeconds' => 000,
        'includeAbandonedCalls' => true,
        'abandonedThresholdSeconds' => 000
    ),
    'transition' => array(
        array(
            'sendWelcomeEmailsToUsers' => true,
            'sendWelcomeEmail' => true
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}");
?>
