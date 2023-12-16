function Day({ item }) {
  // console.log(item === undefined ? "adana" : item.dt);

  function getDayOfWeek(inputDate) {
    var daysOfWeek = [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ];

    // Tarih ve saat ifadesini içeren dizeyi Date objesine çevir
    var dateObject = new Date(inputDate);
    // Gün adını al
    var dayOfWeekIndex = dateObject.getDay();
    var dayOfWeek = daysOfWeek[dayOfWeekIndex];

    return dayOfWeek;
  }

  return (
    <li className="w-fit h-auto p-0.5 border rounded-md bg-white bg-opacity-60  first:bg-sky-500 first:bg-opacity-80 first:border-sky-900 first:border-4 flex flex-col">
      {item && (
        <>
          <h3 className="text-md font-medium ">{getDayOfWeek(item.dt_txt)}</h3>
          <img
            className="day-icon"
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          />
          <div className="text-lg font-light">
            {item.weather[0].description}
          </div>
          <div>
            <span className="font-medium">
              {item.main.temp_max.toFixed()}°C{" "}
            </span>
            <span>{item.main.temp_min.toFixed()}°C</span>
          </div>
        </>
      )}
    </li>
  );
}

export default Day;
