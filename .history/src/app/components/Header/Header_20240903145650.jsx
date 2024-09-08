import React from 'react';

const Header = ({ onSearch }) => {
  const handleSearch = (event) => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <header className="bg-blue-600 mt-16 text-white p-4 flex justify-between items-center w-1/4 fixed">
      <input
        type="text"
        placeholder="Search places..."
        className="p-2 rounded w-full text-black"
        onChange={handleSearch}
      />
    </header>
  );
};

export default Header;
