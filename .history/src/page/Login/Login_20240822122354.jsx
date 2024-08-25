import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="bg-white shadow-lg rounded-lg p-8 sm:w-96">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Welcome Back!</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ref={emailRef}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              ref={passwordRef}
              required
            />
          </div>
          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/forgetPassword" className="text-blue-600 hover:underline">
            Forgot your password?
          </Link>
        </div>
      </div>
      <div className="mt-4 text-center text-white">
        Don't have an account?&nbsp;
        <Link to="/Signup" className="font-semibold text-white underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
