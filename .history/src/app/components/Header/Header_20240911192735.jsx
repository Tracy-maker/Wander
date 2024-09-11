import React from "react";

const Header = ({ onSearch }) => {
  const handleSearch = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full lg:w-2/5 shadow-lg z-10">
      <div className="flex flex-row w-full items-center">
        <span className="text-sm mr-4">Explore new places</span>
        <input
          type="text"
          placeholder="Search places..."
          className="p-2 rounded text-black flex-grow focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default Header;
