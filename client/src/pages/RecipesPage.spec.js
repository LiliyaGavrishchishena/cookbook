import React from 'react';
import { shallow } from 'enzyme';
import RecipesPage from './RecipesPage';

describe('RecipesPage', () => {
  it('RecipesPage renders without crashing', () => {
    shallow(<RecipesPage />);
  });
});
