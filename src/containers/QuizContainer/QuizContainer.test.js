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

    it('should set new state with incrementCounter', () => {
      expect(wrapper.state('questionCounter')).toEqual(0);
      wrapper.instance().incrementCounter();
      expect(wrapper.state('questionCounter')).toEqual(1);
    });

    it.skip('should call toggleDisplay with incrementCounter', async () => {
      wrapper.toggleDisplay = jest.fn();
      await wrapper.instance().incrementCounter();
      expect(wrapper.toggleDisplay).toHaveBeenCalled();
    });

    it('should update state with toggleDisplay', () => {
      expect(wrapper.state('displayAnswer')).toEqual(false);
      wrapper.instance().toggleDisplay();
      expect(wrapper.state('displayAnswer')).toEqual(true);
    });
  });

  describe('mapStateToProps', () => {
    
  });
});