import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { Controls } from '../Controls';
import { mockCategories, mockTossups } from '../../utils/mockData';
import fetchWithOptions from '../../utils/apiCalls/fetchWithOptions';
import fetchWithCount from '../../utils/apiCalls/fetchWithCount';

jest.mock('../../utils/apiCalls/fetchWithOptions');
jest.mock('../../utils/apiCalls/fetchWithCount');

describe('Controls', () => {
  describe('Controls component', () => {
    let wrapper;
    let mockEvent;
    let mockToggleLoading;
    let mockSetTossups;

    beforeAll(() => {
      fetchWithOptions.mockImplementation(() => mockTossups);
      fetchWithCount.mockImplementation(() => mockTossups);
    })

    beforeEach(() => {
      mockEvent = { 
        target: { value: '25' }, 
        persist: jest.fn(),
        preventDefault: jest.fn() 
      }
      mockToggleLoading = jest.fn();
      mockSetTossups = jest.fn();
      wrapper = shallow(<Controls 
        toggleLoading={mockToggleLoading}
        setTossups={mockSetTossups}
      />);
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

    it('should call toggleLoading when fetchTossups is invoked', () => {
      wrapper.instance().fetchTossups(mockEvent);

    });

  });
});