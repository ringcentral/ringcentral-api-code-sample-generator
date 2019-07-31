<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// POST BODY
$body = array(
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
    'extensionNumber' => '<ENTER VALUE>',
    'password' => '<ENTER VALUE>',
    'references' => array(
        array(
            'ref' => '<ENTER VALUE>',
            'type' => 'PartnerId'
        )  
    ),
    'roles' => array(
        array(
            'uri' => '<ENTER VALUE>',
            'id' => '<ENTER VALUE>'
        )  
    ),
    'regionalSettings' => array(
        'homeCountry' => array(
            'id' => '<ENTER VALUE>',
            'uri' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'isoCode' => '<ENTER VALUE>',
            'callingCode' => '<ENTER VALUE>'
        ),
        'timezone' => array(
            'id' => '<ENTER VALUE>',
            'uri' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'description' => '<ENTER VALUE>'
        ),
        'language' => array(
            'id' => '<ENTER VALUE>',
            'uri' => '<ENTER VALUE>',
            'greeting' => true,
            'formattingLocale' => true,
            'localeCode' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'ui' => true
        ),
        'greetingLanguage' => array(
            'id' => '<ENTER VALUE>',
            'localeCode' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>'
        ),
        'formattingLocale' => array(
            'id' => '<ENTER VALUE>',
            'localeCode' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>'
        ),
        'timeFormat' => '12h'
    ),
    'setupWizardState' => 'NotStarted',
    'status' => 'Enabled',
    'statusInfo' => array(
        'comment' => '<ENTER VALUE>',
        'reason' => 'Voluntarily'
    ),
    'type' => 'User',
    'hidden' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->post("/restapi/v1.0/account/{$accountId}/extension", $body);
?>
