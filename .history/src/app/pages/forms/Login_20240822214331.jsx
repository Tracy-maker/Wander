import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";


const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch (error) {
      console.error(error);
      setError("Failed to login: " + error.message);
    }
    setLoading(false);
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #1e3c72, #2a5298)", // Gradient from dark to light blue
      }}
    >
      <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:w-96 border border-white border-opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 rounded-3xl pointer-events-none"></div>
        <h2 className="text-4xl font-bold text-center text-white mb-8 animate-fadeIn">
          Welcome Back
        </h2>
        {error && (
          <div className="text-red-400 text-center font-medium mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="animate-slideUp">
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
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-2 px-4 py-2 bg-white bg-opacity-20 text-white placeholder-gray-200 border border-white border-opacity-30 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300 ease-in-out"
              ref={passwordRef}
              required
            />
          </div>
          <button
            disabled={loading}
            className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 animate-bounce"
            type="submit"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link
            to="/forgetPassword"
            className="text-white hover:text-pink-300 transition duration-300 ease-in-out"
          >
            Forgot your password?
          </Link>
        </div>
        <div className="mt-6 text-center text-white">
          Don’t have an account?&nbsp;
          <Link
            to="/Signup"
            className="font-semibold text-white underline hover:text-pink-300 transition duration-300 ease-in-out"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
