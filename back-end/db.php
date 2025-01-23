<?php
// Configuración de conexión
$host = 'database-1.cbecuw4u0chc.eu-north-1.rds.amazonaws.com'; // Servidor
$dbname = 'tienda'; // Nombre de la base de datos
$user = 'admin'; // Usuario
$password = 'Katy0002!'; // Contraseña

// Intenta conectar
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}

// Define la clave secreta para JWT
define('JWT_SECRET_KEY', '9e107d9d372bb6826bd81d3542a419d6'); // Clave secreta única
?>
