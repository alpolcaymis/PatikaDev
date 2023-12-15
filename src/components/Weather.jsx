/* import React from "react";

const Weather = ({ weatherData }) => {
  return (
    <div>
      {weatherData ? (
        <div
          className="text-center bg-sky-700 text-sky-100 font-medium border mx-auto rounded-lg py-4 w-3/4
      "
        >
          <p>{weatherData.name}</p>
          <p>{weatherData.sys.country}</p>
          <p>{weatherData.weather[0].description}</p>
          <p>{weatherData.main.temp.toFixed()}°C</p>
          <p>wind : {weatherData.wind.speed.toFixed()} KPH</p>
          <p>humidity : {weatherData.main.humidity} %</p>
          <p>Pressure : {weatherData.main.pressure}hPa</p>
          <div className="w-1/2 flex flex-col justify-between">
            <div className="relative">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                // src="https://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                className="w-3/4"
              />
            </div>
          </div>
        </div>
      ) : (
        <h2>null</h2>
      )}
    </div>
  );
};

export default Weather;
 */
