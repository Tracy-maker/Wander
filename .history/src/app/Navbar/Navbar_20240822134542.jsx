import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/Login");
    } catch {
      console.error("Failed to log out");
    }
  }

  return (
    <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="whitespace-nowrap w-full text-3xl font-bold text-[#00df9a]">
        Weather-APP
      </h1>
      {currentUser ? (
        <>
          <ul className="hidden md:flex">
            <Link to="/" className="p-4">
              HOME
            </Link>
            <Link to="/main" className="p-4">
              MAIN
            </Link>
            <Link to="/resources" className="p-4">
              RESOURCES
            </Link>
            <Link to="/profile" className="p-4">
              PROFILE
            </Link>
            <li
              className="p-4 cursor-pointer"
              onClick={handleLogout}
            >
              Log Out
            </li>
          </ul>

          {/* Mobile Menu (Optional) */}
          {/* Include your mobile navigation menu implementation here if needed */}
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
