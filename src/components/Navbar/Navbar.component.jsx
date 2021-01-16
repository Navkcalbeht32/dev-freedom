import React from 'react';
import './Navbar.styles.scss';
import { ReactComponent as Logo } from '../../assets/df-logo.svg'
import CustomButton from '../Button/CustomButton.component';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-wrapper">
                <Logo className="logo" />
                <ul className="navbar-links">
                    <a href=""><li>Learning Resources</li></a>
                    <a href=""><li>Projects</li></a>
                    <a href=""><li>Contact</li></a>
                    <a href=""><li>About</li></a>
                    <CustomButton className="button" title="Discord"/>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
