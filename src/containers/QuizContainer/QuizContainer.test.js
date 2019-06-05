import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { QuizContainer, mapStateToProps } from '../QuizContainer';
import { mockTossups } from '../../utils/mockData';


describe('QuizContainer', () => {
  describe('QuizContainer Component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<QuizContainer 
        tossups={mockTossups}
      />);
    });

    it('should render to match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have a default state', () => {
      const expected = {
        questionCounter: 0,
        displayAnswer: false
      };
      expect(wrapper.state()).toEqual(expected)
    });

    it('should render to match snapshot', () => {

    });

    it('should render to match snapshot', () => {

    });
  });

  describe('mapStateToProps', () => {
    
  });
});