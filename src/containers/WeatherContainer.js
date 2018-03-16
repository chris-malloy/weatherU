import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherCards from '../components/WeatherCards';

export class WeatherContainer extends Component {
  render() {
    var title;
    if (this.props.weather[0] === undefined) {
      title = '';
    } else {
      var cityName = this.props.weather[0].city.name; 
      title = `Forecast for ${cityName}`;
    }
    
    return (
      <div>
        <h5 className="center">{title}</h5>
        <WeatherCards weatherList={this.props.weather} />
      </div>
    );
  };
};

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherContainer);
