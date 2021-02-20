import React from 'react';
import './subNav.css';
import { Link } from 'react-router-dom';

function SubNav() {
    return (
        <div className = 'SubNav'>
            <ul>
                <li>
                    <Link to = '' className = 'Link'>MARKETPLACE</Link>
                </li>
                <li>
                    <Link to = '' className = 'Link'>WHOLESALE CENTER</Link>
                </li>
                <li>
                    <Link to = '' className = 'Link'>SELLER CENTER</Link>
                </li>
                <li>
                    <Link to = '' className = 'Link'>SERVICES</Link>
                </li>
                <li>
                    <Link to = '' className = 'Link'>INTERNSHIPS</Link>
                </li>
                <li>
                    <Link to = '' className = 'Link'>EVENTS</Link>
                </li>
            </ul>
        </div>
    )
}

export default SubNav;