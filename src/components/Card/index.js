import React from 'react';

function Card(props) {
  return (
    <article>
      <p>{props.text}</p>
      <p>{props.answer}</p>
    </article>
  )
}

export default Card