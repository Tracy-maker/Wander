import React from "react";
import GoogleMapReact from "google-map-react";
import { APP_GOOGLE_MAP_KEY } from "../../../config";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  return (
    <div className="h-[87vh] w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: APP_GOOGLE_MAP_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds = {};
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
