import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";


export class QuizContainer extends Component {
  constructor() {
    super();
    this.state = {
      questionCounter: 0,
      displayAnswer: false
    }
  }

  incrementCounter = async () => {
    const questionCounter = this.state.questionCounter + 1;
    await this.setState({ questionCounter });
    this.toggleDisplay();
  }

  toggleDisplay = () => {
    this.setState({ displayAnswer: !this.state.displayAnswer })
  }

  createMarkup(text) {
    return {__html: text}
  }


  render() {
    const { tossups } = this.props
    const { displayAnswer, questionCounter } = this.state
    if (!tossups.length || tossups.length === questionCounter) {
      return <Redirect to={'/Controls'}/>
    }
    return (
      <section className="quiz-card">
        {!displayAnswer && <div className="quiz-text" dangerouslySetInnerHTML={this.createMarkup(tossups[questionCounter].formatted_text)} />}
        {!displayAnswer && <h3 className="quiz-button" onClick={this.toggleDisplay}>Show Answer </h3>}
        {displayAnswer && <div className="quiz-text" dangerouslySetInnerHTML={this.createMarkup(tossups[questionCounter].formatted_answer)} />}
        {displayAnswer && <h3 className="quiz-button" onClick={() => {this.incrementCounter()}}>Next Question</h3>}
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  tossups: state.tossups
});

QuizContainer.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  tossups: PropTypes.array
}

export default connect(mapStateToProps)(QuizContainer)