import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';
import { mockTossup } from '../../utils/mockData';

describe('Card', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Card {...mockTossup} />);
    expect(wrapper).toMatchSnapshot();
  });
});

