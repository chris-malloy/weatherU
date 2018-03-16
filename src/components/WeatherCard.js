import React from 'react';
import PropTypes from 'prop-types';
import { CardPanel, Row, Col } from 'react-materialize';

const WeatherCard = (props) => {
  var iconUrl = `https://openweathermap.org/img/w/${props.icon}.png`;
  var jacketMsg;
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

  const messageMap = {
    "2": "Oh no, thunder! Bring 5 umbrellas",
    "3": "Just a drizzle today!",
    "5": "Umbrella time, it's one of those days",
    "6": "Snow Day!!!",
    "7": "Theres' some weird stuff going on today",
    "8": "Happy Day! Leave the umbrella home",
    "90": "Just stay home it's crazy out there"
  }

  const setUmbrellaMessage = () => {
    for (var i in messageMap) {
      if (code.includes(i)) {
        return messageMap[i];
      };
    };
  };
  

  var umbrellaMsg = setUmbrellaMessage();

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