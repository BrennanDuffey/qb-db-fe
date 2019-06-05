import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import Card from '../../components/Card';
import PropTypes from "prop-types";


export function StudyContainer({ tossups }) {
  const cards = tossups.map(tossup => {
    return <Card {...tossup} key={tossup.id}/>
  });

  if (!tossups.length) {
    return <Redirect to={'/Controls'}/>
  }

  return (
    <section className="study-container">
      {cards}
    </section>
  )
}

export const mapStateToProps = (state) => ({
  tossups: state.tossups
});

StudyContainer.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  tossups: PropTypes.array
}

export default connect(mapStateToProps)(StudyContainer)