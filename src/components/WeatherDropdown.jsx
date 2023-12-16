import { useWeatherContext } from "../context/WeatherContext";

const WeatherDropdown = () => {
  const { city, setCity } = useWeatherContext();

  const cities = [
    "istanbul",
    "ankara",
    "izmir",
    "adana",
    "bursa",
    "antalya",
    "konya",
    "gaziantep",
  ];

  return (
    <div>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        {cities.map((city) => (
          <option value={city} key={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WeatherDropdown;
