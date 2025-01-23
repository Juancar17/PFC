import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  // Llamada a la API para obtener productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); // Actualiza el estado con los datos de la API
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-16 bg-custom-radial">
      <div className="container mx-auto px-6">
        {/* Título de la sección */}
        <motion.h2
          className="text-4xl font-extrabold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Productos Destacados
        </motion.h2>

        {/* Productos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {products.length > 0 ? (
            products.slice(0, 8).map((product) => (
              <motion.div
                key={product.id}
                className="rounded-xl shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {/* Imagen del producto */}
                <div
                  className="h-56 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${product.image})`,
                  }}
                ></div>

                {/* Detalles del producto */}
                <div className="p-6 flex flex-col items-start">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#DEC55D] transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-white mt-2 text-lg font-medium">
                    ${product.price}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    {/* Botón de añadir a favoritos */}
                    <button
                      className="w-10 h-10 flex items-center justify-center text-[#DEC55D] rounded-full shadow-lg hover:bg-[#DEC55D] hover:text-white transition-all duration-300"
                      aria-label="Añadir a favoritos"
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                    {/* Botón de comprar */}
                    <button className="px-6 py-2  text-white text-sm font-semibold rounded-lg shadow-md hover:bg-[#DEC55D] transition-all duration-300">
                      Comprar Ahora
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-white text-center col-span-full">
              Cargando productos...
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
