import React from 'react';
import './Navbar.styles.scss';
import { ReactComponent as Logo } from '../../assets/df-logo.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <Logo />
                <ul className="navbar-links">
                    <a href=""><li>Learning Resources</li></a>
                    <a href=""><li>Projects</li></a>
                    <a href=""><li>Contact</li></a>
                    <a href=""><li>About</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
