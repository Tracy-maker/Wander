import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./page/Signup/SignUp";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Login from "./page/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Home from "./page/Home/Home";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import { AuthProvider } from "./contexts/AuthContext";
import Main from "./page/Main/Main";
import Resources from "./page/Resources/Resources";
import Profile from "./page/Profile/Profile";
import Navbar from "./app/Navbar/Navbar";

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
            <Route path="/" element={<PrivateRoute />}>
              {/* Shared Navbar for all protected routes */}
              <Route
                element={
                  <>
                    <Navbar />
                    <div className="flex-grow">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/main" element={<Main />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/update-profile" element={<UpdateProfile />} />
                      </Routes>
                    </div>
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
