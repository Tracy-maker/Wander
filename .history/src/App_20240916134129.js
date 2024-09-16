import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./app/pages/Auth/forms/SignUp";
import ForgetPassword from "./app/pages/Auth/forms/ForgetPassword";
import Login from "./app/pages/Auth/forms/Login";
import PrivateRoute from "./app/pages/Auth/PrivateRoute";
import Home from "./app/pages/Home";
import UpdateProfile from "./app/components/UpdateProfile/UpdateProfile";
import { AuthProvider } from "./contexts/AuthContext";
import Weather from "./app/pages/Weather";

import Profile from "./app/pages/Profile";
import Maps from "./app/pages/Maps";
import Time from "./app/pages/TimeDisplay";
import TimeDisplay from "./app/pages/TimeDisplay";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/time" element={<TimeDisplay />} />
            <Route path="/maps" element={<Maps />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/update-profile" element={<UpdateProfile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
