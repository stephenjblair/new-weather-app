import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    const { onSearch } = this.props;
    const { searchText } = this.state;

    return (
      <div className="search-title">
        <p>City Search</p>
        <div className="searchBar">
          <input
            className="input"
            type="text"
            value={this.state.searchText}
            onChange={this.handleInputChange}
            placeholder="Enter City Name Here..."
          />
          <button onClick={e => onSearch(e, searchText)} className="searchButton" type="submit">
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchForm;
