import React from 'react';

const Header = ({ onSearch }) => {
  const handleSearch = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <header className="bg-blue-600 h-full w-1/4 p-4 flex flex-col items-start fixed">
      <h1 className="text-2xl font-bold text-white mb-4">Travel Advisor</h1>
      <input
        type="text"
        placeholder="Search places..."
        className="p-2 rounded w-full text-black mb-4"
        onChange={handleSearch}
      />
      {/* You can add more sidebar elements here */}
    </header>
  );
};

export default Header;
