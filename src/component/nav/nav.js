import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import Logo from '../../Vasiti.png';

function Nav() {
    return (
        <div className = 'Nav'>
            <div>
                <img src = { Logo } id = 'logo' />
            </div>
            <ul>
                <li>
                    <Link to = '' className = 'Nav-link'>ABOUT US</Link>
                </li>
                <li>
                    <Link to = '/sharestory' className = 'Nav-link'>STORIES</Link>
                </li>
                <li>
                    <Link to = '' className = 'Nav-link'>CONTACT</Link>
                </li>
                <li>
                    <Link to = '' className = 'Nav-link'>LOGIN</Link>
                </li>
                <li>
                    <Link to = '' id = 'sign-up' className = 'Nav-link'>SIGN UP</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav;
