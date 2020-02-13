/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = ({ date, temperature, description, icon }) => (
  <div className="forecast-summary">
    <div className="forecast-date">
      <span>{moment(date).format('dddd Do MMM YY')}</span>
    </div>
    <div className="forecast-temperature">
      <span>
        {temperature}
        °C
      </span>
    </div>
    <div className="forecast-description">
      <span>{description}</span>
    </div>
    <div className="forecast-icon">
      <WeatherIcon name="owm" iconId={icon} />
    </div>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;
