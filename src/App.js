import React from 'react';
import SearchBar from './containers/SearchBar';
import WeatherContainer from './containers/WeatherContainer';

export const App = () => {
  return (
    <div>
      <h1 className="center">weatherU</h1>
      <div className="container">
        <SearchBar />
        <WeatherContainer />
      </div>
    </div>
  );
}

export default App;
