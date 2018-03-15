import axios from 'axios';
import { API_KEY } from '../config/config';
import { FETCH_WEATHER } from '../constants';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial`;

export default function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const req = axios.get(url)
    .then( res => {
      return res;
    })
    .catch( err => {
      throw err;
    });
  return {
    type: FETCH_WEATHER,
    payload: req
  };
};