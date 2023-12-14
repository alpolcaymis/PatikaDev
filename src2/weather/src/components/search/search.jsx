/* eslint-disable react/prop-types */
import { useState } from 'react';
import AsyncSelect from 'react-select/async';
import debounce from 'lodash/debounce';
import { citiesUrl, geoDBCitiesOptions } from '../../api';

const Search = ({ onHandleSearch }) => {
 const [search, setSearch] = useState(null);

 const handleOnChange = (searchData) => {
  // debugger;
  setSearch(searchData);
  onHandleSearch(searchData);
 };

 const promiseOptions = debounce((inputValue, callback) => {
  if (inputValue.trim().length < 2) return; // Fixed bug: When entering "hanoi" and deleting everything, the "inputValue" variable is still printed once even though the "inputValue" variable is now an empty string!

  fetch(citiesUrl(inputValue), { ...geoDBCitiesOptions })
   .then((response) => {
    if (!response.ok) throw response;

    return response.json();
   })
   .then((data) => {
    // debugger;
    const options = data.data.map((item) => ({
     ...item,
     value: `${item.latitude},${item.longitude}`,
     label: `${item.name}, ${item.regionCode}`,
    }));
    callback(options);
   })
   .catch((errorResponse) => {
    // debugger;
    if (errorResponse.text) {
     errorResponse.text().then((errorMessage) => {
      console.log('Full error message: ', JSON.parse(errorMessage));
     });
    } else {
     console.log('Error: ', errorResponse);
    }

    callback([]);
   });
 }, 600);

 return (
  <AsyncSelect
   placeholder="Search city name here..."
   cacheOptions
   value={search}
   onChange={handleOnChange}
   loadOptions={promiseOptions}
  />
 );
};

export default Search;
