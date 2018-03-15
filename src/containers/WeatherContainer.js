import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherCards from '../components/WeatherCards';

export class WeatherContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <WeatherCards weatherList={[]} />
      </div>
    );
  };
};

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherContainer);
