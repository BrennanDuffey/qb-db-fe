import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import Card from '../../components/Card';

export function StudyContainer({ tossups }) {
  const cards = tossups.map(tossup => {
    return <Card {...tossup} key={tossup.id}/>
  });

  if (!tossups.length) {
    return <Redirect to={'/Controls'}/>
  }

  return (
    <section>
      {cards}
    </section>
  )
}

export const mapStateToProps = (state) => ({
  tossups: state.tossups
});

export default connect(mapStateToProps)(StudyContainer)