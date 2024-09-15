import React from "react";
import { FaMapMarkerAlt, FaPhone, FaStar } from "react-icons/fa";

const PlaceDetails = ({ place }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
      <img
        className="w-full h-72 object-cover"
        src={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        alt={place.name}
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">{place.name}</h5>
        <div className="flex justify-between items-center my-2">
          <div className="flex">
            {/* Show star icons based on the rating */}
            {Array(Math.round(Number(place.rating) || 0))
              .fill()
              .map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
          </div>
          <p>
            {place.num_reviews} review{place.num_reviews > 1 && "s"}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">Price</p>
          <p>{place.price}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">Ranking</p>
          <p>{place.ranking}</p>
        </div>

        {place?.awards?.map((award) => (
          <div
            key={award.display_name}
            className="flex justify-between items-center my-2"
          >
            <img
              src={award.images.small}
              alt={award.display_name}
              className="w-6 h-6"
            />
            <p className="text-sm text-gray-500">{award.display_name}</p>
          </div>
        ))}

        <div className="flex flex-wrap mt-3">
          {place?.cuisine?.map(({ name }) => (
            <span
              key={name}
              className="bg-gray-200 text-sm rounded-full px-3 py-1 mr-2 mb-2"
            >
              {name}
            </span>
          ))}
        </div>

        {place.address && (
          <p className="flex items-center text-gray-500 text-sm mt-3">
            <FaMapMarkerAlt className="mr-2" /> {place.address}
          </p>
        )}
        {place.phone && (
          <p className="flex items-center text-gray-500 text-sm mt-3">
            <FaPhone className="mr-2" /> {place.phone}
          </p>
        )}
      </div>

      <div className="p-4 flex justify-between">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </button>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </button>
      </div>
    </div>
  );
};

export default PlaceDetails;
