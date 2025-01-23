import {
  faBars,
  faHeart,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50  shadow-md">
      <nav className="flex items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="ml-2 text-3xl font-extrabold text-white font-custom">
              <img src="./public/logo.png" alt="Logo" className="h-24 w-24" />
            </span>
          </Link>
        </div>

        {/* Menú principal 
        
        #c6c96c
        */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          <Link
            to="/"
            className="text-sm font-semibold text-white relative group hover:text-[#c6c96c]"
          >
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c6c96c] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/productos"
            className="text-sm font-semibold text-white relative group hover:text-[#c6c96c]"
          >
            Productos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c6c96c] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/nosotros"
            className="text-sm font-semibold text-white relative group hover:text-[#c6c96c]"
          >
            Nosotros
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c6c96c] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contacto"
            className="text-sm font-semibold text-white relative group hover:text-[#c6c96c]"
          >
            Contacto
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c6c96c] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Botón para menú móvil */}
        <button
          className="md:hidden flex items-center text-white hover:text-[#c6c96c]"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
        </button>

        {/* Enlace al carrito */}
        <div className="hidden md:flex gap-4 items-center">
          <Link
            to="/carrito"
            className="text-sm font-semibold text-white flex items-center space-x-2 hover:text-[#c6c96c]"
          >
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link
            to="/carrito"
            className="text-sm font-semibold text-white flex items-center space-x-2 hover:text-[#c6c96c]"
          >
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link
            to="/carrito"
            className="text-sm font-semibold text-white flex items-center space-x-2 hover:text-[#c6c96c]"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </nav>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-black bg-opacity-80 inset-0 flex flex-col items-center justify-center z-40 space-y-6 animate-slideDown">
          <Link
            to="/"
            className="text-lg font-semibold text-white hover:text-[#c6c96c]"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="/productos"
            className="text-lg font-semibold text-white hover:text-[#c6c96c]"
            onClick={() => setIsMenuOpen(false)}
          >
            Productos
          </Link>
          <Link
            to="/nosotros"
            className="text-lg font-semibold text-white hover:text-[#c6c96c]"
            onClick={() => setIsMenuOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            to="/contacto"
            className="text-lg font-semibold text-white hover:text-[#c6c96c]"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </Link>
          <Link
            to="/carrito"
            className="text-lg font-semibold text-white hover:text-[#c6c96c]"
            onClick={() => setIsMenuOpen(false)}
          >
            Carrito
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
