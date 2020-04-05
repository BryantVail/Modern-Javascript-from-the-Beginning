//01_WeatherJS
//

//init weather objects
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);
document.querySelector("#w-change-btn").addEventListener("click", e => {
  const city = document.querySelector("#city").value;
  const state = document.querySelector("#state").value;
  document.querySelector("#city").value = "";
  document.querySelector("#state").value = "";

  weather.changeLocation(city, state);

  //get weather & re-paint
  weather
    .getWeather()
    .then(data => ui.paint(data))
    .catch(err => {
      console.log(err);
      alert(err);
    });

  storage.setLocationData(city, state);

  //close modal
  $("#locationModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then(data => ui.paint(data))
    .catch(err => console.log(err));
}

//
