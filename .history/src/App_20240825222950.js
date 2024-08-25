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
import Maps from "./app/pages/Maps";
import Profile from "./app/pages/Profile";
import Navbar from "./app/components/Navbar/Navbar";


function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="w-full flex flex-col">
          <Routes>
            {/* Public Routes */}
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
         

            {/* Protected Routes */}
            <Route
              path="/"
              element={<PrivateRoute />}
            >
              {/* Navbar will be rendered for all these protected routes */}
              <Route 
                path="/" 
                element={
                  <>
                    <Navbar />
                    <Home />
                  </>
                } 
              />
              <Route 
                path="/weather" 
                element={
                  <>
                    <Navbar />
                    <Weather />
                  </>
                } 
              />
              <Route 
                path="/maps" 
                element={
                  <>
                    <Navbar />
                    <Maps />
                  </>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <>
                    <Navbar />
                    <Profile />
                  </>
                } 
              />
              <Route 
                path="/update-profile" 
                element={
                  <>
                    <Navbar />
                    <UpdateProfile />
                  </>
                } 
              />
            </Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
