import React from "react";
import GoogleMapReact from "google-map-react";
import { APP_GOOGLE_MAP_KEY } from "../../../config";

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const isDesktop = window.matchMedia("(min-width: 600px)").matches;
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
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      >
        {places?.map((place, i) => {
          <div
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 hover:z-20"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          ></div>;
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
