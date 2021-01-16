import React from 'react';
import './Hero.styles.scss';
import { ReactComponent as DevFreedom } from '../../assets/dev-freedom.svg';
import dots from '../../assets/hero.png';
import CardItem from '../Card/CardItem.component';
import CustomButton from '../Button/CustomButton.component';
import { Grid } from '@material-ui/core';

const Hero = () => {
    return (
        <div className="hero">
            <Grid container>
                <Grid item xs={12} md={6}>
                    <div className="title-container">
                        <div className="hero-title">
                            <DevFreedom />
                            <h2>tech without <br/> censorship.</h2>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="card-container">
                        <img src={dots} alt="" className="dots"/>
                    </div>
                </Grid>
                

            </Grid>
            
            
        </div>
    )
}

export default Hero;
