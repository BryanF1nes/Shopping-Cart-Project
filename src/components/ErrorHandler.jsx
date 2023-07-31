import React from 'react'
import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa';

const ErrorHandler = () => {
  return (
    <div className="error-page">
        <FaPaw className="error-logo"/>
        <h1>Woof! Wait just a second!</h1>
        <h1>It appears this page doesn't exist.</h1>
        <p>
            Don't worry though, You can click <Link to="/">here</Link> to go back to the home page!
        </p>
    </div>
  )
}

export default ErrorHandler