import axios from "axios";
import { OPEN_WEATHER_MAP_BASE_URL, APP_ID } from '../../config';

const getCurrentWeather = async (lat, lon) => {
  try {
    const response = await axios.get(`${OPEN_WEATHER_MAP_BASE_URL}/weather`);
  } catch {}
};
export default getCurrentWeather;
