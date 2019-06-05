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
});
