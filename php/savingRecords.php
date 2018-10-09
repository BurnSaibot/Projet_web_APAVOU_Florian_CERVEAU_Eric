<?php
	if (!isset($_POST["data"])){
		die("Unn");
	} else {
		$data = $_POST["data"];
		$file = fopen("1.json","a+");
		fwrite($file, $data);
		fwrite($file, "nsm");
		fclose($file);
		$file2 = fopen("2.json","a+");
		fwrite($sile2, "coucou");
		fclose($sile2);
		
		/*$manage = (array) json_decode($data);
		$base = json_decode(file_get_contents('../json/records.json'),true);
		$length = base.length;
		$manage["Id"] = $length+1;
		array_psuh($base,$Id);
		$jsonData = json_encode($manage);
		file_put_contents("../json/records.json", $jsonData);*/

	}

?>