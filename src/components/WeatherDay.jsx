const WeatherDay = ({ tempMax, tempMin, icon, storedList }) => {
  // Günlerin listelendiği kartlarda; gün adı, => list.[0]dt_txt
  // hava durumu görseli(güneşli, yağmurlu, karlı, parçalı bulutlu), => list[0].weather[0].icon
  // en yüksek ve en düşük sıcaklık gösterilmelidir.
  // => list[0].main.temp_max, main.temp_min

  console.log("WeatherDay", storedList);

  return (
    <div className="bg-sky-100 my-2 mx-6">
      <h1>Weather Day</h1>
      <p>Max : {tempMax}</p>
      <p>Min : {tempMin}</p>
      <p>icon : {icon}</p>
    </div>
  );
};

export default WeatherDay;
/* {list.map((item, index) => {
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
})} */
