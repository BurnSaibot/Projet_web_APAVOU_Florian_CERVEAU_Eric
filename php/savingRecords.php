<?php
	if (!isset($_POST["data"])){
		echo "echec";
	} else {
		$data = $_POST["data"];
		//echo $data;
		$manage = json_decode($data,true);
		$datas = $manage["datas"];
		$cookies = $manage["cookies"];
		$base = json_decode(file_get_contents('../json/records.json'),true);
		$length = sizeof($base);
		$cookies["id"] = $length+1;
		array_push($base,$cookies);
		//echo "<div> cookies content : " . json_encode($cookies) . "</div>";
		$jsonData = json_encode($base);
		file_put_contents("../json/records.json", $jsonData);
		file_put_contents("../json/" . $cookies["id"] . ".json", json_encode($datas));

	}

?>