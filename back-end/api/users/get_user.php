<?php

header("Access-Control-Allow-Origin: http://localhost:5173"); // Permitir solicitudes desde tu frontend
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Encabezados permitidos
header("Access-Control-Allow-Credentials: true"); // Permitir cookies si es necesario

require_once('../../utils/auth.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Obtener el token del encabezado Authorization
    $headers = getallheaders();
    if (isset($headers['Authorization'])) {
        $token = str_replace('Bearer ', '', $headers['Authorization']); // Eliminar "Bearer " del token
        $usuario = validarToken($token);

        if ($usuario) {
            echo json_encode([
                'message' => 'Acceso autorizado.',
                'usuario' => $usuario->data
            ]);
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
