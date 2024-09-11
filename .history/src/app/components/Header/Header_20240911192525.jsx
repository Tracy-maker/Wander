import React from "react";

const Header = ({ onSearch }) => {
  const handleSearch = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg text-white py-4 px-6 flex items-center fixed top-0 w-full z-10">
      <div className="flex flex-row w-full items-center max-w-5xl mx-auto">
        <span className="text-xl font-semibold tracking-wide mr-6">Explore New Places</span>
        <input
          type="text"
          placeholder="Search places..."
          className="w-full max-w-md p-3 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default Header;
