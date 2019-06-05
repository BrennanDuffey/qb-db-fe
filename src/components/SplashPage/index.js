import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";


class SplashPage extends Component {
  constructor() {
    super();
    this.state = {
      continue: false
    }
  }

  setContinue = () => {
    this.setState({ continue: true });
  };

  render() {
    if (this.state.continue) {
      return <Redirect to='/Controls'/>
    }
    return (
      <section>
        <h3>Welcome to the QuizBowl Quiz</h3> 
        <p>
          Click Continue to advance to the next page. On the next page simply select from the dropdowns on the next page to choose what material you would like to cover. From there select quiz to show each question then it's answer one at a time, or select study to display all the questions and answers together on one page.
        </p>
        <h2 onClick={this.setContinue}>Continue</h2>
      </section>
    );
  };
};

SplashPage.propTypes = {
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
}

export default SplashPage