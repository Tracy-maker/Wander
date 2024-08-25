import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

function Search() {
    const[search, setSearch]=useState(null);

  return <AsyncPaginate placeholder="Search for city" debounceTimeout={600} value={search} onChange={handleOnChange}/>;
}
export default Search;
