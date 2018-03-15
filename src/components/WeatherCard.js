import React from 'react';
import { connect } from 'react-redux';

export const WeatherCard = () => {
  return (
      <div>

      </div>
  );
};

export default connect(state => { return { weather: state } })(WeatherCard);