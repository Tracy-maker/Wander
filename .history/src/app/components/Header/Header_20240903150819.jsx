import React from 'react';

const Header = ({ onSearch }) => {
  const handleSearch = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <header className="bg-blue-600 mt-16 text-white p-4 flex items-center w-1/4 fixed">
      <div className="flex flex-col w-full">
        <input
          type="text"
          placeholder="Search places..."
          className="p-2 rounded text-black mb-2"
          onChange={handleSearch}
        />
        <span className="text-sm">Explore new place</span>
      </div>
    </header>
  );
};

export default Header;
