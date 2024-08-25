import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for mobile menu

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleLogout() {
    try {
      await logout();
      navigate("/Login");
    } catch {
      console.error("Failed to log out");
    }
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50 flex justify-between items-center h-16 px-6 text-white">
      <h1 className="text-2xl font-semibold tracking-wider text-white">
        WanderWhiz
      </h1>
      {currentUser ? (
        <>
          <ul className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="hover:text-gray-400 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/weather"
              className="hover:text-gray-400 transition duration-300"
            >
              Weather
            </Link>
            <Link
              to="/time"
              className="hover:text-gray-400 transition duration-300"
            >
              International Time
            </Link>
            <Link
              to="/maps"
              className="hover:text-gray-400 transition duration-300"
            >
              Maps
            </Link>
            <Link
              to="/profile"
              className="hover:text-gray-400 transition duration-300"
            >
              Profile
            </Link>
            <li
              className="cursor-pointer hover:text-gray-400 transition duration-300"
              onClick={handleLogout}
            >
              Log Out
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {menuOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-16 left-0 w-full bg-gray-900 text-white shadow-lg flex flex-col space-y-4 py-4 px-6 md:hidden">
              <Link
                to="/"
                className="hover:text-gray-400 transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/weather"
                className="hover:text-gray-400 transition duration-300"
                onClick={toggleMenu}
              >
                Weather
              </Link>
              <Link
                to="/time"
                className="hover:text-gray-400 transition duration-300"
                onClick={toggleMenu}
              >
                International Time
              </Link>
              <Link
                to="/maps"
                className="hover:text-gray-400 transition duration-300"
                onClick={toggleMenu}
              >
                Maps
              </Link>
              <Link
                to="/profile"
                className="hover:text-gray-400 transition duration-300"
                onClick={toggleMenu}
              >
                Profile
              </Link>
              <li
                className="cursor-pointer hover:text-gray-400 transition duration-300"
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
              >
                Log Out
              </li>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
