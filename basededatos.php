<?php
header("Content-Type: application/json");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "primary";

// Conectar a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Conexión fallida: " . $conn->connect_error]));
}

// Obtener los datos enviados desde JavaScript
$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data)) {
    foreach ($data as $row) {
        $stmt = $conn->prepare("INSERT INTO sugerenciajl (idNombre, Apellido, `Correo Electrónico`, Estado, País, `Sugerencia a Favor`, `Sugerencias en Contra`) 
                                VALUES (?, ?, ?, ?, ?, ?, ?)");

        $stmt->bind_param("issssss", $row["idNombre"], $row["apellido"], $row["correo"], $row["estado"], $row["pais"], $row["sugerenciaFavor"], $row["sugerenciaContra"]);
        $stmt->execute();
    }

    echo json_encode(["message" => "Datos insertados correctamente"]);
} else {
    echo json_encode(["error" => "No se recibieron datos"]);
}

$conn->close();
?>
