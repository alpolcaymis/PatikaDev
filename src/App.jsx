import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherDropdown from "./components/WeatherDropdown";
import WeatherDay from "./components/WeatherDay";
import { DUMMY } from "./components/DUMMY";
const App = () => {
  const [city, setCity] = useState("istanbul");
  const [tempMax, setTempMax] = useState("0");
  const [tempMin, setTempMin] = useState("0");
  const [icon, setIcon] = useState("icon");
  const [storedList, setStoredList] = useState();

  const API_KEY = "4f9284ef0b1e69457f3d97eea812a895";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    axios(url).then(({ data }) => {
      console.log(data);
      setTempMax(data.list[0].main.temp_max);
      setTempMin(data.list[0].main.temp_min);
      setIcon(data.list[0].weather[0].icon);
      console.log(data.list);
      console.log("storedList", storedList);
      setStoredList(data.list);
    });
  }, [city]);

  return (
    <div className="text-center">
      <h1>Hava Durumu</h1>
      <WeatherDropdown city={city} setCity={setCity} />
      <div className="container border border-sky-400 py-2 bg-sky-700">
        <WeatherDay
          tempMax={tempMax}
          tempMin={tempMin}
          icon={icon}
          storedList={storedList}
        />
        <WeatherDay />
      </div>
      <ul>
        {DUMMY.map((obj, index) => {
          return <li key={index}>{obj.dt}</li>;
        })}
      </ul>
      {/* <div>{storedList.map(() => {})}</div> */}
    </div>
  );
};

export default App;
