import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div className="relative min-h-screen bg-gray-900">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source
          src="https://player.vimeo.com/external/297927791.sd.mp4?s=5ceeec8c83fcb634312c157cc101b8bd19969b61&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>

      {/* Content Overlay */}
      <div className="min-h-screen flex justify-center items-center z-20 relative">
        <div className="bg-white bg-opacity-90 w-full max-w-md p-8 rounded-lg shadow-lg backdrop-blur-md">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
            Profile
          </h2>
          <div className="flex flex-col items-center mb-6">
            <img
              className="h-32 w-32 rounded-full border-4 border-gray-300 mb-4"
              src="https://robohash.org/e7900c613633d3b1707884653f0705dc?set=set4&bgset=&size=400x400"
              alt="avatar"
            />
            <p className="text-lg font-semibold text-gray-600">Email:</p>
            <p className="text-lg text-gray-800">{currentUser.email}</p>
          </div>
          <Link
            to="/update-profile"
            className="w-full bg-blue-600 text-white py-2 rounded-md text-center font-semibold hover:bg-blue-700 transition duration-200"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
