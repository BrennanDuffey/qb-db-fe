import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { Controls } from '../Controls';

describe('Controls', () => {
  describe('Controls component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Controls />);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});