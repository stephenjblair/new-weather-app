import React from 'react';
import PropTypes from 'prop-types';
import Title from './title';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import '../styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: this.props.forecasts[0].date,
    };
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });

    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  render() {
    const selectedForecast = this.props.forecasts.find(
      forecast => forecast.date === this.state.selectedDate,
    );
    return (
      <div className="forecast-app">
        <LocationDetails
          city={this.props.location.city}
          country={this.props.location.country}
          description={this.props.forecasts[0].description}
        />

        <ForecastSummaries
          forecasts={this.props.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        <ForecastDetails forecast={this.props.forecasts[0]} />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default App;
