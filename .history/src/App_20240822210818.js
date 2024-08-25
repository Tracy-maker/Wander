import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./app/pages/forms/SignUp";
import ForgetPassword from "./app/pages/forms/ForgetPassword";
import Login from "./app/pages/forms/Login";
import PrivateRoute from "./app/components/PrivateRoute/PrivateRoute";
import Home from "./pages/Home";
import UpdateProfile from "./app/components/UpdateProfile/UpdateProfile";
import { AuthProvider } from "./contexts/AuthContext";
import Main from "./app/pages/Main";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import Navbar from "./app/components/Navbar/Navbar";


function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
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
                path="/main" 
                element={
                  <>
                    <Navbar />
                    <Main />
                  </>
                } 
              />
              <Route 
                path="/resources" 
                element={
                  <>
                    <Navbar />
                    <Resources />
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
