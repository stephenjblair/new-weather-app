/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const LocationDetails = ({ city, country, description }) => (
  <div className="location-details">
    <p>
      {city}, {country}
    </p>
    <p className="sub-text">{`The weather today is: ${description}`}</p>
  </div>
);

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default LocationDetails;
