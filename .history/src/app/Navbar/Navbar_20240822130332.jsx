import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/Login");
    } catch {
      setError("Failed to log out");
    }
  }

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="whitespace-nowrap w-full text-3xl font-bold text-[#00df9a]">
        Weather-APP
      </h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      
      {/* Navbar for larger screens */}
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
          className="whitespace-nowrap p-4 cursor-pointer focus:outline-none"
          onClick={handleLogout}
        >
          Log Out
        </li>
      </ul>

      {/* Hamburger Icon for mobile */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer" aria-label="Toggle Menu">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Weather-APP
        </h1>
        <ul className="uppercase p-4 flex flex-col">
          <Link to="/" className="p-4 border-b border-gray-600" onClick={handleNav}>
            HOME
          </Link>
          <Link to="/main" className="p-4 border-b border-gray-600" onClick={handleNav}>
            MAIN
          </Link>
          <Link to="/resources" className="p-4 border-b border-gray-600" onClick={handleNav}>
            RESOURCES
          </Link>
          <Link to="/profile" className="p-4 border-b border-gray-600" onClick={handleNav}>
            PROFILE
          </Link>
          <li
            className="p-4 hover:underline focus:outline-none cursor-pointer"
            onClick={() => {
              handleLogout();
              handleNav(); // Close the mobile menu after logging out
            }}
          >
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
