import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

function UpdateProfile({ setEditMode }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, changePassword, changeEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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
        setEditMode(false);
      });
  }

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      <div className="bg-white h-[550px] w-[700px] p-6 rounded-2xl shadow-lg relative mt-12 mb-8">
        <h2 className="text-3xl font-extrabold text-center mb-2 text-gray-800">
          Update Profile
        </h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 shadow-md">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
              ref={emailRef}
              defaultValue={currentUser.email}
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
              ref={passwordRef}
              placeholder="Leave blank to keep the same"
            />
          </div>
          <div className="mb-8">
            <label
              htmlFor="password-confirm"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password-confirm"
              className="w-full mt-2 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
              ref={passwordConfirmRef}
              placeholder="Leave blank to keep the same"
            />
          </div>
          <button
            disabled={loading}
            className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
            type="submit"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
        <div className="mt-2 text-center">
          <button
            onClick={() => setEditMode(false)}
            className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-200"
          >
            Cancel
          </button>
        </div>
        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-400 opacity-30 rounded-full -z-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-400 opacity-30 rounded-full -z-10"></div>
      </div>
    </div>
  );
}

export default UpdateProfile;
