// WeatherDay.js

import React, { useContext } from "react";

const WeatherDay = (props) => {
  // const { dt } = data;

  // Günlerin listelendiği kartlarda; gün adı,
  // hava durumu görseli(güneşli, yağmurlu, karlı, parçalı bulutlu),
  // en yüksek ve en düşük sıcaklık gösterilmelidir.

  return (
    <div>
      {/* <div>Selam{props.data}</div> */}
      {console.log(props.data)}
      {/* <h2>{data.main}</h2> */}
      {/* <h3>{day}</h3> */}
      {/* <img src={weather} alt={weather} /> */}
      {/* <p>En yüksek sıcaklık: {high}°C</p> */}
      {/* <p>En düşük sıcaklık: {low}°C</p> */}
    </div>
  );
};

export default WeatherDay;
