<?php

header("Access-Control-Allow-Origin: http://localhost:5173"); // Permitir solicitudes desde tu frontend
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Encabezados permitidos
header("Access-Control-Allow-Credentials: true"); // Permitir cookies si es necesario

require_once('../../db.php');
require_once('../../utils/auth.php'); // Asegúrate de incluir el sistema de autenticación

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verifica el token
    $headers = getallheaders();
    if (!isset($headers['Authorization'])) {
        echo json_encode(['error' => 'No se proporcionó token de autenticación.']);
        exit;
    }

    $token = str_replace('Bearer ', '', $headers['Authorization']);
    $usuario = validarToken($token);

    if (!$usuario || $usuario->data->rol !== 'admin') {
        echo json_encode(['error' => 'No autorizado.']);
        exit;
    }

    // Leer los datos enviados desde el frontend
    $input = json_decode(file_get_contents('php://input'), true);

    if (isset($input['nombre'], $input['descripcion'], $input['precio'], $input['categoria'], $input['imagen'])) {
        $nombre = htmlspecialchars($input['nombre']);
        $descripcion = htmlspecialchars($input['descripcion']);
        $precio = floatval($input['precio']);
        $categoria = htmlspecialchars($input['categoria']);
        $imagen = htmlspecialchars($input['imagen']);

        try {
            $query = "INSERT INTO productos (nombre, descripcion, precio, categoria, imagen) VALUES (:nombre, :descripcion, :precio, :categoria, :imagen)";
            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':nombre', $nombre);
            $stmt->bindParam(':descripcion', $descripcion);
            $stmt->bindParam(':precio', $precio);
            $stmt->bindParam(':categoria', $categoria);
            $stmt->bindParam(':imagen', $imagen);

            if ($stmt->execute()) {
                echo json_encode(['message' => 'Producto creado exitosamente.']);
            } else {
                echo json_encode(['error' => 'Error al crear el producto.']);
            }
        } catch (PDOException $e) {
            error_log($e->getMessage());
            echo json_encode(['error' => 'Error interno del servidor.']);
        }
    } else {
        echo json_encode(['error' => 'Datos incompletos.']);
    }
} else {
    echo json_encode(['error' => 'Método no permitido.']);
}
?>
