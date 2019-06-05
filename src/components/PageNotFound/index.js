import React from 'react';
import { Link } from 'react-router-dom'


function PageNotFound() {
  return (
    <Link to='/'>
      <h1>404 Page Not Found: Click me to go home</h1>
    </Link>
  )
}

export default PageNotFound