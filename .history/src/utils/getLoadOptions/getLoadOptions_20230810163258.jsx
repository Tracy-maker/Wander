import { GEO_API_URL } from "../../config";

async function getLoadOptions(inputValue){
    try {
      const response = await fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
export default getLoadOptions
