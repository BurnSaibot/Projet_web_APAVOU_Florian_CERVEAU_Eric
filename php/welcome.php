<!DOCTYPE html>
<html>
<head>
	<title>Connexion</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<script src="../helpers.js"></script>
</head>
<body>
	<div class="navbar navbar-default banniere">
		<h1>Connexion au Projet Basket</h1>
	</div>

	<div class="connexionDiv">
		<form method="post" action="menu.php">
			Entrez votre pseudo :
			<br>
			<input type="text" name="pseudo" class="name" required>
			<br>
			<button type="submit" class="btn btn-info" onclick="registerCookies()">Connexion</button>
		</form>
	</div>
</body>
</html>