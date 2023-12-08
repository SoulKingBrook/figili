import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
import logo from './images/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <Link to="/">
                    <img src={logo} alt='' />
                </Link>
            </div>
            <div className="right">
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
            </div>

        </div>
    )
}

export default Navbar;