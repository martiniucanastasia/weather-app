import { getWeather } from './functions/getWeather';

const input = document.getElementById('input-text');
const button = document.getElementById('get-weather');

const weatherDiv = document.getElementById('weather');
const tempOfCity = document.getElementById('temp');
const nameOfCity = document.getElementById('name');
const description = document.getElementById('description');

console.log(input, button);

let country;

input.addEventListener('change', function (event) {
  country = event.target.value;
});

button.addEventListener('click', function () {
  if (country) {
    const weather = getWeather(country);
    weather.then(function (data) {
      console.log(data);
      tempOfCity.textContent = data.main.temp + '°C';
      nameOfCity.textContent = data.name;
      description.textContent = data.weather[0].description;
      if (data.main.temp < 15) {
        weatherDiv.classList.add('cold');
        weatherDiv.classList.remove('warm');
      } else {
        weatherDiv.classList.add('warm');
        weatherDiv.classList.remove('cold');
      }
    });
  } else {
    alert('You did not specified a place!');
  }
});
