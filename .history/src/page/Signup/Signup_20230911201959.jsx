import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    if (!emailRef.current.value.endsWith(".com")) {
      return setError("Email must end with '.com'");
    }

    try {
      setError("");
      setLoading(true);
      history("/");
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      console.error(error);
      setError("Failed to create an account" + error.message);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full sm:w-96 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              ref={emailRef}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              ref={passwordRef}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password-confirm"
              className="block text-sm font-medium"
            >
              Password Confirmation
            </label>
            <input
              type="password"
              id="password-confirm"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              ref={passwordConfirmRef}
              required
            />
          </div>
          <button
            disabled={loading}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-2 text-center">
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-500">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
