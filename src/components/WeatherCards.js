import React from 'react';
import PropTypes from 'prop-types';
import WeatherCard from './WeatherCard';

const WeatherCards = (props) => {
  return props.weatherList.map((data, i) => {
    return <WeatherCard key={i} temp={0} icon='' date='' high={0} low={0} />
  });
};

WeatherCards.propTypes = {
  weatherList: PropTypes.array.isRequired
}

export default WeatherCards;