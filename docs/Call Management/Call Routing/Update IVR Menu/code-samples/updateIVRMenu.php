<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$ivrMenuId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'id' => '<ENTER VALUE>',
    'uri' => '<ENTER VALUE>',
    'name' => '<ENTER VALUE>',
    'extensionNumber' => '<ENTER VALUE>',
    'prompt' => array(
        'mode' => 'Audio',
        'audio' => array(
            'uri' => '<ENTER VALUE>',
            'id' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>',
            'localeCode' => '<ENTER VALUE>'
        ),
        'text' => '<ENTER VALUE>',
        'language' => array(
            'uri' => '<ENTER VALUE>',
            'id' => '<ENTER VALUE>'
        )
    ),
    'actions' => array(
        array(
            'input' => '<ENTER VALUE>',
            'action' => 'Connect',
            'extension' => array(
                'uri' => '<ENTER VALUE>',
                'id' => '<ENTER VALUE>'
            ),
            'phoneNumber' => '<ENTER VALUE>'
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/ivr-menus/{$ivrMenuId}");
?>
