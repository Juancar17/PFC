import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      {/* Contenedor principal */}
      <div className="container mt-10 mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Sección de texto y datos */}
        <div className="space-y-8">
          <h1 className="text-6xl font-extrabold mb-4 text-[#4d79ff]">
            CONTÁCTANOS
          </h1>
          <p className="text-lg text-gray-400">
            En <span className="text-[#4d79ff]">Kafé con K</span>, estamos aquí
            para ayudarte. Si tienes alguna pregunta, no dudes en ponerte en
            contacto con nosotros.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <i className="fas fa-phone-alt text-2xl"></i>
              <a
                href="tel:+34912345678"
                className="text-lg text-gray-300 hover:text-[#4d79ff] transition"
              >
                +34 912 345 678
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-envelope text-2xl"></i>
              <a
                href="mailto:info@kafeconk.com"
                className="text-lg text-gray-300 hover:text-[#4d79ff] transition"
              >
                info@kafeconk.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-map-marker-alt text-2xl"></i>
              <a
                href="https://maps.app.goo.gl/WrrwxHgcRvktTAmP8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-300 hover:text-[#4d79ff] transition"
              >
                C. de Narváez, 43-37, Madrid, 28009, España
              </a>
            </div>
          </div>
        </div>

        {/* Sección de imágenes con móviles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Móvil izquierdo */}
          <div className="relative bg-black border-4 border-gray-800 rounded-xl shadow-lg overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2020/01/31/12/30/coffe-4807889_640.jpg"
              alt="Kafé con K interior"
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Móvil derecho con Google Maps */}
          <div className="relative bg-black border-4 border-gray-800 rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1518.7499928367456!2d-3.6785506492682214!3d40.41992641645256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228a43e55dd3d%3A0x77f763f3fb9d213!2sC.%20de%20Narv%C3%A1ez%2C%2043-37%2C%20Retiro%2C%2028009%20Madrid!5e0!3m2!1ses!2ses!4v1735870329085!5m2!1ses!2ses"
              allowFullScreen=""
              loading="lazy"
              title="Kafé con K Location"
              className="w-full h-96"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Formulario de contacto */}
      <div className="container mx-auto mt-16">
        <h2 className="text-4xl font-extrabold mb-6 text-[#4d79ff]">
          Envíanos un mensaje
        </h2>
        <p className="text-lg mb-8 text-gray-400">
          ¿Tienes alguna pregunta o sugerencia? ¡Nos encantaría saber de ti!
          Rellena el formulario a continuación y nos pondremos en contacto
          contigo lo antes posible.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-[#4d79ff]"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-[#4d79ff]"
                placeholder="Tu email"
              />
            </div>
          </div>
          <div className="space-y-6">
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-[#4d79ff]"
              placeholder="Tu mensaje"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#4d79ff] hover:bg-[#3b4d7f] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
