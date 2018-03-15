import React from 'react';
import PropTypes from 'prop-types';

const WeatherCard = (props) => {
  return (
      <div>
        {props.temp}
        {props.icon}
        {props.date}
        {props.high}
        {props.low}
      </div>
  );
};

WeatherCard.propTypes = {
  temp: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired
}

export default WeatherCard;