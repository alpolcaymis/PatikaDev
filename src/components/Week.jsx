import Day from "./Day";

import { useWeatherContext } from "../context/WeatherContext";

function Week() {
  const { list } = useWeatherContext();

  //  40 veriyi / 8 = 5 günlük veri çıkartıyorum aşağıda;
  const yeniDizi = list
    .map((obj, index) => {
      // Sadece 8'er atlayarak işlem yap
      if (index % 8 === 0) {
        return obj; // Yeni diziye eklenen nesne
      } else {
        return null;
      }
    })
    .filter((obj) => obj !== null); // Null değerleri filtrele

  return (
    <div>
      <ul className="flex flex-wrap gap-2">
        {yeniDizi.map((item, index) => {
          return <Day key={index} item={item} />;
        })}
      </ul>
    </div>
  );
}

export default Week;
