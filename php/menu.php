<?php
$pseudo = $_REQUEST["pseudo"];
?>

<!DOCTYPE html>
<html>
<head>
	<title>Accueil</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
</head>
<body>

	<div class = "navbar navbar-default navbar-static banniere">

		<div class ="user">
			<span><?php echo $pseudo ?></span>
			<a href="welcome.php" class="btn btn-danger" role="button">Déconnexion</a>
		</div>

		<h1>Home</h1>

		<div class = "new-move-btn">
			<a href="../html/index.html" class="btn btn-info" role="button">Enregistrer un nouveau mouvement</a>
		</div>

	</div>

	<div class = "search">

		<h2>Recherche</h2>

		<form>
			Pseudo :
			<input type="text" id="SBpseudo">
			Mots-clé :
			<input type="text" id="SBKeyword">
			Date :
			<input type="date" id="SBDate">
			Durée :
			<input type="number" id="SBDuration">
			<button id="SBSubmit" value="Rechercher" onclick="filterMoves()">
		</form>

	</div>

	<div class="container-fluid">
		<div class="row" id="panelMoves"></div>
	</div>

	<div id="test"></div>

	<script src="../js/menu.js"></script>

	</html>
