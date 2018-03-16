import React from 'react';
import PropTypes from 'prop-types';
import { CardPanel, Row, Col } from 'react-materialize';

const WeatherCard = (props) => {
  var iconUrl = `https://openweathermap.org/img/w/${props.icon}.png`;
  var jacketMsg;
  var umbrellaMsg;
  if(props.temp > 80) {
    jacketMsg = "Stay home, jacket!";
  } else if (props.temp > 60) {
    jacketMsg = "Okay, maybe a light jacket";
  } else if (props.temp > 40) {
    jacketMsg = "Oh, you gonna need a jacket today";
  } else if (props.temp > 20) {
    jacketMsg = "What, it's winter already???";
  } else if (props.temp > 0) {
    jacketMsg = "STAY INSIDE";
  };
  
  var code = props.code.toString() // to use string proto includes()
  if (code.includes('2')) {
    umbrellaMsg = "Oh no, thunder! Bring 5 umbrellas"
  } else if (code.includes('3')) {
    umbrellaMsg = "Just a drizzle today!";
  } else if (code.includes('5')) {
    umbrellaMsg = "Umbrella time, it's one of those days";
  } else if (code.includes('6')) {
    umbrellaMsg = "Snow Day!!!";
  } else if (code.includes('7')) {
    umbrellaMsg = "Theres' some weird stuff going on today";
  } else if (code.includes('8')) {
    umbrellaMsg = "Happy Day! Leave the umbrella home";
  } else if (code.includes('90')) {
    umbrellaMsg = "Just stay home it's crazy out there";
  };

  return (
      <Col s={12} m={6} l={4}>
        <CardPanel className="grey lighten-3">
          <Row className="center">
            <Col s={6} className="current-temp">
              {props.temp}°
            </Col>
            <Col s={6}>
            <img src={iconUrl} alt="weather icon"/>
            </Col>
            <Col s={12}>
              <p>{jacketMsg}</p>
              <p>{umbrellaMsg}</p>
            </Col>
            <Col s={6} className="date">
            {props.date}
            </Col>
            <Col s={6} className="high-low">
              <Col s={12}>
              {props.high}°
              </Col>
              <Col s={12}>
                {props.low}°
              </Col>
            </Col>
          </Row>
        </CardPanel>
    </Col>
  );
};

WeatherCard.propTypes = {
  temp: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  high: PropTypes.number.isRequired,
  low: PropTypes.number.isRequired,
  code: PropTypes.number.isRequired 
}

export default WeatherCard;