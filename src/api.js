import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Interceptores de solicitudes
api.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("token");

    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const isExpired = Date.now() >= payload.exp * 1000;

      if (isExpired) {
        const newToken = await refreshToken();
        if (newToken) {
          token = newToken;
        } else {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      }

      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Función para renovar token
const refreshToken = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.post(
      "http://localhost:5000/api/usuarios/refresh",
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const newToken = response.data.token;
    localStorage.setItem("token", newToken);
    return newToken;
  } catch (error) {
    console.error("Error al renovar token:", error.response?.data || error);
    return null;
  }
};

export default api;
