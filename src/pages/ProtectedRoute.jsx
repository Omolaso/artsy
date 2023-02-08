import React from "react";
import { Navigate } from "react-router-dom";
import { url } from "../URLs";
const ProtectedRoute = ({ children, cartItems }) => {
  if (cartItems.length < 1) {
    return <Navigate to={url.market} />;
  }
  return children;
};

export default ProtectedRoute;
