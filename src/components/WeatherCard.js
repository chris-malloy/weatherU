import React from 'react';
import PropTypes from 'prop-types';
import { CardPanel, Row, Col } from 'react-materialize';

const WeatherCard = (props) => {
  return (
      <div>
        <CardPanel>
          <Row>
            <Col s={6}>
              {props.temp}°
            </Col>
            <Col s={6}>
              {props.icon}
            </Col>
            <Col s={6}>
            {props.date}
            </Col>
            <Col s={6}>
              <Col s={12}>
              {props.high}°
              </Col>
              <Col s={12}>
                {props.low}°
              </Col>
            </Col>
          </Row>
        </CardPanel>
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