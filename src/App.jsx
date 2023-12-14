import React, { useState } from "react";

const api = {
  key: "4f9284ef0b1e69457f3d97eea812a895",
  base: "https://home.openweathermap.org/data/2.5/",
};
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

function App() {
  const [search, setSearch] = useState("");

  const searchPressed = () => {
    console.log("Search pressed!");
    console.log(search);
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div id="container">
      {/* HEADER */}
      <h1>Weather App</h1>

      {/* SEARCH BOX */}
      <div>
        <input
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={searchPressed}>Search</button>
      </div>

      {/* LOCATİON */}
      <p>Istanbul, TURKEY</p>

      {/* TEMPERATURE C*/}
      <p>32 °C</p>

      {/* CONDİTİON sunny*/}
      <p>Sunny</p>
    </div>
  );
}

export default App;
