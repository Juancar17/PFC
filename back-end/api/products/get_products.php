<?php

header("Access-Control-Allow-Origin: http://localhost:5173"); // Permitir solicitudes desde tu frontend
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Encabezados permitidos
header("Access-Control-Allow-Credentials: true"); // Permitir cookies si es necesario

require_once('../../utils/auth.php');
require_once('../../db.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $headers = getallheaders();
    if (isset($headers['Authorization'])) {
        $token = str_replace('Bearer ', '', $headers['Authorization']);
        $usuario = validarToken($token);

        if ($usuario) {
            try {
                $query = "SELECT * FROM productos";
                $stmt = $pdo->query($query);
                $productos = $stmt->fetchAll(PDO::FETCH_ASSOC);

                echo json_encode([
                    'message' => 'Productos obtenidos exitosamente.',
                    'productos' => $productos
                ]);
            } catch (PDOException $e) {
                error_log("Error al obtener productos: " . $e->getMessage());
                echo json_encode(['error' => 'Error al obtener productos.']);
            }
        } else {
            echo json_encode(['error' => 'Token inválido o expirado.']);
        }
    } else {
        echo json_encode(['error' => 'Token no proporcionado.']);
    }
} else {
    echo json_encode(['error' => 'Método no permitido.']);
}
?>
