import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const WeatherContext = createContext();
export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = (props) => {
  const [city, setCity] = useState("istanbul");
  const [list, setList] = useState([]);

  const API_KEY = "4f9284ef0b1e69457f3d97eea812a895";

  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    axios(url).then(({ data }) => {
      setList(data.list);
      console.log(data.list);
    });
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        list,
        setList,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
