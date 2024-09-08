import React from 'react';

const PlaceDetails = ({ selectedPlace }) => {
  if (!selectedPlace) return <div>Select a place to see details</div>;

  return (
    <div className="p-2 max-w-md mx-auto">
      <img 
        src={selectedPlace.image} 
        alt={selectedPlace.name} 
        className="w-full h-32 object-cover rounded-md" 
      />
      <h2 className="text-xl font-semibold mt-2">{selectedPlace.name}</h2>
      <p className="text-sm text-gray-600">{selectedPlace.rating} stars ({selectedPlace.reviews} reviews)</p>
      <p className="text-sm text-gray-600">{selectedPlace.priceRange}</p>
      <p className="text-sm text-gray-600">{selectedPlace.address}</p>
      <p className="text-sm text-gray-600">{selectedPlace.phone}</p>
      <div className="mt-2 flex flex-wrap">
        {selectedPlace.tags.map((tag, index) => (
          <span 
            key={index} 
            className="mr-1 mb-1 bg-gray-200 rounded-full px-2 py-0.5 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      <button className="mt-2 bg-blue-500 text-white text-sm py-1 px-3 rounded">
        Book Now
      </button>
    </div>
  );
};

export default PlaceDetails;
