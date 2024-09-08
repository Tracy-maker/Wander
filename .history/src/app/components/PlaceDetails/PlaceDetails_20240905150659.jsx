import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; 

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const renderRating = (rating) => {
    const stars = [];
    const roundedRating = Math.round(rating * 2) / 2;

    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - roundedRating === 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }

    return stars;
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden w-full">  {/* Ensure full width */}
      <div 
        className="h-72 bg-cover bg-center w-full"  {/* Ensure full width */}
        style={{ backgroundImage: `url(${place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'})` }}
        title={place.name}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{place.name}</h2>
        <div className="flex justify-between my-2">
          <div className="flex">
            {renderRating(Number(place.rating))}
          </div>
          <p className="text-gray-600">{place.num_reviews} review{place.num_reviews > 1 && 's'}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Price</p>
          <p className="text-sm text-gray-800">
            {place.price_level}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Ranking</p>
          <p className="text-sm text-gray-800">
            {place.ranking}
          </p>
        </div>
        {place?.awards?.map((award, index) => (
          <div key={index} className="flex justify-between my-2 items-center">
            <img src={award.images.small} alt="Award" className="mr-2" />
            <p className="text-xs text-gray-600">{award.display_name}</p>
          </div>
        ))}
        <div className="flex flex-wrap mb-2">
          {place?.cuisine?.map(({ name }, index) => (
            <div key={index} className="text-sm bg-gray-200 text-gray-800 px-2 py-1 rounded-full m-1">
              {name}
            </div>
          ))}
        </div>
        {place.address && (
          <p className="text-sm text-gray-600 flex items-center mt-2">
            <FaMapMarkerAlt className="mr-1" />{place.address}
          </p>
        )}
        {place.phone && (
          <p className="text-sm text-gray-600 flex items-center mt-2">
            <FaPhone className="mr-1" /> {place.phone}
          </p>
        )}
      </div>
      <div className="p-4 flex space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full"
          onClick={() => window.open(place.web_url, '_blank')}
        >
          Trip Advisor
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full"
          onClick={() => window.open(place.website, '_blank')}
        >
          Website
        </button>
      </div>
    </div>
  );
};

export default PlaceDetails;
