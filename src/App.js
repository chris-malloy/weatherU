import React from 'react';
import './stylesheets/App.css';
import WeatherContainer from './containers/WeatherContainer';

export const App = () => {
  return (
    <div>
      <h1 className="center">weatherU</h1>
      <div className="container">
        <WeatherContainer />
      </div>
    </div>
  );
}

export default App;
