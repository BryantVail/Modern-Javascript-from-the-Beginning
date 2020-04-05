//01_WeatherJS
//-> ui.js

class UI {
  constructor() {
    this.location = document.querySelector("#w-location");
    this.description = document.querySelector("#w-description");
    this.temperature = document.querySelector("#w-temperature");
    this.clouds = document.querySelector("#w-clouds");
    this.icon = document.querySelector("#w-icon");
    this.humidity = document.querySelector("#w-humidity");
    this.dewpoint = document.querySelector("#w-dewpoint");
    this.apparentTemp = document.querySelector("#w-apparent-temp");
    this.wind = document.querySelector("#w-wind");
  }

  paint(weather) {
    this.location.textContent = `${weather.data[0].city_name}, ${weather.data[0].state_code}`;
    this.description.textContent = `${weather.data[0].weather.description}`;
    this.temperature.textContent = `Temp: ${weather.data[0].temp}`;
    this.clouds.textContent = `Cloud Cover: ${weather.data[0].clouds}%`;
    this.icon.setAttribute(
      "src",
      `https://www.weatherbit.io/static/img/icons/${weather.data[0].weather.icon}.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.data[0].rh}`;
    this.dewpoint.textContent = `Dewpoint: ${weather.data[0].dewpt}`;
    this.apparentTemp.textContent = `Feels like: ${weather.data[0].app_temp}`;
    this.wind.textContent = `Wind: ${weather.data[0].wind_spd} MPH, ${weather.data[0].wind_cdir_full}`;
  }
}

//
