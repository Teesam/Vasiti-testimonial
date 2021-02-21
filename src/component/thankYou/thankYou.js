import React from 'react';
import './thankYou.css';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return(
        <div className = 'Thank-you'>
            <h2>🎉</h2>
            <h1>Thank you for sharing your story!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link to = '/' id = 'thank-button'>Close</Link>
        </div>

    )
}

export default ThankYou;