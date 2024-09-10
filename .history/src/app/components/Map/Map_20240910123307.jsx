import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const coordinates = { lat: 0, lng: 0 };



  return (
    <div className="h-[85vh] w-full">
    <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCg3Kdw9DI8uYXzfgeQXFu5Pq1oyk6CMcQ"}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}></GoogleMapReact>
    </div>
  );
};

export default Map;
