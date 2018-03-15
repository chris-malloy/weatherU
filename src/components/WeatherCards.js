import React from 'react';
import WeatherCard from './WeatherCard';

const WeatherCards = (props) => {
  var itemArray;
  if(props.weatherList[0] === undefined) {
    itemArray = [];
  } else {
    itemArray = props.weatherList[0].list;
  };

  return itemArray.map((data, index) => {
      return <WeatherCard key={index} temp={data.main.temp} icon={data.weather[0].icon} date={data.dt_txt} high={data.main.temp_max} low={data.main.temp_min} />
  });
};

export default WeatherCards;