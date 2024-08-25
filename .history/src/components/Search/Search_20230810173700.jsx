import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../config";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue, prevOptions, additional) => {
    const offset = additional ? additional.offset : 0;
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}&offset=${offset}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name},${city.countryCode}`,
          })),
          hasMore: response.meta.pagination.hasMore,
          additional: {
            offset: offset + response.meta.pagination.limit,
          },
        };
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
}
export default Search;
