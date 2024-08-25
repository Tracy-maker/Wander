import React from "react";

function SignUp() {
  return (
    <div>
      <div>
        <h2>Sign Up</h2>
        <form>
          <div>
            <label>Email</label>
            <input type="email" id="email" className="w-full" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
