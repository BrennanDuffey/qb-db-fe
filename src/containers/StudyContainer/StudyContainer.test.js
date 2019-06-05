import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { StudyContainer , mapStateToProps } from '../StudyContainer';
import { mockTossups } from '../../utils/mockData';
import Card from '../../components/Card';

describe('StudyContainer', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<StudyContainer tossups={mockTossups}/>);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('Should return an object with an isLoading property', () => {
      const mockState = { tossups: mockTossups, isLoading: false };
      const expected = { tossups: mockTossups };
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});
