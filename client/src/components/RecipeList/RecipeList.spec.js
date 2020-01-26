import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from './RecipeList';

describe('RecipeList', () => {
  it('RecipeList renders without crashing', () => {
    shallow(<RecipeList />);
  });
});
