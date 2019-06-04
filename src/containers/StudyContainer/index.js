import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import Card from '../../components/Card';

function StudyContainer(props) {
  const cards = props.tossups.map(tossup => {
    return <Card {...tossup}/>
  })

  return (
    <section>
      {cards}
    </section>
  )
}

export const mapStateToProps = (state) => ({
  tossups: state.tossups
});

export default connect(mapStateToProps)(QuizContainer)