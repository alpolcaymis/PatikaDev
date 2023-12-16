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
    <div className="h-[5vh]  ">
      <select
        className="h-[5vh] w-[40vw] min-w-[250px] bg-white bg-opacity-20 border-2 rounded-full border-stone-300 shadow-md font-normal text-center text-stone-100 font-f"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        {cities.map((city) => (
          <option
            className="bg-slate-400 font-extralight w-1"
            value={city}
            key={city}
          >
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WeatherDropdown;
