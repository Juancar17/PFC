import React from "react";
import FeaturedProducts from "./FeaturedProducts";
import HeroCarousel from "./HeroCarousel";
import Ventajas from "./Ventajas";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden animate-slideIn">
        <HeroCarousel />
      </div>
      {/* Productos Destacados */}
      <FeaturedProducts />

      {/* Ventajas */}
      <Ventajas />
    </>
  );
};

export default Home;
