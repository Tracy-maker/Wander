import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      {/* New Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1526406915893-7f3b5ddc8d93?fit=crop&w=1950&q=80')`,
          filter: 'brightness(0.7)',
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10 bg-white bg-opacity-95 w-full max-w-lg p-8 rounded-lg shadow-xl backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Profile
        </h2>
        <div className="flex flex-col items-center mb-6">
          <img
            className="h-32 w-32 rounded-full border-4 border-white shadow-md mb-4"
            src="https://robohash.org/e7900c613633d3b1707884653f0705dc?set=set4&bgset=&size=400x400"
            alt="avatar"
          />
          <p className="text-lg font-medium text-gray-600">Email:</p>
          <p className="text-lg text-gray-900">{currentUser.email}</p>
        </div>
        <Link
          to="/update-profile"
          className="w-full bg-blue-600 text-white py-2 rounded-md text-center font-semibold hover:bg-blue-700 transition duration-200"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;
