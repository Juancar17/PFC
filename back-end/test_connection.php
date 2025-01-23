<?php
require_once('db.php');

function obtenerUsuarios($conexion) {
    $consulta = "SELECT * FROM usuarios";
    try {
        $resultado = mysqli_query($conexion, $consulta);
        if (!$resultado) {
            throw new Exception("Error en la consulta: " . mysqli_error($conexion));
        }
        return $resultado;
    } catch (Exception $e) {
        error_log($e->getMessage());
        return false;
    }
}

if ($conexion = mysqli_connect($host, $user, $password, $dbname)) {
    mysqli_set_charset($conexion, "utf8");

    $datos = obtenerUsuarios($conexion);
    if ($datos && mysqli_num_rows($datos) > 0) {
        echo "<ul>";
        while ($fila = mysqli_fetch_array($datos)) {
            echo "<li>";
            echo "<a href='mostrar_contacto.php?id=" . htmlspecialchars($fila['id']) . "'>";
            echo htmlspecialchars($fila['nombre']);;
            echo "</a>";
            echo "</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>No hay contactos disponibles.</p>";
    }

    mysqli_close($conexion);
} else {
    error_log("Error al conectar a la base de datos: " . mysqli_connect_error());
    echo "Error al conectar a la base de datos.";
}
