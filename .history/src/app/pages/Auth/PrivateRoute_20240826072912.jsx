import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const PrivateRoute = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/Login" />;
  }

  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
