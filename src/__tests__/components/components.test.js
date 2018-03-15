import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WeatherCards from '../../components/WeatherCards';
import WeatherCard from '../../components/WeatherCard'

configure({ adapter: new Adapter() });

describe('Components', () => {
  describe('WeatherCards', () => {
    const props = {
      weatherList: ['weatherList']
    }
    // const weatherCards = mount(<WeatherCards {...props} />);

    // it('renders correctly', () => {
    //   expect(weatherCards).toMatchSnapshot();
    // });

    // it('to have a `WeatherCard` component', () => {
    //   expect(weatherCards.find('WeatherCard').exists()).toBe(true);
    // });
  });

  describe('WeatherCard', () => {
    const props = {
      temp: 0,
      icon: 'icon',
      date: 'date',
      low: 0,
      high: 0
    }
    const weatherCard = shallow(<WeatherCard {...props} />);

    it('renders correctly', () => {
      expect(weatherCard).toMatchSnapshot();
    });
  });
});

// TODO 
// need to fix testing of WeatherCards Component