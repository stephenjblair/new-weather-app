/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastDetails = ({ forecast }) => (
  <div classsName="forecast-details" id="thisbit">
    <div className="forecast-details-date">
      <p>Forecast Details</p>
      <span>{moment(forecast.date).format('dddd Do MMM YY')}</span>
      <div className="forecast-details-temperature">
        <span>
          <strong>Temperataure: </strong>
          {`Max: 
          ${forecast.temperature.max}    |       `}

          {`Min: 
          ${forecast.temperature.min}`}
          <br />
        </span>
      </div>
      <div className="forecast-details-humidity">
        <strong>Humidity: </strong>
        {forecast.humidity}
        <br />
      </div>
      <div className="forecast-details-wind">
        <strong>Wind: </strong>
        {`Speed: ${forecast.wind.speed}     `}
        {`Direction: 
        ${forecast.wind.direction}`}
      </div>
    </div>
  </div>
);

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
};
export default ForecastDetails;
