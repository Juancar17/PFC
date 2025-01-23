import React from "react";
import AppRoutes from "./AppRoutes.jsx"; // Importa las rutas
import Navbar from "./components/Navbar.jsx"; // Importa el componente Navbar
function App() {
  return (
    <>
      <Navbar /> {/* Renderiza el componente Navbar */}
      <AppRoutes /> {/* Renderiza las rutas */}
    </>
  );
}

export default App;
