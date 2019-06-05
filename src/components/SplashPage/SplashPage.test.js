import React from 'react';
import { shallow } from 'enzyme';
import SplashPage from '../SplashPage';

describe('Card', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SplashPage />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have correct default state', () => {
    expect(wrapper.state('continue')).toEqual(false);
  });

  it('should be able to update state to true', () => {
    expect(wrapper.state('continue')).toEqual(false);
    wrapper.instance().setContinue();
    expect(wrapper.state('continue')).toEqual(true);
  });
});