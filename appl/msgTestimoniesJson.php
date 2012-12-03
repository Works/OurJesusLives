<?php
require_once('../admin/includes/dbconnection.php');


$sql	= "SELECT * from audio_gal  
			WHERE status LIKE '%testimony%'
			ORDER BY id";


$result= mysql_query($sql);

if(mysql_num_rows($result)>0) {
	while($row = mysql_fetch_array($result)) {
		$id			= $row['id'];
		$caption	= $row['caption'];
		$audio		= $row['audio']; 	
		$arrTestimony[] = array('id' => $id, 'caption' => $caption, 'audio' => $audio);
	}
}
echo json_encode($arrTestimony);