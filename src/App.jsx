// App.js
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import WeatherContext from "./components/WeatherContext";
import WeatherDropdown from "./components/WeatherDropdown";
import WeatherDay from "./components/WeatherDay";
import AskLocation from "./components/AskLocation";

// App.js
const App = () => {
  const [city, setCity] = useState("istanbul");
  const weatherData = useContext(WeatherContext);

  const API_KEY = "4f9284ef0b1e69457f3d97eea812a895";
  // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
  let data2;
  useEffect(() => {
    // API çağrısını burada yapın
    axios
      .get(url)
      .then((response) => {
        // data2 = response.data.list[0];
        data2 = response.data;
        console.log(data2);

        // weatherData[city] = data;
      })
      .catch((error) => {
        console.log("fetch olmadı aşko", error);
      });
  }, [city]);

  return (
    <div>
      <AskLocation />
      <h1>Hava Durumu</h1>

      {/* <WeatherDay data={weatherData[city]} /> */}

      <WeatherDay data={data2} />

      <WeatherDropdown city={city} setCity={setCity} />
    </div>
  );
};

export default App;

/* import axios from "axios";
import "./index.css";
import { useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState();
  const [location, setLocation] = useState("");

  const API_KEY = "4f9284ef0b1e69457f3d97eea812a895";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.error("fetch olmadı aşko :", error); // Handle any errors
          console.log("Yanlış city ismi girilmiş olabilir");
        });
      setLocation("");
    }
  };
  return (
    <div className="w-full h-full relative">
      <div className="text-center p-4">
        <input
          type="text"
          className="py-3 px-6 w-2/3 text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-sky-300 
          shadow-md"
          placeholder="Enter Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDownCapture={searchLocation}
        />
      </div>
      <Weather weatherData={data} />
    </div>
  );
}
export default App;
 */
