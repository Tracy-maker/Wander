import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

function UpdateProfile() {
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
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
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
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ref={emailRef}
              defaultValue={currentUser.email}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ref={passwordRef}
              placeholder="Leave blank to keep the same"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password-confirm"
              className="block text-sm font-semibold text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="password-confirm"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
  );
}

export default UpdateProfile;
