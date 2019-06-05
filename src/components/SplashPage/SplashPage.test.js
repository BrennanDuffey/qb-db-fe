import React from 'react';
import { shallow } from 'enzyme';
import SplashPage from '../SplashPage';

describe('Card', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SplashPage />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  
});