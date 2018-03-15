import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SearchBar } from '../../containers/SearchBar';
import { WeatherContainer } from '../../containers/WeatherContainer';

configure({ adapter: new Adapter() });

describe('Containers', () => {
  describe('Search', () => {
    const searchBar = (<SearchBar />);

    it('renders correctly', () => {
      expect(searchBar).toMatchSnapshot();
    })
  });

  describe('WeatherContainer', () => {
    const weatherContainer = shallow(<WeatherContainer />);

    it('renders correctly', () => {
      expect(weatherContainer).toMatchSnapshot();
    });

    it('has a WeatherCards component', () => {
      expect(weatherContainer.find('WeatherCards').exists()).toBe(true);
    })
  });
});
