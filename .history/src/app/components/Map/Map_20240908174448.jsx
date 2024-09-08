import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className="h-[85vh] w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}  // Use the API key from .env.local
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={() => ({
          disableDefaultUI: true,
          zoomControl: true,
        })}
        onChange={(event) => console.log("Map changed:", event)}
        onChildClick={(childKey, childProps) => console.log("Child clicked:", childKey, childProps)}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
