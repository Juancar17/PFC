<?php

// Habilitar CORS
header("Access-Control-Allow-Origin: http://localhost:5173"); // Permitir solicitudes desde tu frontend
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Métodos permitidos
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Encabezados permitidos
header("Access-Control-Allow-Credentials: true"); // Permitir cookies si es necesario

// Manejar solicitudes preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Aquí continúa el código original de register.php

require_once('../../db.php'); // Ruta al archivo de conexión

// Verificar si se recibieron datos por POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener datos del cuerpo de la solicitud
    $input = json_decode(file_get_contents('php://input'), true);

    // Validar que los datos necesarios estén presentes
    if (isset($input['nombre'], $input['email'], $input['password'])) {
        $nombre = htmlspecialchars($input['nombre']);
        $email = htmlspecialchars($input['email']);
        $password = $input['password']; // Contraseña sin procesar

        // Encriptar la contraseña
        $passwordHash = password_hash($password, PASSWORD_BCRYPT);

        try {
            // Preparar consulta para insertar el usuario
            $query = "INSERT INTO usuarios (nombre, email, password) VALUES (:nombre, :email, :password)";
            $stmt = $pdo->prepare($query);
            $stmt->bindParam(':nombre', $nombre);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $passwordHash);
            
            $checkQuery = "SELECT id FROM usuarios WHERE email = :email";
            $checkStmt = $pdo->prepare($checkQuery);
            $checkStmt->bindParam(':email', $email);
            $checkStmt->execute();

            if ($checkStmt->rowCount() > 0) {
                echo json_encode(['error' => 'El correo ya está registrado.']);
                exit;
            }
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                echo json_encode(['error' => 'Formato de correo inválido.']);
                exit;
            }

            if (strlen($password) < 6) {
                echo json_encode(['error' => 'La contraseña debe tener al menos 6 caracteres.']);
                exit;
            }
        
            // Ejecutar la consulta
            if ($stmt->execute()) {
                echo json_encode(['message' => 'Usuario registrado exitosamente.']);
            } else {
                echo json_encode(['error' => 'Error al registrar el usuario.']);
            }
        } catch (PDOException $e) {
            // Manejo de errores (por ejemplo, email duplicado)
            error_log($e->getMessage());
            echo json_encode(['error' => 'Error al registrar el usuario. Puede que el correo ya esté en uso.']);
        }
    } else {
        echo json_encode(['error' => 'Datos incompletos.']);
    }
} else {
    echo json_encode(['error' => 'Método no permitido.']);
}
?>
