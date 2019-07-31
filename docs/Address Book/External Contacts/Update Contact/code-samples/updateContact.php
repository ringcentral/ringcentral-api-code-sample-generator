<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$contactId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'dialingPlan' => '<ENTER VALUE>'
)

// POST BODY
$body = array(
    'firstName' => '<ENTER VALUE>',
    'lastName' => '<ENTER VALUE>',
    'middleName' => '<ENTER VALUE>',
    'nickName' => '<ENTER VALUE>',
    'company' => '<ENTER VALUE>',
    'jobTitle' => '<ENTER VALUE>',
    'email' => '<ENTER VALUE>',
    'email2' => '<ENTER VALUE>',
    'email3' => '<ENTER VALUE>',
    'birthday' => '<ENTER VALUE>',
    'webPage' => '<ENTER VALUE>',
    'notes' => '<ENTER VALUE>',
    'homePhone' => '<ENTER VALUE>',
    'homePhone2' => '<ENTER VALUE>',
    'businessPhone' => '<ENTER VALUE>',
    'businessPhone2' => '<ENTER VALUE>',
    'mobilePhone' => '<ENTER VALUE>',
    'businessFax' => '<ENTER VALUE>',
    'companyPhone' => '<ENTER VALUE>',
    'assistantPhone' => '<ENTER VALUE>',
    'carPhone' => '<ENTER VALUE>',
    'otherPhone' => '<ENTER VALUE>',
    'otherFax' => '<ENTER VALUE>',
    'callbackPhone' => '<ENTER VALUE>',
    'homeAddress' => array(
        'street' => '<ENTER VALUE>',
        'city' => '<ENTER VALUE>',
        'state' => '<ENTER VALUE>',
        'zip' => '<ENTER VALUE>'
    ),
    'businessAddress' => array(
        'street' => '<ENTER VALUE>',
        'city' => '<ENTER VALUE>',
        'state' => '<ENTER VALUE>',
        'zip' => '<ENTER VALUE>'
    ),
    'otherAddress' => array(
        'street' => '<ENTER VALUE>',
        'city' => '<ENTER VALUE>',
        'state' => '<ENTER VALUE>',
        'zip' => '<ENTER VALUE>'
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/address-book/contact/{$contactId}");
?>
