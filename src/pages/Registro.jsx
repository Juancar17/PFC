import axios from "axios";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
  });
  const [modal, setModal] = useState({
    visible: false,
    message: "",
    success: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setModal({ visible: false, message: "", success: false });

    try {
      // Cambia la URL al endpoint de registro
      const response = await axios.post(
        "http://localhost/Tienda-2/back-end/api/users/register.php",
        formData
      );

      // Mostrar modal de éxito
      setModal({
        visible: true,
        message: "¡Registro exitoso! Bienvenido a Mi Tienda.",
        success: true,
      });

      // Redirigir al login después de un tiempo
      setTimeout(() => {
        navigate("/login");
      }, 1500); // Retraso opcional para que el usuario vea el mensaje
    } catch (err) {
      // Manejar errores del servidor
      setModal({
        visible: true,
        message: err.response?.data?.error || "Error al registrar usuario",
        success: false,
      });
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
          <h2 className="text-4xl font-bold mb-4">Únete a Mi Tienda</h2>
          <p className="mb-6">
            Al registrarte, obtendrás acceso a{" "}
            <span className="font-bold">ofertas exclusivas</span> y promociones.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Descuentos en tus compras.</li>
            <li>Acceso prioritario a lanzamientos.</li>
            <li>Gestión de tus pedidos de forma rápida.</li>
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
            Crea tu cuenta
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-medium text-white mb-2">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm"
                placeholder="Tu nombre"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-white mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm"
                placeholder="correo@ejemplo.com"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-sm font-medium text-white mb-2">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm"
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
              Registrarse
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-white">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="text-blue-300 hover:underline">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      {modal.visible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            className="p-6 rounded-lg shadow-xl bg-white w-96 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h3
              className={`text-2xl font-bold mb-4 ${
                modal.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {modal.success ? "¡Éxito!" : "Error"}
            </h3>
            <p className="text-gray-700">{modal.message}</p>
            <button
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => setModal({ visible: false })}
            >
              Cerrar
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Registro;
