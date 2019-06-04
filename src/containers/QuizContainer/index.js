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

  incrementCounter = () => {
    const questionCounter = this.state.questionCounter++
    this.setState({ questionCounter })
  }

  toggleDisplay = () => {
    this.setState({ displayAnswer: !this.state.displayAnswer })
  }


  render() {
    if (!this.props.tossups.length) {
      return <Redirect to={'/Controls'}/>
    }
    const { tossups } = this.props
    const { displayAnswer, questionCounter } = this.state
    return (
      <section>
        {!displayAnswer && <p>{tossups[questionCounter].text}</p>}
        {!displayAnswer && <h3 onClick={this.toggleDisplay}>Show Answer </h3>}
        {displayAnswer && <p>{tossups[questionCounter].answer}</p>}
        {
          displayAnswer && <h3 onClick={() => {
          this.toggleDisplay()
          this.incrementCounter()
          }}>Next Question</h3>
        }

      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  tossups: state.tossups
});

export default connect(mapStateToProps)(QuizContainer)