<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'emailAddresses' => array(
        '<ENTER VALUE>'  
    ),
    'smsEmailAddresses' => array(
        '<ENTER VALUE>'  
    ),
    'advancedMode' => true,
    'voicemails' => array(
        'notifyByEmail' => true,
        'notifyBySms' => true,
        'advancedEmailAddresses' => array(
            '<ENTER VALUE>'  
        ),
        'advancedSmsEmailAddresses' => array(
            '<ENTER VALUE>'  
        ),
        'includeAttachment' => true,
        'markAsRead' => true
    ),
    'inboundFaxes' => array(
        'notifyByEmail' => true,
        'notifyBySms' => true,
        'advancedEmailAddresses' => array(
            '<ENTER VALUE>'  
        ),
        'advancedSmsEmailAddresses' => array(
            '<ENTER VALUE>'  
        ),
        'includeAttachment' => true,
        'markAsRead' => true
    ),
    'outboundFaxes' => array(
        'notifyByEmail' => true,
        'notifyBySms' => true,
        'advancedEmailAddresses' => array(
            '<ENTER VALUE>'  
        ),
        'advancedSmsEmailAddresses' => array(
            '<ENTER VALUE>'  
        )
    ),
    'inboundTexts' => array(
        'notifyByEmail' => true,
        'notifyBySms' => true,
        'advancedEmailAddresses' => array(
            '<ENTER VALUE>'  
        ),
        'advancedSmsEmailAddresses' => array(
            '<ENTER VALUE>'  
        )
    ),
    'missedCalls' => array(
        'notifyByEmail' => true,
        'notifyBySms' => true,
        'advancedEmailAddresses' => array(
            '<ENTER VALUE>'  
        ),
        'advancedSmsEmailAddresses' => array(
            '<ENTER VALUE>'  
        )
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/notification-settings", $body);
?>
