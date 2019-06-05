import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import ReactLoading from 'react-loading';
import { fetchWithOptions, fetchWithCount } from '../../utils/apiCalls/apiCalls';
import { setTossups, toggleLoading } from '../../actions'
import PropTypes from "prop-types";



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
      let result;
      const { count, selectedCategories } = this.state;
      const { setTossups, toggleLoading } = this.props
      toggleLoading();
      if (selectedCategories.length) {
        result = await fetchWithOptions(count, selectedCategories);
      } else {
        result = await fetchWithCount(count);
      }
      setTossups(result.tossups);
      toggleLoading();
      await this.setState({ redirect: e.target.name })
    } catch(error) {
      toggleLoading();
      this.setState({ errorMessage: error.message})
    }
  }

  render() {
    const { isLoading } = this.props

    if(this.state.redirect) {
      const route = `/${this.state.redirect}`;
      return <Redirect to={route}/>
    }

    if(this.state.errorMessage) {
      return <h1>{this.state.errorMessage}</h1>
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
        { isLoading && <ReactLoading type={'spokes'} color={'black'} height={'50%'} width={'50%'} className='loading'/> }
      </section>
    )
  };
};

export const mapDispatchToProps = (dispatch) => ({
  setTossups: (tossups) => dispatch(setTossups(tossups)),
  toggleLoading: () => dispatch(toggleLoading())
});

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading
});

Controls.propTypes = {
  history: PropTypes.object,
  isLoading: PropTypes.bool,
  location: PropTypes.object,
  match: PropTypes.object,
  setTossups: PropTypes.func,
  toggleLoading: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);