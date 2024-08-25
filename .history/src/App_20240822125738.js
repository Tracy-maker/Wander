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
import backgroundImage from "./assets/background.jpg";  // Import your background image

function App() {
  return (
    <Router>
      <div
        className="min-h-screen w-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Ensures the background is fixed
          height: "100vh", // Ensures the div takes the full height of the viewport
          overflow: "hidden", // Prevents scrolling
        }}
      >
        <AuthProvider>
          <Routes>
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/main" element={<Main />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/update-profile" element={<UpdateProfile />} />
            </Route>
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
