<?php
$pseudo = $_REQUEST["pseudo"];
?>

<!DOCTYPE html>
<html>
<head>
	<title>Accueil</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
	<p><?php echo $pseudo ?></p> 
	<a href="welcome.php" class="btn btn-danger" role="button">Déconnexion</a>
	<h1>Home</h1>
	<a href="move.php" class="btn btn-info" role="button">Enregistrer un nouveau mouvement</a>
	<hr>
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
	<div class="container">
		<div class="row">
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
			<div class="col-sm-6 col-md-4 col-lg-3"><img src="chart.png" class="img-thumbnail"></div>
		</div>
	</div>

	</html>