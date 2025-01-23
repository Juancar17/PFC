import axios from "axios";

export const refreshAuthToken = async () => {
  // Obtener el token actual del almacenamiento local
  const token = localStorage.getItem("token");

  // Si no hay token, devolver null
  if (!token) return null;

  try {
    // Hacer la solicitud al endpoint de refresco del token
    const response = await axios.post(
      "http://localhost/Tienda-2/back-end/api/users/refresh_token.php",
      null, // No es necesario enviar datos en el cuerpo
      {
        headers: {
          Authorization: `Bearer ${token}`, // Enviar el token en el encabezado
        },
      }
    );

    // Obtener el nuevo token de la respuesta
    const newToken = response.data.token;

    // Actualizar el token en el almacenamiento local
    localStorage.setItem("token", newToken);

    // Devolver el nuevo token
    return newToken;
  } catch (error) {
    // Manejo de errores
    console.error("Error al renovar el token:", error.response?.data || error);
    return null;
  }
};
