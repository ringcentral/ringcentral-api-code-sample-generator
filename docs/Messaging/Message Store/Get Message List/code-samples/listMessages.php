<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';
$extensionId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'availability' => array( 'Alive', 'Deleted', 'Purged' ),
    //'conversationId' => 000,
    //'dateFrom' => '<ENTER VALUE>',
    //'dateTo' => '<ENTER VALUE>',
    //'direction' => array( 'Inbound', 'Outbound' ),
    //'distinctConversations' => true,
    //'messageType' => array( 'Fax', 'SMS', 'VoiceMail', 'Pager', 'Text' ),
    //'readStatus' => array( 'Read', 'Unread' ),
    //'page' => '1',
    //'perPage' => '100',
    //'phoneNumber' => '<ENTER VALUE>'
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension/{$extensionId}/message-store");
?>
