import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import fetchWithOptions from '../../utils/apiCalls/fetchWithOptions';
import fetchWithCount from '../../utils/apiCalls/fetchWithCount';
import { setTossups, toggleLoading } from '../../actions'

const categories = [
  { label: 'Geography', value: 20 },
  { label: 'History', value: 18 },
  { label: 'Science', value: 17 },
  { label: 'Literature', value: 15 },
  { label: 'Fine Arts', value: 21 },
  { label: 'Religion', value: 19 },
  { label: 'Mythology', value: 14 },
  { label: 'Philosophy', value: 25 },
  { label: 'Current Events', value: 26 },
  { label: 'Social Science', value: 22 }
];

export class Controls extends Component {
  constructor() {
    super();
    this.state = {
      selectedCategories: [],
      count: 15,
      redirect: '',
      errorMessage: ''
    };
  };

  selectCategories = (selectedOptions) => {
    let selectedCategories;
    if (selectedOptions) {
      selectedCategories = selectedOptions.map(option => `${option.value}`);
    } else {
      selectedCategories = []
    }
    this.setState({ selectedCategories });
  };

  setCount = (e) => {
    e.persist();
    this.setState({ count: e.target.value });
  };


  fetchTossups = async (e) => {
    e.preventDefault();
    e.persist();
    try {
      await this.props.toggleLoading();
      const { count, selectedCategories } = this.state;
      let result;
      if (selectedCategories.length) {
        result = await fetchWithOptions(count, selectedCategories);
      } else {
        result = await fetchWithCount(count);
      }
      await this.props.setTossups(result.tossups);
      await this.props.toggleLoading();
      await this.setState({ redirect: e.target.name })
    } catch(error) {
      this.setState({ errorMessage: error.message})
    }
  }

  render() {

    if (this.state.redirect) {
      const route = `/${this.state.redirect}`;
      return <Redirect to={route}/>
    }

    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <Select options={ categories } isMulti onChange={(e) => {this.selectCategories(e)}} />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <div>
          <label htmlFor="count">Select A Number of Questions</label>
          <input name="count" type="number" placeholder=" Default of 15" onChange={(e) => {this.setCount(e)}}/>
        </div>
        <div>
          <button 
            onClick={ (e) => {this.fetchTossups(e)} }
            name="Quiz"
          >Quiz!</button>
          <button 
            onClick={ (e) => {this.fetchTossups(e)} }
            name="Study"
          >Study!</button>
        </div>
      </section>
    )
  };
};

export const mapDispatchToProps = (dispatch) => ({
  setTossups: (tossups) => dispatch(setTossups(tossups)),
  toggleLoading: () => dispatch(toggleLoading())
});

export default connect(null, mapDispatchToProps)(Controls);