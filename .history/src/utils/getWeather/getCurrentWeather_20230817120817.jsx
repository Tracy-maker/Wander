import axios from "axios";
import { OPEN_WEATHER_MAP_BASE_URL, APP_ID } from "../../config";

const getCurrentWeather = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${OPEN_WEATHER_MAP_BASE_URL}/weather`,
      {params:{
        lat:lat,
        lon:lon,
        appid:APP_ID,
        units:'metric'
      }}
    );
  if (!response.data) {
      throw new Error('Response data is empty');
    }
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getCurrentWeather;
