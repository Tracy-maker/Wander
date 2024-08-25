import axios from "axios";
import { GEO_API_URL, geoApiOptions } from "../../config";

 const getLoadOptions = async (inputValue) => {
        try {
          const response = await axios(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions
          );
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          const options = (await response.json()).data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          }));
    
          return { options: options };
        } catch (error) {
          console.error(error);
          return { options: [] };
        }
      };
      

export default getLoadOptions;
