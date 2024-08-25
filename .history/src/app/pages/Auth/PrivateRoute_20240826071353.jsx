import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const PrivateRoute = () => {
  const { currentUser } = useAuth();

  return currentUser ? (
    <div
      className="w-full h-screen flex"
      style={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
      }}
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:w-96 border border-white border-opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 rounded-3xl pointer-events-none"></div>
          <Outlet />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img
          src="https://r2.community.samsung.com/t5/image/serverpage/image-id/2858216iF966CF430D380489/image-size/large?v=v2&px=999"
          alt=""
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  ) : (
    <Navigate to="/Login" />
  );
};

export default PrivateRoute;
