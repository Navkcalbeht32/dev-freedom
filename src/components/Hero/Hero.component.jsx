import React from 'react';
import './Hero.styles.scss';
import { ReactComponent as DevFreedom } from '../../assets/dev-freedom.svg';
import dots from '../../assets/hero.png';
import CardItem from '../Card/CardItem.component';
import CustomButton from '../Button/CustomButton.component';

const Hero = () => {
    return (
        <div className="hero">
            <div className="title-container">
                <div className="hero-title">
                    <DevFreedom />
                    <h2>tech without <br/> censorship.</h2>
                </div>
            </div>
            <div className="card-container">
                {/* <CardItem /> */}
                <img src={dots} alt="" className="dots"/>
                
            </div>
        </div>
    )
}

export default Hero;
