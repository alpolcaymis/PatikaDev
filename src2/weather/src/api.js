// API KEY
const OPEN_WEATHER_API_KEY = '674eed350675bf23e2f8ea9f8fe44a76';
const GEO_DB_CITIES_API_KEY = '5e0841f8bbmsh750bda6aac1cf6dp10a6fejsn3bc027129eb7';

const GEO_DB_API = `https://wft-geo-db.p.rapidapi.com/v1/geo`;
const OPEN_WEATHER_API = `https://api.openweathermap.org/data/2.5`;

export const geoDBCitiesOptions = {
 method: 'GET',
 url: `${GEO_DB_API}/cities`,
 headers: {
  'X-RapidAPI-Key': GEO_DB_CITIES_API_KEY,
  'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
 },
};

export const forecastWeatherUrl = function (lat, lon) {
 return `${OPEN_WEATHER_API}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`;
};

export const currentWeatherUrl = function (lat, lon) {
 return `${OPEN_WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`;
};

export const citiesUrl = function (cityName) {
 return `${GEO_DB_API}/cities?namePrefix=${cityName}`;
};
