import React from 'react';

function Card(props) {

  function createMarkup(text) {
    return {__html: text}
  }

  return (
    <article>
      <div dangerouslySetInnerHTML={createMarkup(props.formatted_text)} />
      <div dangerouslySetInnerHTML={createMarkup(props.formatted_answer)} />
    </article>
  )
}

export default Card