/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { forecastWeatherUrl, currentWeatherUrl } from "./api";
import "./WeatherApp.css";

function WeatherApp() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  async function callAPIs(lat, lon, label) {
    try {
      const forecast5DaysResponse = fetch(forecastWeatherUrl(lat, lon)).then(
        (response) => response.json()
      );
      const currentWeatherResponse = fetch(currentWeatherUrl(lat, lon)).then(
        (response) => response.json()
      );

      const [forecast5DaysData, currentWeatherData] = await Promise.all([
        forecast5DaysResponse,
        currentWeatherResponse,
      ]);

      //  setCurrentWeather(currentWeatherData);
      //  setForecast(forecast5DaysData);
      setCurrentWeather({ city: label, ...currentWeatherData });
      setForecast({ city: label, ...forecast5DaysData });
    } catch (error) {
      console.error("Error calling APIs: ", error);
    }
  }

  function handleSearchCityName(data) {
    if (!data) return;
    // debugger;
    callAPIs(data.latitude, data.longitude, data.label);
  }

  return (
    <div className="container">
      <Search onHandleSearch={handleSearchCityName} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default WeatherApp;
