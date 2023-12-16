// App.js
import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherDropdown from "./components/WeatherDropdown";

// App.js
const App = () => {
  const [city, setCity] = useState("istanbul");

  const API_KEY = "4f9284ef0b1e69457f3d97eea812a895";
  // https://api.openweathermap.org/data/2.5/forecast?q=istanbul&appid=4f9284ef0b1e69457f3d97eea812a895
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    axios(url).then(({ data }) => {
      console.log(data);
    });
  }, [city]);

  return (
    <div>
      <h1>Hava Durumu</h1>

      <WeatherDropdown city={city} setCity={setCity} />
    </div>
  );
};

export default App;
