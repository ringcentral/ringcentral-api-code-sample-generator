<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'schedule' => array(
        'weeklyRanges' => array(
            'monday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'tuesday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'wednesday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'thursday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'friday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'saturday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            ),
            'sunday' => array(
                array(
                    'from' => '<ENTER VALUE>',
                    'to' => '<ENTER VALUE>'
                )  
            )
        )
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/business-hours");
?>
