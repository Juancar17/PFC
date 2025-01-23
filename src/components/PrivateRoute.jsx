import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, adminOnly }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }

  const decoded = JSON.parse(atob(token.split(".")[1]));

  if (adminOnly && !decoded.is_admin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
