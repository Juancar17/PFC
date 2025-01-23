import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección de contacto */}
        <div>
          <h2 className="text-lg font-bold text-[#4d79ff] mb-4">Contacto</h2>
          <ul className="space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:info@kafeconk.com"
                className="text-gray-400 hover:text-[#4d79ff]"
              >
                info@kafeconk.com
              </a>
            </li>
            <li>
              Teléfono:{" "}
              <a
                href="tel:+34912345678"
                className="text-gray-400 hover:text-[#4d79ff]"
              >
                +34 912 345 678
              </a>
            </li>
            <li>Dirección: </li>
            <a
              href="https://maps.app.goo.gl/WrrwxHgcRvktTAmP8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-300 hover:text-[#4d79ff] transition"
            >
              C. de Narváez, 43-37, Madrid, 28009, España
            </a>
          </ul>
        </div>

        {/* Sección de redes sociales */}
        <div>
          <h2 className="text-lg font-bold text-[#4d79ff] mb-4">Síguenos</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#4d79ff]"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#4d79ff]"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#4d79ff]"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        {/* Sección de horario */}
        <div>
          <h2 className="text-lg font-bold text-[#4d79ff] mb-4">Horario</h2>
          <ul className="space-y-2">
            <li>Lunes - Viernes: 8:00 AM - 8:00 PM</li>
            <li>Sábado: 9:00 AM - 9:00 PM</li>
            <li>Domingo: Cerrado</li>
          </ul>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-500">
          &copy; 2025 Kafé con K. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
