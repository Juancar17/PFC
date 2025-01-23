import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    categoria: "",
    imagen: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const token = localStorage.getItem("token"); // Asegúrate de estar autenticado como administrador
      const response = await axios.post(
        "http://localhost/Tienda-2/back-end/api/products/add_product.php",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Enviar el token para autenticación
          },
        }
      );

      setMessage(response.data.message || "Producto creado exitosamente.");
    } catch (error) {
      setMessage(error.response?.data?.error || "Error al crear el producto.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black to-[#4d79ff] p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center">Agregar Producto</h2>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre del producto"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="number"
          name="precio"
          value={formData.precio}
          onChange={handleChange}
          placeholder="Precio"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="text"
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          placeholder="Categoría"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="text"
          name="imagen"
          value={formData.imagen}
          onChange={handleChange}
          placeholder="URL de la imagen"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Agregar Producto
        </button>
        {message && <p className="text-center mt-4">{message}</p>}
      </form>
    </div>
  );
};

export default AddProduct;
