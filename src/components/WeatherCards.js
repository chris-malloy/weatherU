import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherCards = (props) => {
  return props.weatherList.map((data, i) => {
    var item = data.list[0];
    console.log(item);
    return <WeatherCard key={i} temp={item.main.temp} icon={item.weather[0].icon} date={item.dt_txt} high={item.main.temp_max} low={item.main.temp_min} />
  });
};

export default WeatherCards;