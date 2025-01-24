<?php

// Configuración de conexión a Supabase



// URL de la API de Supabase
$supabaseUrl = 'https://tiadgcdzrtrixmqzmppa.supabase.co/rest/v1/';
$apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpYWRnY2R6cnRyaXhtcXptcHBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2NzIxODgsImV4cCI6MjA1MzI0ODE4OH0.eJ6xS_Oo5IA4kNSOB2T10-b1gkSMfRaI41emQTsvl4Q'; // Reemplaza con tu anon-key

// Configuración de la solicitud
$table = 'products'; // Tabla de Supabase
$url = $supabaseUrl . $table;

$options = [
    'http' => [
        'header' => "apikey: $apiKey\r\nContent-Type: application/json\r\n",
        'method' => 'GET',
    ],
];

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

// Ver los resultados
$data = json_decode($response, true);
print_r($data);

function supabase_request($endpoint, $method = 'GET', $data = null) {
    $url = SUPABASE_URL . $endpoint;
    $options = [
        'http' => [
            'header' => "apikey: " . SUPABASE_API_KEY . "\r\nContent-Type: application/json\r\n",
            'method' => $method,
            'content' => $data ? json_encode($data) : null,
        ],
    ];
    $context = stream_context_create($options);
    $response = @file_get_contents($url, false, $context);

    // Captura el código de estado HTTP
    $http_response_header = $http_response_header ?? [];
    $status_line = $http_response_header[0] ?? null;
    if (strpos($status_line, '200') === false && strpos($status_line, '201') === false) {
        return [
            'error' => 'Error en la solicitud a Supabase',
            'status' => $status_line,
            'response' => $response ? json_decode($response, true) : null,
        ];
    }

    if ($response === false) {
        return ['error' => 'Error al conectar con Supabase'];
    }

    return json_decode($response, true);
}

?>
