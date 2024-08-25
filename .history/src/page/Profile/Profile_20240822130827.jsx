import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";


const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <>

      <div className="relative min-h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/297927791.sd.mp4?s=5ceeec8c83fcb634312c157cc101b8bd19969b61&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>

        {/* Content Overlay */}
        <div className="min-h-screen flex justify-center items-center h-full z-20">
          <div className="bg-white bg-opacity-80 w-full sm:w-96 p-4 rounded-md shadow-md backdrop-blur-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Profile</h2>
            <div className="flex flex-col justify-center items-center">
              <img
                className="h-32"
                src="https://robohash.org/e7900c613633d3b1707884653f0705dc?set=set4&bgset=&size=400x400"
                alt="avatar"
              />
              <strong>Email:</strong> {currentUser.email}
            </div>
            <Link
              to="/update-profile"
              className="bg-blue-500 text-white p-2 block w-full mt-3 rounded-md text-center"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
