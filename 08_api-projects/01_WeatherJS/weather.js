class Weather {
  constructor(city, state) {
    this.apiKey = "990e74aeb6f44c9dad319f712ebd766e";
    this.city = city;
    this.state = state;
    this.url = `https://api.weatherbit.io/v2.0/current?key=${this.apiKey}&lang=en&units=I&`;
  }

  //fetch weather
  async getWeather() {
    //fetch returns a promise
    const response = await fetch(`${this.url}city=${this.city},${this.state}`);
    //response.json returns the data in the form of json from the promise
    const data = await response.json();
    //return the data
    return data;
  }

  //change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
} //end class Weather
