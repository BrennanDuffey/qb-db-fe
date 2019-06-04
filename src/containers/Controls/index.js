import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import fetchWithOptions from '../../utils/apiCalls/fetchWithOptions';
import fetchWithCount from '../../utils/apiCalls/fetchWithCount';
import { setTossups } from '../../actions'

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

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      selectedCategories: [],
      count: 15
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
    try {
      //toggleLoading
      const { count, selectedCategories } = this.state;
      let result;
      if (selectedCategories.length) {
        result = await fetchWithOptions(count, selectedCategories);
      } else {
        result = await fetchWithCount(count);
      }
      await this.props.setTossups(result.tossups);
      //setTossups
      //toggleLoading
    } catch(error) {
      //hasErrored
      //toggleLoading
    }
  }

  render() {

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
          <button onClick={ (e) => {this.fetchTossups(e)} }>Quiz!</button>
          <button onClick={ (e) => {this.fetchTossups(e)} }>Study!</button>
        </div>
      </section>
    )
  };
};

//need to add actions for MDTP

export const mapDispatchToProps = (dispatch) => ({
  setTossups: (tossups) => dispatch(setTossups(tossups)),
  toggleLoading: () => dispatch(),
  setError: (errorMessage) => dispatch(errorMessage)
});

export default connect(null, mapDispatchToProps)(Controls);