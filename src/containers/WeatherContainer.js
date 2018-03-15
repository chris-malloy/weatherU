import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherCards from '../components/WeatherCards';

export class WeatherContainer extends Component {

  render() {
    return (
      <div>
        <WeatherCards weatherList={this.props.weather} />
      </div>
    );
  };
};

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherContainer);
