import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";


class QuizContainer extends Component {
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


  render() {
    const { tossups } = this.props
    const { displayAnswer, questionCounter } = this.state
    if (!tossups.length || tossups.length === questionCounter) {
      return <Redirect to={'/Controls'}/>
    }
    return (
      <section>
        {!displayAnswer && <p>{tossups[questionCounter].text}</p>}
        {!displayAnswer && <h3 onClick={this.toggleDisplay}>Show Answer </h3>}
        {displayAnswer && <p>{tossups[questionCounter].answer}</p>}
        {displayAnswer && <h3 onClick={() => {this.incrementCounter()}}>Next Question</h3>
        }

      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  tossups: state.tossups
});

export default connect(mapStateToProps)(QuizContainer)