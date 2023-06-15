<?php

$resultadoOK = true;

if(isset($_POST['consulta'])){
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

    // Validar si el correo ya existe en la base de datos
    $sql = "SELECT * FROM user";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        echo "<table border='1'>
        <tr>
        <th>Nombre</th>
        <th>Primer apellido</th>
        <th>Segundo apellido</th>
        <th>Email</th>
        <th>Username</th>
        </tr>";
        while($row = $result->fetch_assoc())
          {
          echo "<tr>";
          echo "<td>" . $row['nombre'] . "</td>";
          echo "<td>" . $row['primerAp'] . "</td>";
          echo "<td>" . $row['segundoAp'] . "</td>";        
          echo "<td>" . $row['email'] . "</td>";        
          echo "<td>" . $row['username'] . "</td>";
          echo "</tr>";        
          }        
        echo "</table>";
    }
    // Cerrar la conexión a la base de datos
    $conn->close();
}
?>