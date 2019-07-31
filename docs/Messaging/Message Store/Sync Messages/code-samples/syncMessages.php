<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'conversationId' => 000,
    //'dateFrom' => '<ENTER VALUE>',
    //'dateTo' => '<ENTER VALUE>',
    //'direction' => array( 'Inbound', 'Outbound' ),
    //'distinctConversations' => true,
    //'messageType' => array( 'Fax', 'SMS', 'VoiceMail', 'Pager', 'Text' ),
    //'recordCount' => 000,
    //'syncToken' => '<ENTER VALUE>',
    //'syncType' => array( 'FSync', 'ISync' )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/message-sync", $queryParams);
?>
