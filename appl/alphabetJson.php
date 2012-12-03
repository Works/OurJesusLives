<?php
require_once('../admin/includes/dbconnection.php');
$lang	= $_GET['lang'];

$arrAlpha[] = array($lang);
										

echo json_encode($arrAlpha);
