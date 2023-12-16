import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = (props) => {
  const [city, setCity] = useState({
    id: 6,
    name: "Ankara",
    latitude: "39.9208",
    longitude: "32.8541",
    population: 5270575,
    region: "İç Anadolu",
  });

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
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        current,
        setCurrent,
        list,
        setList,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
