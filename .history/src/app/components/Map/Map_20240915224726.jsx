import React from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { APP_GOOGLE_MAPS_API_KEY } from "../../../config";

const Map = ({ setCoords, setChildClicked, setBounds, coords, places }) => {
  const isDesktop = window.matchMedia("(min-width: 600px)").matches;

  // Fallback center coordinates if `coords` is undefined
  const defaultCoords = { lat: 0, lng: 0 };

  return (
    <div className="h-[87vh] w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: APP_GOOGLE_MAPS_API_KEY }}
        center={coords || defaultCoords} // Provide default if coords are not available
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places.length &&
          places.map((place, i) => (
            <div
              key={i}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 hover:z-20"
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
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
                      place?.photo?.images?.large?.url
                        ? place.photo.images.large.url
                        : "https://via.placeholder.com/150"
                    }
                    alt={place.name}
                  />
                  <div className="flex items-center justify-center mt-1">
                    {Array.from({ length: Math.round(place.rating) }).map(
                      (_, index) => (
                        <FaStar
                          key={index}
                          className="text-yellow-500 text-sm"
                        />
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
