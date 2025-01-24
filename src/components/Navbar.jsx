import {
  faBars,
  faHeart,
  faShoppingCart,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Efecto para verificar si el usuario está logueado
  useEffect(() => {
    const token = localStorage.getItem("token"); // Verifica si hay un token en localStorage
    setIsLoggedIn(!!token); // Si hay token, isLoggedIn será true
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Elimina el token
    setIsLoggedIn(false); // Cambia el estado a no logueado
    navigate("/login"); // Redirige al usuario a la página de login
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50  shadow-md">
      <nav className="flex items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center animate-slideDown">
          <Link to="/" className="flex items-center">
            <span className="ml-2 text-3xl font-extrabold text-white font-custom">
              <img src={logo} alt="Logo" className="h-24 w-24" />
            </span>
          </Link>
        </div>

        {/* Menú principal */}
        <div className="hidden md:flex flex-grow justify-center space-x-8">
          <Link
            to="/"
            className="text-sm font-semibold text-white relative group hover:text-[#DEC55D]"
          >
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DEC55D] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/productos"
            className="text-sm font-semibold text-white relative group hover:text-[#DEC55D]"
          >
            Productos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DEC55D] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/nosotros"
            className="text-sm font-semibold text-white relative group hover:text-[#DEC55D]"
          >
            Nosotros
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DEC55D] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/contacto"
            className="text-sm font-semibold text-white relative group hover:text-[#DEC55D]"
          >
            Contacto
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#DEC55D] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Botón para menú móvil */}
        <button
          className="md:hidden flex items-center text-white hover:text-[#DEC55D]"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
        </button>

        {/* Enlaces a login/carrito */}
        <div className="hidden md:flex gap-4 items-center">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-sm font-semibold text-white flex items-center space-x-2 hover:text-[#DEC55D]"
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
          ) : (
            <Link
              to="/login"
              className="text-sm font-semibold text-white flex items-center space-x-2 hover:text-[#DEC55D]"
            >
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}
          <Link
            to="/favoritos"
            className="text-sm font-semibold text-white flex items-center space-x-2 hover:text-[#DEC55D]"
          >
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          <Link
            to="/carrito"
            className="text-sm font-semibold text-white flex items-center space-x-2 hover:text-[#DEC55D]"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>
      </nav>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end animate-slideInRight">
          {/* Fondo semitransparente */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMenuOpen(false)} // Cerrar al hacer clic fuera del menú
          ></div>

          {/* Contenido del menú móvil */}
          <div className="bg-black bg-opacity-50 w-64 h-full flex flex-col items-center py-8 z-40 transform transition-transform duration-300 animate-slideInRight">
            <Link
              to="/"
              className="text-lg font-semibold text-white hover:text-[#DEC55D] py-3 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/productos"
              className="text-lg font-semibold text-white hover:text-[#DEC55D] py-3 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              to="/nosotros"
              className="text-lg font-semibold text-white hover:text-[#DEC55D] py-3 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              to="/contacto"
              className="text-lg font-semibold text-white hover:text-[#DEC55D] py-3 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link
              to="/carrito"
              className="text-lg font-semibold text-white hover:text-[#DEC55D] py-3 w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Carrito
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
