import React from "react";
import { WeatherProvider } from "./context/WeatherContext";
import Week from "./components/Week";
import WeatherDropdown from "./components/WeatherDropdown";

const App = () => {
  return (
    <WeatherProvider>
      <div className="text-center">
        <h1>Hava Durumu</h1>
      </div>
      <WeatherDropdown />
      <Week />
    </WeatherProvider>
  );
};

export default App;
