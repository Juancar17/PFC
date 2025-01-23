<?php
require_once('../../vendor/autoload.php'); // Librería JWT
require_once('../../db.php');

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function validarToken($token) {
    try {
        $decoded = JWT::decode($token, new Key(JWT_SECRET_KEY, 'HS256'));
        return $decoded;
    } catch (Exception $e) {
        error_log("Error al validar el token: " . $e->getMessage());
        return false; // Token inválido o expirado
    }
}

function generarToken($usuario) {
    $payload = [
        'iss' => 'http://localhost', // Emisor
        'aud' => 'http://localhost', // Audiencia
        'iat' => time(), // Fecha de emisión
        'exp' => time() + (60 * 60), // Expira en 1 hora
        'data' => [
            'id' => $usuario['id'],
            'nombre' => $usuario['nombre'],
            'email' => $usuario['email'],
            'rol' => $usuario['rol']
        ]
    ];
    return JWT::encode($payload, JWT_SECRET_KEY, 'HS256');
}

function renovarToken($token) {
    $decoded = validarToken($token);
    if ($decoded) {
        // Generar un nuevo token con la misma información
        return generarToken((array) $decoded->data);
    }
    return false;
}
?>
