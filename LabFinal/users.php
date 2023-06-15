<html>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Form</title>
	<link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="cont">
        <form method="POST" action="">
        <input type="submit" id="check" name="consulta" value="Consulta">	
            <div id="blanco">	
                <?php include_once("consulta.php") ?>
            </div>
        </form>
    </div>

	
</body>

</html>