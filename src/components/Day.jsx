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
    <li className="w-40 h-auto border bg-sky-200 first:bg-sky-500 first:border-sky-900 first:border-4">
      {item && (
        <>
          <h1>{item.dt_txt}</h1>
          <h1>{getDayOfWeek(item.dt_txt)}</h1>
          <img
            className="day-icon"
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          />
          <div>{item.weather[0].description}</div>
          <div>max: {item.main.temp_max}°C</div>
          <div>min: {item.main.temp_min}°C</div>
        </>
      )}
    </li>
  );
}

export default Day;
