<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$ruleId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'enabled' => 'true',
    'name' => '<ENTER VALUE>',
    'callers' => array(
        array(
            'callerId' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>'
        )  
    ),
    'calledNumbers' => array(
        array(
            'id' => '<ENTER VALUE>'
        )  
    ),
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
        ),
        'ranges' => array(
            array(
                'from' => '<ENTER VALUE>',
                'to' => '<ENTER VALUE>'
            )  
        ),
        'ref' => 'BusinessHours'
    ),
    'callHandlingAction' => 'Operator',
    'extension' => array(
        'callerId' => '<ENTER VALUE>',
        'name' => '<ENTER VALUE>'
    ),
    'greetings' => array(
        array(
            'type' => 'Introductory',
            'usageType' => 'UserExtensionAnsweringRule',
            'preset' => array(
                'uri' => '<ENTER VALUE>',
                'id' => '<ENTER VALUE>',
                'name' => '<ENTER VALUE>'
            )
        )  
    )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/answering-rule/{$ruleId}");
?>
