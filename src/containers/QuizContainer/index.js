import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuizContainer extends Component {
  constructor({ tossups }) {
    this.state = {
      questionCounter: 0
      displayAnswer: false
    }
  }


  render() {
    return (
      <section>

      </section>
    )
  }
}

export default connect(null)(QuizContainer)