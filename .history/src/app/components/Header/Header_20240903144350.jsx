import React from 'react';

const Header = ({ onSearch }) => {
  const handleSearch = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <header className="bg-blue-600 mt-18 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Travel Advisor</h1>
      <input
        type="text"
        placeholder="Search places..."
        className="p-2 rounded w-1/3 text-black"
        onChange={handleSearch}
      />
    </header>
  );
};

export default Header;
