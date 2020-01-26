import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App container', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('App', () => {
  it('App renders without crashing', () => {
    shallow(<App />);
  });

  it('should render a card title by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toBeTruthy();
  });
});
