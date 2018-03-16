
import React from 'react';
import { Row } from 'react-materialize';
import WeatherCard from './WeatherCard';

const WeatherCards = (props) => {
  var itemArray;
  if(props.weatherList[0] === undefined) {
    itemArray = [];
  } else {
    itemArray = props.weatherList[0].list;
  };

  var cardArray = itemArray.map((data, index) => {
      return (
        <WeatherCard key={index} temp={data.main.temp} icon={data.weather[0].icon} date={data.dt_txt} high={data.main.temp_max} low={data.main.temp_min} code={data.weather[0].id} />
      );
  });
  return (
    <Row>
      {cardArray}
    </Row>
  )
};

export default WeatherCards;