import React from "react";

const Header = ({ onSearch }) => {
  const handleSearch = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex items-center lg:w-4/5 w-full fixed">
      <div className="flex flex-row w-full items-center">
        <span className="text-sm mr-4">Explore new places</span>
        <input
          type="text"
          placeholder="Search places..."
          className="p-2 rounded text-black flex-grow"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default Header;
