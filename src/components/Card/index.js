import React from 'react';
import PropTypes from "prop-types";


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

Card.propTypes = {
  answer: PropTypes.string,
  category: PropTypes.object,
  category_id: PropTypes.number,
  created_at: PropTypes.string,
  formatted_answer: PropTypes.string,
  formatted_text: PropTypes.string,
  id: PropTypes.number,
  number: PropTypes.number,
  quinterest_id: PropTypes.number,
  round: PropTypes.string,
  subcategory:  PropTypes.object,
  subcategory_id: PropTypes.number,
  text: PropTypes.string,
  tournament: PropTypes.object,
  tournament_id: PropTypes.number,
  type: PropTypes.string,
  updated_at: PropTypes.string,
  url: PropTypes.string,
  wikipedia_url: PropTypes.string
};



export default Card