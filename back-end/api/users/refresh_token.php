<?php
require_once('../../utils/auth.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $headers = getallheaders();
    if (isset($headers['Authorization'])) {
        $token = str_replace('Bearer ', '', $headers['Authorization']);
        $usuario = validarToken($token);

        if ($usuario) {
            // Generar un nuevo token
            $nuevoToken = JWT::encode([
                'iss' => 'http://localhost',
                'aud' => 'http://localhost',
                'iat' => time(),
                'exp' => time() + (60 * 60), // 1 hora de expiración
                'data' => $usuario->data
            ], 'TU_CLAVE_SECRETA', 'HS256');

            echo json_encode([
                'message' => 'Token renovado exitosamente.',
                'token' => $nuevoToken
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
