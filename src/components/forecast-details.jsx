import React from 'react';
import PropTypes from 'prop-types';

const ForecastDetails = ({ date }, { temperature }, { humidity }, { wind }) => (
  <div classsName="forecast-detail">
    <div className="forecast-date">
      <span>{date}</span>
    </div>
    <div className="temperature">
      <span>
        {temperature}
        °C
      </span>
    </div>
    <div className="humidity">
      <span>{humidity}</span>
    </div>
    <div className="wind">
      <span>{wind}</span>
    </div>
  </div>
);

ForecastDetails.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired,
};
export default ForecastDetails;
