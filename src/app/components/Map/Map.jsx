import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const coordinates = { lat: 0, lng: 0 };

  const handleMapChange = (event) => {
    console.log("Map changed:", event);  // Log any changes to the map
  };

  const handleChildClick = (childKey, childProps) => {
    console.log("Child clicked:", childKey, childProps);  // Log the clicked child
  };

  return (
    <div className="h-[85vh] w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyADSC3NLm-r4ERfgnqV3uDFq67uKmehs3U" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={() => ({
          disableDefaultUI: true,  // Example option to disable UI controls
          zoomControl: true,  // Enable zoom control
        })}
        onChange={handleMapChange}  // Pass a function to handle changes
        onChildClick={handleChildClick}  // Pass a function to handle child clicks
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
