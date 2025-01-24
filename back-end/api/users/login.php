<?php
require_once '../../db.php';

// Verifica si los datos se envían por POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? null;
    $password = $_POST['password'] ?? null;

    if (!$email || !$password) {
        echo json_encode(['error' => 'El correo y la contraseña son obligatorios']);
        exit;
    }

    // Consulta al usuario en la tabla "users"
    $response = supabase_request("users?email=eq.$email", 'GET');

    if (empty($response)) {
        echo json_encode(['error' => 'Usuario no encontrado']);
        exit;
    }

    $user = $response[0];

    // Verifica la contraseña
    if (password_verify($password, $user['password'])) {
        echo json_encode(['message' => 'Inicio de sesión exitoso', 'user' => $user]);
    } else {
        echo json_encode(['error' => 'Contraseña incorrecta']);
    }
}
?>
