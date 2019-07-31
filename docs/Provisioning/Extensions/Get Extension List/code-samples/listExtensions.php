<?php
// https://developers.ringcentral.com/my-account.html#/applications
// Find your credentials at the above url, set them as environment variables, or enter them below

// PATH PARAMETERS
$accountId = '<ENTER VALUE>';

// OPTIONAL QUERY PARAMETERS
$queryParams = array(
    //'extensionId' => '<ENTER VALUE>',
    //'email' => '<ENTER VALUE>',
    //'page' => 1,
    //'perPage' => 100,
    //'status' => array( 'Enabled', 'Disabled', 'NotActivated', 'Unassigned' ),
    //'type' => array( 'User', 'FaxUser', 'VirtualUser', 'DigitalUser', 'Department', 'Announcement', 'Voicemail', 'SharedLinesGroup', 'PagingOnly', 'IvrMenu', 'ApplicationExtension', 'ParkLocation', 'Limited', 'Bot' )
)

require('vendor/autoload.php');
$rcsdk = new RingCentral\SDK\SDK(getenv('clientId'), getenv('clientSecret'), getenv('serverURL'));
$platform = $rcsdk->platform();
$platform->login(getenv('username'), getenv('extension'), getenv('password'));
$r = $platform->get("/restapi/v1.0/account/{$accountId}/extension", $queryParams);
?>
