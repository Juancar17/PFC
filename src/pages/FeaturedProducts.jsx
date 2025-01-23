import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Auriculares Inalámbricos",
      price: "$49.99",
      image:
        "https://cdn.pixabay.com/photo/2019/07/13/10/49/music-4334557_1280.jpg",
    },
    {
      id: 2,
      name: "Reloj Inteligente",
      price: "$199.99",
      image:
        "https://cdn.pixabay.com/photo/2015/06/25/17/22/smart-watch-821559_1280.jpg",
    },
    {
      id: 3,
      name: "Cámara Profesional",
      price: "$899.99",
      image:
        "https://cdn.pixabay.com/photo/2023/04/06/09/39/camera-7903435_1280.jpg",
    },
    {
      id: 4,
      name: "Altavoz Bluetooth",
      price: "$59.99",
      image: "https://source.unsplash.com/400x300/?speaker",
    },
  ];

  return (
    <section className="py-16 bg-custom-radial">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Productos Destacados
        </motion.h2>
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
          {products.map((product) => (
            <motion.div
              key={product.id}
              className=" rounded-xl shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300"
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
                  {product.name}
                </h3>
                <p className="text-white mt-2 text-lg font-medium">
                  {product.price}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  {/* Botón de añadir a favoritos */}
                  <button
                    className="w-10 h-10 flex items-center justify-center  text-[#DEC55D] rounded-full shadow-lg hover:bg-[#DEC55D] hover:text-white transition-all duration-300"
                    aria-label="Añadir a favoritos"
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  {/* Botón de comprar */}
                  <button className="px-6 py-2 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-[#DEC55D] transition-all duration-300">
                    Comprar Ahora
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
