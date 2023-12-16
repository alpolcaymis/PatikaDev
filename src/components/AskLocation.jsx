import React from "react";

function AskLocation() {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      document.querySelector(".latitude").textContent = latitude;
      document.querySelector(".longitude").textContent = longitude;
    },
    function (error) {
      // Hata işleme
    }
  );
  return (
    <div>
      <div className="latitude">41.014427</div>
      <div className="longitude">28.976988</div>
    </div>
  );
}

export default AskLocation;
