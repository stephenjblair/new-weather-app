/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const ForecastDetails = ({ forecast }) => (
  <div classsName="forecast-details" id="thisbit">
    <div className="forecast-details-date">
      <span>
        {forecast.date}
        {console.log(forecast)}
      </span>
      <div className="forecast-details-temperature">
        <span>
          Temperataure <br />
          Max:
          {forecast.temperature.max} <br />
          Min:
          {forecast.temperature.min}
        </span>
      </div>
      <div className="forecast-details-humidity">Humidity: {forecast.humidity}</div>
      <div className="forecast-details-wind">
        Wind <br />
        Speed: {forecast.wind.speed} <br />
        Direction:
        {forecast.wind.direction}
      </div>
    </div>
  </div>
);

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
};
export default ForecastDetails;
