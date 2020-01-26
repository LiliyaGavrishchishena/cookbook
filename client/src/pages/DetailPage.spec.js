import React from 'react';
import { shallow } from 'enzyme';
import DetailPage from './DetailPage';

describe('DetailPage', () => {
  it('DetailPage renders without crashing', () => {
    shallow(<DetailPage />);
  });
});
