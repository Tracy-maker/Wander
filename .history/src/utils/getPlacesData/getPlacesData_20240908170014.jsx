import axios from 'axios';
import { 
  MAP_RAPIDAPI_URL, 
  MAP_BL_LATITUDE, 
  MAP_TR_LATITUDE, 
  MAP_BL_LONGITUDE, 
  MAP_TR_LONGITUDE, 
  MAP_RAPIDAPI_KEY, 
  MAP_RAPIDAPI_HOST 
} from '../../config';  // Adjust path accordingly

const getPlacesData = async () => {
  try {
    const response = await axios.get(MAP_RAPIDAPI_URL, {
      params: {
        bl_latitude: MAP_BL_LATITUDE,
        tr_latitude: MAP_TR_LATITUDE,
        bl_longitude: MAP_BL_LONGITUDE,
        tr_longitude: MAP_TR_LONGITUDE,
      },
      headers: {
        'x-rapidapi-key': MAP_RAPIDAPI_KEY,
        'x-rapidapi-host': MAP_RAPIDAPI_HOST,
      },
    });
    const placesData = response.data.data;
    return placesData;
  } catch (error) {
    console.error("Error fetching places data:", error.message);
    throw new Error("Failed to fetch data");
  }
};

export default getPlacesData;
