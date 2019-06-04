import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      selectedCategories: [],
      count: 15
    };
  };

  selectCategories = (selectedOptions) => {
    const selectedCategories = selectedOptions.map(option => `${option.value}`);
    this.setState({ selectedCategories });
  };

  setCount = (e) => {
    e.persist();
    this.setState({ count: e.target.value });
  };

  render() {
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
          <input name="count" type="number" placeholder="default of 15" onChange={(e) => {this.setCount(e)}}/>
        </div>
        <div>
          <button>Quiz!</button>
          <button>Study!</button>
        </div>
      </section>
    )
  };
};

export default Controls;