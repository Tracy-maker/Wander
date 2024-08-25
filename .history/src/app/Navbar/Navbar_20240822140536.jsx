import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for mobile menu
import { FaUserCircle } from "react-icons/fa"; // Icon for profile

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none hover:text-gray-400 transition duration-300"
              >
                <FaUserCircle size={24} />
                <span>Profile</span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 shadow-md rounded-lg">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-200"
                    onClick={() => setDropdownOpen(false)}
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setDropdownOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-700 transition duration-200"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
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
              <div className="border-t border-gray-700 pt-4">
                <Link
                  to="/profile"
                  className="hover:text-gray-400 transition duration-300"
                  onClick={toggleMenu}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="mt-2 text-left hover:text-gray-400 transition duration-300"
                >
                  Log Out
                </button>
              </div>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
