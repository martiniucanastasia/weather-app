import axios from 'axios';
import { API_KEY } from '../config/config';

async function getWeather(country) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=${API_KEY}`
  );
  return response.data;
}

module.exports = {
  getWeather,
};
