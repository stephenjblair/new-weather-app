import React from 'react';
import PropTypes from 'prop-types';
import Title from './title';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import '../styles/app.css';

const App = props => (
  <div className="title-header">
    <Title />
    <div className="forecast">
      <LocationDetails city={props.location.city} country={props.location.country} />
      <ForecastSummaries forecasts={props.forecasts} />
      <ForecastDetails forecast={props.forecasts[0]} />
    </div>
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,
};

export default App;
