import React from 'react';
import { shallow } from 'enzyme';
import RecipeForm from './RecipeForm';

describe('RecipeForm', () => {
  it('RecipeForm renders without crashing', () => {
    shallow(<RecipeForm />);
  });
  it('should render a card title by default', () => {
    const wrapper = shallow(<RecipeForm />);
    expect(wrapper.find('h3').text()).toBeTruthy();
  });
});
