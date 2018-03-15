import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WeatherCards from '../../components/WeatherCards';
import WeatherCard from '../../components/WeatherCard'

configure({ adapter: new Adapter() });

describe('Components', () => {
  describe('WeatherCards', () => {
    const weatherCards = shallow(<WeatherCards />);

    it('renders correctly', () => {
      expect(weatherCards).toMatchSnapshot();
    });

    it('to have a `WeatherCard` component', () => {
      expect(weatherCards.find('WeatherCard').exists()).toBe(true);
    })
  });

  describe('WeatherCard', () => {
    const weatherCard = shallow(<WeatherCard />);

    it('renders correctly', () => {
      expect(weatherCard).toMatchSnapshot();
    });
  });
});