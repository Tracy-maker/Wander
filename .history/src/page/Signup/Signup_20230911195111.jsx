import React, { useRef } from "react";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-full sm:w-96 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label>Email</label>
            <input
              type="email"
              id="email"
              className="w-full"
              ref={emailRef}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
