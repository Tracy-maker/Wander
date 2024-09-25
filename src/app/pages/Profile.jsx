import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";

const Profile = () => {
  const { currentUser } = useAuth();
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 opacity-70 z-0"></div>

      {/* Conditional rendering */}
      {isEditMode ? (
        <UpdateProfile />
      ) : (
        <div
          className={`relative z-10 w-full max-w-md p-8 bg-gray-900 bg-opacity-80 rounded-xl shadow-2xl backdrop-blur-lg transform transition-transform duration-500 ease-in-out ${
            isEditMode ? "translate-x-[-20%]" : "translate-x-[0]"
          }`}
        >
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <img
                className="h-32 w-32 rounded-full border-4 border-teal-500 mb-4 shadow-lg"
                src="https://robohash.org/e7900c613633d3b1707884653f0705dc?set=set4&bgset=&size=400x400"
                alt="avatar"
              />
              <div className="absolute bottom-0 right-0 h-8 w-8 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <p className="text-lg font-semibold">Email:</p>
            <p className="text-2xl font-bold">{currentUser.email}</p>
          </div>
          <button
            onClick={toggleEditMode}
            className="block w-full py-2 mt-4 bg-gradient-to-r from-pink-500 to-red-500 text-center text-lg font-semibold rounded-lg shadow-md hover:from-red-500 hover:to-pink-500 transition-all duration-300 ease-in-out"
          >
            Update Profile
          </button>
        </div>
      )}

      {/* Background Circles */}
      <div className="absolute top-0 left-0 h-64 w-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
    </div>
  );
};

export default Profile;
