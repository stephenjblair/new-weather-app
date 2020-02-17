/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = ({ date, temperature, description, icon, onSelect }) => (
  <div className="forecast-summary">
    <div className="items-container">
      <div className="forecast-item">
        <span>{moment(date).format('dddd Do MMM YY')}</span>
      </div>
      <div className="forecast-item">
        <span>
          {temperature}
          °C
        </span>
      </div>
      <div className="forecast-item">
        <span>{description}</span>
      </div>
      <div className="forecast-item">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="button-item">
        <button onClick={() => onSelect(date)}>More details</button>
      </div>
    </div>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onForecastSelect: PropTypes.number.isRequired,
};

export default ForecastSummary;
