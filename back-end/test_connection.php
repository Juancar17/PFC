<?php
require_once 'db.php'; // Ajusta esta ruta según tu estructura de carpetas

// Prueba la conexión con Supabase
$response = supabase_request('users', 'POST', [
    'name' => 'Producto C',
    'price' => 75.5,
    'stock' => 20
]);

if (isset($response['error'])) {
    echo 'Error: ' . $response['error'];
} else {
    echo 'Respuesta: ';
    print_r($response);
}
?>
