// WeatherDropdown.js

const WeatherDropdown = ({ city, setCity }) => {
  const cities = ["istanbul", "ankara", "izmir", "adana", "bursa", "antalya"];

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
