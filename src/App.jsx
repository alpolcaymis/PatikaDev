import React from "react";
import { WeatherProvider } from "./context/WeatherContext";
import Week from "./components/Week";
import WeatherDropdown from "./components/WeatherDropdown";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <WeatherProvider>
      <div className="h-screen p-4 text-center flex flex-col justify-between ">
        <WeatherDropdown />
        <Dashboard />
        <Week />
      </div>
    </WeatherProvider>
  );
};

export default App;
