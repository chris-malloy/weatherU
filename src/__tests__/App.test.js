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

  it('to have a `WeatherCards` component', () => {
    expect(app.find('WeatherCards').exists()).toBe(true);
  })
});


