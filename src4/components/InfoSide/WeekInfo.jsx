import { useEffect, useState } from "react";
import { useWeatherContext } from "../../contexts/WeatherContext";
import { DayCard } from "../DayCard";

export function WeekInfo() {
  const { list, setCurrent } = useWeatherContext();
  const [selectedCard, setSelectedCard] = useState(0);

  useEffect(() => {
    setCurrent(list[selectedCard]);
  }, [list]);

  return (
    <div className="week-container">
      <ul className="week-list">
        {list.map((item, index) => {
          if (index < 7)
            return (
              <DayCard
                className={index === selectedCard ? "active" : ""}
                onClick={() => {
                  setSelectedCard(index);
                  setCurrent(item);
                }}
                key={index}
                list={item}
              />
            );
        })}
        <div className="clear"></div>
      </ul>
    </div>
  );
}
