<?php
$lang		= $_GET['lang'];
$q			= $_GET['q'];
$alphabet	= $_GET['alphabet'];	
$page		= isset($_GET['page']) ? $_GET['page'] : 0;

if ($lang == '')
	die('Please specify language!');
	
$path		= "../songs/$lang/";

if ($q != '')
	$patters 	= "$path*$q*.mp3";
else 
	$patters 	= "$path*.mp3";
	
$files	  = glob($patters) ;
$count    = count($files);
$start    = $page*50;
asort($files);

$arrRet = array();


for ($i = $start; $i < $start+200; $i++) {
	if ($i >= $count) break;
        $file   = basename($files[$i]);
	$title	= basename($file, 'mp3');
	$arrRet[$i]['file']	= ($file);
	$arrRet[$i]['title']	= ($title);
	
}

$arrAlpha	= array();
$j=0;

foreach ($arrRet as $songs) {
	if(substr($songs['file'],0,1) == $alphabet) {
			$arrAlpha[$j]['file']	= $songs['file'];
			$arrAlpha[$j]['title']	= $songs['title'];
			$j++;
		}
		
}

//print_r($arrAlpha);
echo json_encode($arrAlpha);

