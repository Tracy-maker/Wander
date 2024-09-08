import React from 'react';

const List = ({ places, onPlaceClick }) => {
  return (
    <div className="overflow-y-auto h-screen p-4">
      {places.map(place => (
        <div 
          key={place.id} 
          className="flex items-center p-2 cursor-pointer" 
          onClick={() => onPlaceClick(place)}
        >
          <img src={place.image} alt={place.name} className="w-16 h-16 object-cover mr-4" />
          <div>
            <h3 className="text-xl font-semibold">{place.name}</h3>
            <p className="text-sm text-gray-600">{place.rating} stars</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
