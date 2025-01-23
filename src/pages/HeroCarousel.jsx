import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const HeroCarousel = () => {
  const slides = [
    {
      image:
        "https://cdn.pixabay.com/photo/2018/01/02/23/29/woman-3057294_1280.jpg",
      title: "¡Bienvenido a Mi Tienda!",
      subtitle: "Encuentra lo que necesitas al mejor precio.",
      button: "Ver Productos",
      link: "/productos",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/10/04/14/15/man-8293794_1280.jpg",
      title: "Las mejores ofertas te esperan",
      subtitle: "Tecnología, moda y más en un solo lugar.",
      button: "Explorar",
      link: "/productos",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg",
      title: "Calidad garantizada en cada compra",
      subtitle: "Compra con confianza y seguridad.",
      button: "Descubre más",
      link: "/productos",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Cambiar de slide automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido del carrusel */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        {/* Logo adicional (verifica si está definido) */}
        {typeof logo !== "undefined" && (
          <div className=" m-8 flex justify-center">
            <img
              src={logo}
              alt="Logo"
              className="h-50 w-50 rounded-full  hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg mb-6 drop-shadow-sm">
          {slides[currentSlide].subtitle}
        </p>
        <a
          href={slides[currentSlide].link}
          className="px-6 py-3 bg-[#c6c96c] text-lg font-semibold rounded-full border-2 border-[#c6c96c] hover:bg-transparent hover:text-[#c6c96c] transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          {slides[currentSlide].button}
        </a>
      </div>

      {/* Controles del carrusel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide
                ? "bg-[#c6c96c]"
                : "bg-gray-400 hover:bg-gray-300"
            } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
