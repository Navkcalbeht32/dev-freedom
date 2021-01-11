import { Grid } from '@material-ui/core';
import React from 'react'
import LinkCard from '../LinkCard/LinkCard.component';
import './CTA.styles.scss';
import PhoneImage from '../../assets/phone-image.png';
import CustomButton from '../Button/CustomButton.component';
import Web from '../../assets/web.svg';
import Tools from '../../assets/tools.svg';
import Phone from '../../assets/phone.svg';

const CTA = () => {
    return (
        <Grid container className="cta">
            <Grid item md={7}>
                <LinkCard icon={Web} title="Web Application Development Resources" />
                <LinkCard icon={Phone} title="Native App Development Resources" />
                <LinkCard icon={Tools} title="Tools Against Censorship" />
            </Grid>
            <Grid item md={5}>
                <img src={PhoneImage} alt="smart phone image" className="phone-image" />
                <div className="info-container">
                    <h3>e Foundation</h3>
                    <p>Open Source mobile operating systems that respect users’ data privacy.</p>
                    <div className="button-container">
                        <CustomButton title="Learn More" />
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default CTA;
