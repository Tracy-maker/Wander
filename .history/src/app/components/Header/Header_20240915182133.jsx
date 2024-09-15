import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = ({ onSearch }) => {
  const handleInputChange = (e) => {
    const query = e.target.value;
    if (onSearch) {
      onSearch(query); // Call the onSearch handler when the input changes
    }
  };

  return (
    <div className="bg-blue-600 text-white p-4 mt-16 flex items-center fixed top-0 left-0 w-full lg:w-1/3 mx-auto shadow-md z-10">
      <div className="flex flex-row w-full items-center">
        <span className="text-sm mr-4">Explore new places</span>
        <div className="relative rounded bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 flex items-center">
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search…"
            className="pl-10 pr-4 py-2 text-black focus:outline-none"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
