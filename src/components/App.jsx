import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import Title from './title';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './SearchForm';
import '../styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
    };
  }

  handleForecastSelect = date =>
    this.setState({
      selectedDate: date,
    });

  componentDidMount() {
    Axios.get(`https://mcr-codes-weather.herokuapp.com/forecast`).then(response => {
      this.setState({
        forecasts: response.data.forecasts,
        location: {
          city: response.data.location.city,
          country: response.data.location.country,
        },
      });
    });
  }

  getCity = (e, city) => {
    e.preventDefault();

    Axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`).then(response => {
      this.setState({
        location: {
          city: response.data.location.city,
          country: response.data.location.country,
        },
        forecasts: response.data.forecasts,
      });
    });
  };

  render() {
    const selectedForecast = this.state.forecasts.find(
      forecast => forecast.date === this.state.selectedDate,
    );
    console.log(this.props);
    return (
      <div className="forecast-app">
        <Title />
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
          // description={this.state.forecasts[0].description}
        />
        <SearchForm onSearch={this.getCity}  />

        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
      </div>
    );
  }
}

export default App;
