<?php


if(isset($_POST['insert'])){
    // Datos de conexión a la base de datos
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "labfinal";

    // Establecer conexión con la base de datos
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verificar si hay error en la conexión
    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    // Obtener los datos del formulario
    $nombre = $_POST["name"];
    $primerAp = $_POST["firstSurname"];
    $segundoAp = $_POST["secondSurname"];
    $email = $_POST["email"];
    $username = $_POST["username"];
    $contrasena = $_POST["password"];

    // Validar si el correo ya existe en la base de datos
    $sql = "SELECT * FROM user WHERE email = '$email'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        echo "El correo ya está registrado. Por favor, utiliza otro correo.";
    } else {
        // Insertar los datos en la tabla user
        $sql = "INSERT INTO user (nombre, primerAp, segundoAp, email, username, contrasena)
                VALUES ('$nombre', '$primerAp', '$segundoAp', '$email', '$username', '$contrasena')";
        if ($conn->query($sql) === true) {
            echo "Registro completado con éxito.";
            header("Location: http://localhost/labfinal/users.php");
        } else {
            echo "Error al registrar los datos: " . $conn->error;
        }
    }
    // Cerrar la conexión a la base de datos
    $conn->close();
}
?>