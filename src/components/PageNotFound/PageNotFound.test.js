import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'enzyme';
import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<PageNotFound />)
    expect(wrapper).toMatchSnapshot();
  });
});