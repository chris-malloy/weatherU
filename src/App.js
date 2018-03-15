import React from 'react';
import './stylesheets/App.css';
import WeatherCards from './components/WeatherCards';

const App = () => {
  return (
    <div>
      <h1 className="center">weatherU</h1>
      <div className="container">
        <WeatherCards />
      </div>
    </div>
  );
}

export default App;
