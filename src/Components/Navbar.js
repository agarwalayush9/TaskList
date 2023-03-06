import React from 'react'
import PropTypes from 'prop-types'
import {Link, link} from 'react-router-dom';

export default function Navbar(nav) {
    return (
        <nav>
            <span  className='navH'>{nav.header}</span>
            {/* <a className='navA' href='/'>Login / Sign up</a> */}
            <Link className='navA' to='/contact'>Contact</Link>
            <Link className='navA' to='/'>Home</Link>
        </nav>
    )
}

Navbar.propTypes = {
    header: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    header: 'Your Title will Come here'
};