import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import AuthLayout from "../AuthLayout";


function ForgetPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions.");
      
      setTimeout(() => {
        navigate("/Login");
      }, 5000); 
    } catch (error) {
      console.error(error);
      setError("Failed to reset password.");
    }
    setLoading(false);
  }

  return (
    <AuthLayout>
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        Password Reset
      </h2>
      {error && (
        <div className="text-red-400 text-center font-medium mb-4">
          {error}
        </div>
      )}
      {message && (
        <div className="text-green-400 text-center font-medium mb-4">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-2 px-4 py-2 bg-white bg-opacity-20 text-white placeholder-gray-200 border border-white border-opacity-30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 ease-in-out"
            ref={emailRef}
            required
          />
        </div>
        <button
          disabled={loading}
          className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition duration-300 ease-in-out transform hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          type="submit"
        >
          Reset Password
        </button>
      </form>
      <div className="mt-6 text-center">
        <Link
          to="/Login"
          className="w-full inline-block bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out transform hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Log in
        </Link>
      </div>
      <div className="mt-6 text-center text-white">
        Need an account?&nbsp;
        <Link
          to="/Signup"
          className="font-semibold text-white underline hover:text-pink-300 transition duration-300 ease-in-out"
        >
          Sign Up
        </Link>
      </div>
    </AuthLayout>
  );
}

export default ForgetPassword;
