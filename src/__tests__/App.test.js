import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from '../App';

configure({ adapter: new Adapter() });

describe('App', () => {
  const app = shallow(<App />);
  
  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('to have a connected `SearchBar` component', () => {
    expect(app.find('Connect(SearchBar)').exists()).toBe(true);
  })

  it('to have a connected `WeatherContainer` component', () => {
    expect(app.find('Connect(WeatherContainer)').exists()).toBe(true);
  })
});


