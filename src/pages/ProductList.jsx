import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]); // Lista de productos
  const [error, setError] = useState(""); // Manejo de errores
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Comienza la carga
      setError(""); // Resetea el error al iniciar la solicitud

      try {
        const response = await axios.get(
          "http://localhost/Tienda-2/back-end/api/products/get_products.php"
        );
        if (response.status === 200 && Array.isArray(response.data)) {
          setProducts(response.data); // Almacena los productos si la respuesta es válida
        } else {
          throw new Error("Respuesta inesperada del servidor."); // Manejo de respuestas inesperadas
        }
      } catch (error) {
        console.error(
          "Error al obtener productos:",
          error.response?.data || error.message
        );
        setError("No se pudieron cargar los productos.");
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-radial p-8">
      <motion.h2
        className="text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Lista de Productos
      </motion.h2>

      {/* Muestra el estado de carga */}
      {loading && (
        <motion.p
          className="text-blue-300 mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Cargando productos...
        </motion.p>
      )}

      {/* Muestra los errores si los hay */}
      {error && (
        <motion.p
          className="text-red-400 mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.p>
      )}

      {/* Lista de productos */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {!loading && products.length > 0
          ? products.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {product.imagen && (
                  <img
                    src={product.imagen}
                    alt={product.nombre}
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-4 flex flex-col space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.nombre}
                  </h3>
                  <p className="text-gray-600">{product.descripcion}</p>
                  <p className="text-gray-800 font-bold">
                    Precio: ${product.precio}
                  </p>
                  <p className="text-gray-600">
                    Stock: {product.stock ?? "N/A"}
                  </p>
                  <p className="text-gray-600">
                    Categoría: {product.categoria}
                  </p>
                </div>
              </motion.div>
            ))
          : !loading &&
            !error && (
              <motion.p
                className="text-gray-300 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                No hay productos disponibles.
              </motion.p>
            )}
      </motion.div>
    </div>
  );
};

export default ProductList;
