import { useWeatherContext } from "../context/WeatherContext";

function Dashboard() {
  const { list, city } = useWeatherContext();

  return (
    <div className="top">
      <div className="location">
        <p>{city}</p>
      </div>
      <div className="temp">
        {list[0] ? <h1>{list[0].main.temp.toFixed()}°C</h1> : null}
      </div>
      <div className="description">
        {list[0] ? <p>{list[0].weather[0].main}</p> : null}
      </div>
    </div>
  );
}

export default Dashboard;
