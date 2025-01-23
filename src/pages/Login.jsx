import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "http://localhost/Tienda-2/back-end/api/users/login.php",
        { email, password }
      );
      setSuccess("Inicio de sesión exitoso");
      localStorage.setItem("token", response.data.token);
      setTimeout(() => {
        navigate("/");
        window.location.reload(); // Recargar la página
      }, 500);
    } catch (err) {
      setError(err.response?.data?.error || "Error al iniciar sesión");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-[#4d79ff]">
      <motion.div
        className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Panel izquierdo: Promocional */}
        <motion.div
          className="md:w-1/2 bg-[#1a1a1a] p-10 flex flex-col justify-center text-white"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Bienvenido a Mi Tienda</h2>
          <p className="mb-6">
            Disfruta de las mejores ofertas y productos exclusivos al iniciar
            sesión. Únete a nuestra comunidad y accede a beneficios especiales.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Descuentos exclusivos para miembros.</li>
            <li>Acceso rápido y seguro a tus pedidos.</li>
            <li>Soporte al cliente 24/7.</li>
          </ul>
        </motion.div>

        {/* Panel derecho: Formulario */}
        <motion.div
          className="md:w-1/2 p-8 bg-gradient-to-br from-black to-[#4d79ff]"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-6">
            Iniciar Sesión
          </h3>
          {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
          {success && (
            <p className="text-green-400 mb-4 text-center">{success}</p>
          )}
          <form onSubmit={handleLogin} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-medium text-white mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                placeholder="correo@ejemplo.com"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-white mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                placeholder="••••••••"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 hover:shadow-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Iniciar Sesión
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-white">
              ¿No tienes una cuenta?{" "}
              <Link to="/registro" className="text-blue-300 hover:underline">
                Regístrate aquí
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
