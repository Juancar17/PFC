import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil"; // Importar la página de Perfil
import ProductList from "./pages/ProductList";
import Registro from "./pages/Registro";

const PrivateRoute = ({ children, adminOnly }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decodificar el token JWT

  if (adminOnly && !decodedToken.is_admin) {
    return <Navigate to="/" />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/nosotros" element={<AboutUs />} />
      <Route path="/productos" element={<ProductList />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/add-product" element={<AddProduct />} />
      {/* Ruta protegida para el perfil */}
      <Route
        path="/perfil"
        element={
          <PrivateRoute>
            <Perfil />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
