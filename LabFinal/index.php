<html>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Form</title>
	<link rel="stylesheet" href="style.css">
</head>

<body>

	<div class="cont">
		<h1>Subscribirse</h1>
		<form method="POST" action="">
			<div>
				<label for="name">Nombre</label><br>
				<input type="text" id="name" name="name" autocomplete="off" required><br>
			</div>
			<div>
				<label for="firstSurname">Primer apellido</label><br>
				<input type="text" id="firstSurname" name="firstSurname" autocomplete="off" required><br>
			</div>
			<div>
				<label for="secondSurname">Segundo apellido</label><br>
				<input type="text" id="secondSurname" name="secondSurname" autocomplete="off" required><br>
			</div>
			<div>
				<label for="email">Email</label><br>
				<input type="email" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" id="email" name="email" autocomplete="off" required><br>
			</div>
			<div>
				<label for="username">Username</label><br>
				<input type="text" id="username" name="username" autocomplete="off" required><br>
			</div>
			<div>
				<label for="password">Contraseña</label><br>
				<input type="password" minlength="4" maxlength="8" id="password" name="password" autocomplete="off" required><br>
			</div>
			<input type="submit" id="check" name="insert" value="Enviar">
			<?php include_once("form.php") ?>
		</form>
	</div>	
	
</body>

</html>