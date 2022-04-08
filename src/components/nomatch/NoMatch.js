import React from 'react'
import { Link } from 'react-router-dom'
import './NoMatch.css'
function NoMatch() {
  return (
    <div className='noMatch'>
        <h1>Sorry!</h1>
        <p>We couldn't find that page</p>
        <p>Try search or go to <Link to='/'> Amazon's home page</Link></p>
    </div>
  )
}

export default NoMatch