import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shallow render should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when fully mounted', () => {
    const wrapper = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
