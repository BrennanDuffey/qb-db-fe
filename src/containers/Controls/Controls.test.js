import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { Controls } from '../Controls';
import { mockCategories } from '../../utils/mockData';

describe('Controls', () => {
  describe('Controls component', () => {
    let wrapper;
    let MockEvent;

    beforeEach(() => {
      mockEvent = { 
        target: { value: '25' }, 
        persist: jest.fn(),
        preventDefault: jest.fn() 
      }
      wrapper = shallow(<Controls />);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have a default state', () => {
      const mockDefaultState = {
        selectedCategories: [],
        count: 15,
        redirect: '',
        errorMessage: ''
      };
      expect(wrapper.state()).toEqual(mockDefaultState);
    });

    it('should update state correctly when selectCategories is invoked', () => {
      const expected = [ '20', '18', '17', '15', '21', '19', '14', '25', '26', '22'];
      expect(wrapper.state('selectedCategories')).toEqual([]);
      wrapper.instance().selectCategories(mockCategories);
      expect(wrapper.state('selectedCategories')).toEqual(expected);
    });

    it('should update the count in state correctly', () => {
      const expected = '25';
      expect(wrapper.state('count')).toEqual(15);
      wrapper.instance().setCount(mockEvent);
      expect(wrapper.state('count')).toEqual('25');
    });

    
  });
});