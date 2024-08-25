import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"; // Import the Footer component

const PrivateRoute = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/Login" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer /> {/* Include the Footer here */}
    </div>
  );
};

export default PrivateRoute;
