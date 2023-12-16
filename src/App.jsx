// App.js
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import WeatherContext from "./components/WeatherContext";
import WeatherDropdown from "./components/WeatherDropdown";
import WeatherDay from "./components/WeatherDay";

// App.js
const App = () => {
  const [city, setCity] = useState("istanbul");
  const weatherData = useContext(WeatherContext);

  const [current, setCurrent] = useState(null);
  const [list, setList] = useState([]);

  const API_KEY = "4f9284ef0b1e69457f3d97eea812a895";
  // https://api.openweathermap.org/data/2.5/forecast?q=istanbul&appid=4f9284ef0b1e69457f3d97eea812a895
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    axios(
      "https://api.openweathermap.org/data/2.5/forecast?q=istanbul&appid=4f9284ef0b1e69457f3d97eea812a895&units=metric"
    ).then(({ data }) => {
      console.log("main", data.list[0].weather[0].main);
      console.log(data);
      setList(data.list); // data.daily => data.list
    });
  }, [city]);

  return (
    <div>
      <h1>Hava Durumu</h1>

      {/* <WeatherDay data={weatherData[city]} /> */}

      <WeatherDay data={data2} />

      <WeatherDropdown city={city} setCity={setCity} />
    </div>
  );
};

export default App;
