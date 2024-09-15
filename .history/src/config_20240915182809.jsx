// Geo API configuration
export const geoApiOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
	  'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST
	}
};

export const GEO_API_URL = process.env.REACT_APP_GEO_API_URL;

// OpenWeather API configuration
export const APP_ID = process.env.REACT_APP_APP_ID;
export const OPEN_WEATHER_MAP_BASE_URL = process.env.REACT_APP_OPEN_WEATHER_MAP_BASE_URL;

// Travel Advisor API configuration
export const MAP_RAPIDAPI_URL = process.env.REACT_APP_MAP_RAPIDAPI_URL;
export const MAP_BL_LATITUDE = process.env.REACT_APP_MAP_BL_LATITUDE;
export const MAP_TR_LATITUDE = process.env.REACT_APP_MAP_TR_LATITUDE;
export const MAP_BL_LONGITUDE = process.env.REACT_APP_MAP_BL_LONGITUDE;
export const MAP_TR_LONGITUDE = process.env.REACT_APP_MAP_TR_LONGITUDE;
export const MAP_RAPIDAPI_KEY = process.env.REACT_APP_MAP_RAPIDAPI_KEY;
export const MAP_RAPIDAPI_HOST = process.env.REACT_APP_MAP_RAPIDAPI_HOST;

// Google Maps API key
export const APP_GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
