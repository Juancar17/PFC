<?php

header("Access-Control-Allow-Origin: http://localhost:5173"); // Permitir solicitudes desde tu frontend
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Encabezados permitidos
header("Access-Control-Allow-Credentials: true"); // Permitir cookies si es necesario
require_once('../../vendor/autoload.php');
require_once('../../db.php');

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (isset($input['email'], $input['password'])) {
        $email = htmlspecialchars($input['email']);
        $password = $input['password'];

        try {
            $query = "SELECT * FROM usuarios WHERE email = :email";
            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':email', $email);
            $stmt->execute();

            $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($usuario) {
                if (password_verify($password, $usuario['password'])) {
                    $payload = [
                        'iss' => 'http://localhost',
                        'aud' => 'http://localhost',
                        'iat' => time(),
                        'exp' => time() + (60 * 60),
                        'data' => [
                            'id' => $usuario['id'],
                            'nombre' => $usuario['nombre'],
                            'email' => $usuario['email'],
                            'rol' => $usuario['rol']
                        ]
                    ];

                    $jwt = JWT::encode($payload, 'TU_CLAVE_SECRETA', 'HS256');

                    echo json_encode([
                        'message' => 'Login exitoso.',
                        'token' => $jwt
                    ]);
                } else {
                    echo json_encode(['error' => 'Contraseña incorrecta.']);
                }
            } else {
                echo json_encode(['error' => 'El usuario no existe.']);
            }
        } catch (PDOException $e) {
            error_log($e->getMessage());
            echo json_encode(['error' => 'Error al procesar el login.']);
        }
    } else {
        echo json_encode(['error' => 'Datos incompletos.']);
    }
} else {
    echo json_encode(['error' => 'Método no permitido.']);
}
?>
