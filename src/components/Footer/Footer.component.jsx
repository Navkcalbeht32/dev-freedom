import React from 'react';
import './Footer.styles.scss';
import { ReactComponent as Logo } from '../../assets/df-logo.svg'

const Footer = () => {

    let getDate = new Date();
    let currentYear = getDate.getFullYear();


    return (
        <div className="footer">
            <div className="footer-wrapper">
                <Logo className="logo" />
                <h4>Develop Freedom &#169; {currentYear}</h4>
                <h5>Web Art Components <a href="http://www.freepik.com">Designed by slidesgo / Freepik</a></h5>
                <h5><a href="http://www.freepik.com">Designed by vectorjuice / Freepik</a></h5>
                <h5><div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></h5>
            </div>
            
            
        </div>
    )
}

export default Footer;
