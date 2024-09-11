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
          >
 {!isDesktop ? (
                <FaMapMarkerAlt className="text-blue-500 text-2xl" />
              ) : (
                <div className="bg-white p-2 rounded-lg shadow-lg flex flex-col items-center">
                  <h2 className="text-xs font-semibold text-gray-700">
                    {place.name}
                  </h2>
                  <img
                    className="w-20 h-20 object-cover mt-2"
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                    alt={place.name}
                  />
                  <div className="flex items-center justify-center mt-1">
                    {Array.from({ length: Math.round(place.rating) }).map(
                      (_, index) => (
                        <FaMapMarkerAlt
                          key={index}
                          className="text-yellow-500 text-sm"
                        />
                      )
                    )}
                  </div>
                </div>
              )}
            </div>


          </div>;
        })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
