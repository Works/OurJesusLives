<?php
require_once('../admin/includes/dbconnection.php');
$lang	= $_GET['lang'];
$pastor	= $_GET['pastor'];
$id		= $_GET['id'];

$sql	="SELECT * 
			FROM  renjmanj_jesus.audio_msg
			WHERE  renjmanj_jesus.audio_msg.`language` LIKE  '%$lang' 
			AND renjmanj_jesus.audio_msg.`pastor` LIKE  '%$pastor'
			AND renjmanj_jesus.audio_msg.`id` LIKE  '%$id'

			ORDER BY  renjmanj_jesus.audio_msg.id ASC ";


$result= mysql_query($sql);

if(mysql_num_rows($result)>0) {
	while($row = mysql_fetch_array($result)) {
		$id			= $row['id'];
		$caption	= $row['caption'];
		$language	= $row['language'];
		$pastor		= $row['pastor'];
		$song		= $row['utube'];
		$arrAudio[] = array('id' => $id, 'caption' => $caption, 'language' => $language , 'pastor'	=> $pastor, 'song'	=> $song);
	}
}
echo json_encode($arrAudio);
