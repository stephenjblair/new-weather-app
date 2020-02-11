import React from 'react';
import { render } from 'react-dom';
import { location, forecasts } from './data/forecast.json';
import App from './components/App';

render(<App location={location} forecasts={forecasts} />, global.document.getElementById('root'));
