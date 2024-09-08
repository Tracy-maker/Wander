import React from 'react';

const PlaceDetails = ({ selectedPlace }) => {
  if (!selectedPlace) return <div>Select a place to see details</div>;

  return (
    <div className="p-4">
      <img src={selectedPlace.image} alt={selectedPlace.name} className="w-full h-48 object-cover" />
      <h2 className="text-2xl font-bold mt-4">{selectedPlace.name}</h2>
      <p>{selectedPlace.rating} stars ({selectedPlace.reviews} reviews)</p>
      <p>{selectedPlace.priceRange}</p>
      <p>{selectedPlace.address}</p>
      <p>{selectedPlace.phone}</p>
      <div className="mt-4">
        {selectedPlace.tags.map(tag => <span className="mr-2 bg-gray-200 rounded-full px-2 py-1 text-sm">{tag}</span>)}
      </div>
      <button className="mt-4 bg-blue-500 text-white p-2 rounded">Book Now</button>
    </div>
  );
};

export default PlaceDetails;
