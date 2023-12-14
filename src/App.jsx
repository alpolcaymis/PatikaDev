import React, { useEffect, useState } from "react";

const api = {
  key: "4f9284ef0b1e69457f3d97eea812a895",
  base: "https://api.openweathermap.org/data/3.0/",
};
// https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}
function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [userLatLon, setUserLatLon] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      console.log(1);
      console.log(position.coords.latitude);

      // setData({
      //   ...data,
      //   name: newName,
      // });
      setUserLatLon({ userLon: 44, userLat: 22 });

      console.log(userLatLon);
      console.log(2);
    });
    console.log(3);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App</h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;
