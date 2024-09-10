import React from 'react';
import { LocationMarkerIcon, PhoneIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          alt={place.name}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{place.name}</h2>

        {/* Rating Section */}
        <div className="flex justify-between items-center my-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                className={`h-5 w-5 ${index < place.rating ? 'text-yellow-500' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <p className="text-gray-600">{place.num_reviews} review{place.num_reviews > 1 && 's'}</p>
        </div>

        {/* Price and Ranking */}
        <div className="flex justify-between my-2">
          <p className="text-gray-500">Price</p>
          <p className="text-gray-800">{place.price_level}</p>
        </div>
        <div className="flex justify-between my-2">
          <p className="text-gray-500">Ranking</p>
          <p className="text-gray-800">{place.ranking}</p>
        </div>

        {/* Awards */}
        {place?.awards?.map((award, index) => (
          <div key={index} className="flex items-center justify-between my-1">
            <img src={award.images.small} alt={award.display_name} className="h-6 w-6" />
            <p className="text-gray-600">{award.display_name}</p>
          </div>
        ))}

        {/* Cuisines */}
        <div className="flex flex-wrap my-2">
          {place?.cuisine?.map(({ name }) => (
            <span key={name} className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-1 m-1">
              {name}
            </span>
          ))}
        </div>

        {/* Address */}
        {place.address && (
          <p className="text-gray-600 flex items-center mt-2">
            <LocationMarkerIcon className="h-5 w-5 mr-2" /> {place.address}
          </p>
        )}

        {/* Phone */}
        {place.phone && (
          <p className="text-gray-600 flex items-center mt-2">
            <PhoneIcon className="h-5 w-5 mr-2" /> {place.phone}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="px-4 py-2 bg-gray-50 flex justify-end space-x-4">
        <button
          onClick={() => window.open(place.web_url, '_blank')}
          className="text-blue-500 hover:underline"
        >
          Trip Advisor
        </button>
        <button
          onClick={() => window.open(place.website, '_blank')}
          className="text-blue-500 hover:underline"
        >
          Website
        </button>
      </div>
    </div>
  );
};

export default PlaceDetails;
