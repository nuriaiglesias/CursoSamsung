<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Formulario de registro SCII</title>
        <link href="estilos.css" rel="stylesheet" type="text/css">
</head>

<body>
    <div class="group">
        <form method="POST" action="">
            <h2><em>Formulario de registro</em></h2>
            <label for="nombre">Nombre <span><em>(requerido)</em></span></label>
            <input type="text" name="nombre" class="form-input" required/>

            <label for="apellido">Apellido <span><em>(requerido)</em></span></label>
            <input type="text" name="apellido" class="form-input" required/>

            <label for="email">Email <span><em>(requerido)</em></span></label>
            <input type="email" name="email" class="form-input" required/>
            <input class="form-btn" name="submit" type="submit" value="Suscribirse"/>

<?php

if($_POST){
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cursosql";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO usuario (nombre,apellido,email)
VALUES ('$nombre','$apellido','$email')";

if($conn->query($sql) == TRUE){
    echo "New record created succesfully";
}else{
    echo "Error: " . sql . "<br>" . $bonn->error;
}
$conn->close();
}

?>
</form>
</div>
</body>
</html>