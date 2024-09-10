import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const coordinates = { lat: 0, lng: 0 }; // Default coordinates

  const handleMapChange = (event) => {
    console.log("Map changed:", event);
  };

  const handleChildClick = (childKey, childProps) => {
    console.log("Child clicked:", childKey, childProps);
  };

  return (
    <div className="h-[85vh] w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }} // API Key from .env.local
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14} // Default zoom level
        onChange={handleMapChange} // Handle map changes like zoom/pan
        onChildClick={handleChildClick} // Handle marker clicks
      />
    </div>
  );
};

export default Map;
