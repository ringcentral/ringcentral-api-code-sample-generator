<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';
$ruleId = '<ENTER VALUE>';

// POST BODY
$body = array(
    'forwarding' => array(
        'notifyMySoftPhones' => true,
        'notifyAdminSoftPhones' => true,
        'softPhonesRingCount' => 1,
        'ringingMode' => 'Sequentially',
        'rules' => array(
            array(
                'index' => 000,
                'ringCount' => 000,
                'enabled' => true,
                'forwardingNumbers' => array(
                    array(
                        'id' => '<ENTER VALUE>',
                        'type' => 'Home'
                    )  
                )
            )  
        ),
        'mobileTimeout' => true
    ),
    'enabled' => true,
    'name' => '<ENTER VALUE>',
    'callers' => array(
        array(
            'callerId' => '<ENTER VALUE>',
            'name' => '<ENTER VALUE>'
        )  
    ),
    'calledNumbers' => array(
        array(
            'phoneNumber' => '<ENTER VALUE>'
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
    'callHandlingAction' => 'ForwardCalls',
    'unconditionalForwarding' => array(
        'phoneNumber' => '<ENTER VALUE>'
    ),
    'queue' => array(
        'transferMode' => 'Rotating',
        'fixedOrderAgents' => array(
            array(
                'extension' => array(
                    'id' => '<ENTER VALUE>',
                    'uri' => '<ENTER VALUE>',
                    'extensionNumber' => '<ENTER VALUE>',
                    'partnerId' => '<ENTER VALUE>'
                ),
                'index' => 000
            )  
        ),
        'holdAudioInterruptionMode' => 'Never',
        'holdAudioInterruptionPeriod' => 000,
        'agentTimeout' => 000,
        'wrapUpTime' => 000,
        'holdTime' => 000,
        'maxCallers' => 000,
        'maxCallersAction' => 'Voicemail'
    ),
    'voicemail' => array(
        'enabled' => true,
        'recipient' => array(
            'uri' => '<ENTER VALUE>',
            'id' => '<ENTER VALUE>'
        )
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
    ),
    'screening' => 'Off',
    'showInactiveNumbers' => true
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->put("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/answering-rule/{$ruleId}", $body);
?>
