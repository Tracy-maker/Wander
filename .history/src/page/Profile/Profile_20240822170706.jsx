import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const { currentUser, changePassword, changeEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    if (!emailRef.current.value.endsWith(".com")) {
      return setError("Email must end with '.com'");
    }

    const updates = [];
    setError("");
    setLoading(true);

    if (emailRef.current.value !== currentUser.email) {
      updates.push(changeEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      updates.push(changePassword(passwordRef.current.value));
    }

    Promise.all(updates)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 opacity-70 z-0"></div>

      {/* Content Card */}
      <div className="relative z-10 w-full max-w-lg p-8 bg-gray-900 bg-opacity-80 rounded-xl shadow-2xl backdrop-blur-lg">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
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
        <Link
          to="#update-profile"
          className="block w-full py-2 mb-6 bg-gradient-to-r from-pink-500 to-red-500 text-center text-lg font-semibold rounded-lg shadow-md hover:from-red-500 hover:to-pink-500 transition-all duration-300 ease-in-out"
        >
          Update Profile
        </Link>

        {/* Update Profile Section */}
        <div id="update-profile">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Update Profile
          </h2>
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
                ref={emailRef}
                defaultValue={currentUser.email}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password-confirm"
                className="block text-sm font-semibold text-gray-300"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="password-confirm"
                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </div>
            <button
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Update Profile
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link
              to="/"
              className="text-blue-500 hover:underline transition duration-200"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>

      {/* Background Circles */}
      <div className="absolute top-0 left-0 h-64 w-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 h-64 w-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
    </div>
  );
};

export default Profile;
