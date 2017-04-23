<?php 
	require_once('consult.php');
	header('Content-Type: application/json');
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods:POST,GET,OPTIONS');
	
	function searchDataPage($id_desing) {
		$Consult =new Consult($id_desing);
		return $Consult->searchId();
	}

	$id=$_GET['id_desing'];
	
	if(!empty($id)){
	
			$resultados=searchDataPage($id);
		}

	else{
		header('HTTP/1.1 405 Method Not Allowed');
		exit;	
	}
	
	echo json_encode(array_map("utf8_encode",$resultados));
	

?>
