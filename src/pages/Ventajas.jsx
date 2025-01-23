import { motion } from "framer-motion";

const Ventajas = () => {
  const features = [
    {
      id: 1,
      icon: "🚚",
      title: "Envío Rápido",
      description:
        "Recibe tus productos en tiempo récord con nuestro servicio de envío rápido.",
    },
    {
      id: 2,
      icon: "💳",
      title: "Pagos Seguros",
      description:
        "Todas tus transacciones están protegidas con tecnología de última generación.",
    },
    {
      id: 3,
      icon: "🌟",
      title: "Calidad Garantizada",
      description:
        "Nuestros productos son seleccionados con los más altos estándares de calidad.",
    },
  ];

  return (
    <section className="py-16 bg-custom-radial text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¿Por qué elegirnos?
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="flex flex-col items-center  text-white p-6   hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <motion.span className="text-6xl text-white mb-4 transform transition-transform duration-300 group-hover:rotate-12">
                {feature.icon}
              </motion.span>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm text-white">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Ventajas;
