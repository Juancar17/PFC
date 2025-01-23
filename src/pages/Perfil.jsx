import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Perfil = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
    password: "", // Añadimos el campo de contraseña
  });
  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Obtener datos del usuario
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/usuarios/perfil",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUserData({
          nombre: response.data.nombre || "",
          email: response.data.email || "",
          password: "", // La contraseña se deja vacía por seguridad
        });
      } catch (err) {
        console.error("Error al obtener los datos del usuario:", err);
      }
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token"); // Obtener el token del almacenamiento local
      await axios.put("http://localhost:5000/api/usuarios/perfil", userData, {
        headers: { Authorization: `Bearer ${token}` }, // Incluir el token en los headers
      });
      setMessage("Datos actualizados correctamente");
      setEditMode(false);
    } catch (err) {
      console.error("Error al actualizar los datos:", err);
      setMessage("Error al actualizar los datos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black to-[#4d79ff] p-8">
      <motion.div
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Mi Perfil
        </h2>
        {message && (
          <p
            className={`mb-4 text-center ${
              message.includes("Error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}
        <div className="space-y-4">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={userData.nombre || ""}
              onChange={handleChange}
              disabled={!editMode}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                editMode ? "bg-white" : "bg-gray-100"
              }`}
            />
          </div>

          {/* Correo Electrónico */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              value={userData.email || ""}
              onChange={handleChange}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100"
            />
          </div>

          {/* Contraseña */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={userData.password || ""}
              onChange={handleChange}
              disabled={!editMode}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                editMode ? "bg-white" : "bg-gray-100"
              }`}
              placeholder={editMode ? "Nueva contraseña" : "••••••••"}
            />
          </div>
        </div>

        {/* Botones */}
        <div className="mt-6 flex justify-between">
          {editMode ? (
            <>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Guardar
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Cancelar
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Editar
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Perfil;
