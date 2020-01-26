import React from 'react';
import { shallow } from 'enzyme';
import VersionList from './VersionList';

describe('VersionList', () => {
  it('VersionList renders without crashing', () => {
    shallow(<VersionList />);
  });
});
