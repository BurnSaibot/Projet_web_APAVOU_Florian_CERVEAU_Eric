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
	<script src="../js/menu.js" type="text/javascript"></script>
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
			<input type="text" name="">
			Mots-clé :
			<input type="text" name="">
			Date :
			<input type="date" name="">
			Durée :
			<input type="number" name="duration">
		</form>

	</div>

	<div class="container-fluid">

		<div class="row">
			<div class="col-sm-5 col-md-4 col-lg-2 movebox">
				<h2> Double Pas #1 </h2>
				<h3>Michel Jordan</h3>
				<p>double-pas</p>
				<p>9/10/18</p>
			</div>

			<div class="col-sm-5 col-md-4 col-lg-2 movebox">
				<h2> Double Pas #1 </h2>
				<h3>Michel Jordan</h3>
				<p>double-pas</p>
				<p>9/10/18</p>
			</div>

			<div class="col-sm-5 col-md-4 col-lg-2 movebox">
				<h2> Double Pas #1 </h2>
				<h3>Michel Jordan</h3>
				<p>double-pas</p>
				<p>9/10/18</p>
			</div>

			<div class="col-sm-5 col-md-4 col-lg-2 movebox">
				<h2> Double Pas #1 </h2>
				<h3>Michel Jordan</h3>
				<p>double-pas</p>
				<p>9/10/18</p>
			</div>

			<div class="col-sm-5 col-md-4 col-lg-2 movebox">
				<h2> Double Pas #1 </h2>
				<h3>Michel Jordan</h3>
				<p>double-pas</p>
				<p>9/10/18</p>
			</div>

			<div class="col-sm-5 col-md-4 col-lg-2 movebox">
				<h2> Double Pas #1 </h2>
				<h3>Michel Jordan</h3>
				<p>double-pas</p>
				<p>9/10/18</p>
			</div>

			<div class="col-sm-5 col-md-4 col-lg-2 movebox">
				<h2> Double Pas #1 </h2>
				<h3>Michel Jordan</h3>
				<p>double-pas</p>
				<p>9/10/18</p>
			</div>

			<div class="col-sm-5 col-md-4 col-lg-2 movebox">
				<h2> Double Pas #1 </h2>
				<h3>Michel Jordan</h3>
				<p>double-pas</p>
				<p>9/10/18</p>
			</div>

			<div class="col-sm-5 col-md-4 col-lg-2 movebox">
				<h2> Double Pas #1 </h2>
				<h3>Michel Jordan</h3>
				<p>double-pas</p>
				<p>9/10/18</p>
			</div>
		<div>
	</div>

	<div>
		<script>
			readJSON("../js/sample.json");
 		</script>
	</div>

	
	</html>