import dayjs from "dayjs";
import { WEEKDAYS } from "../../constants";

export function DayCard({ list, className, onClick }) {
  const weekdayIndex = dayjs.unix(list[0].dt).day();
  console.log("weekdayIndex", weekdayIndex);

  return (
    <li className={className} onClick={onClick}>
      <img
        className="day-icon"
        src={`http://openweathermap.org/img/wn/${list[0].weather[0].icon}@2x.png`}
      />
      <span className="day-name">{WEEKDAYS[weekdayIndex].slice(0, 3)}</span>
      <span className="day-temp">{Math.round(list[0].main.temp_max)}°C</span>
      {/* item.temp.max =>  */}
    </li>
  );
}
