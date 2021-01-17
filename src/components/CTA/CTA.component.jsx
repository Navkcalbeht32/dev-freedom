import { Grid } from '@material-ui/core';
import React from 'react'
import LinkCard from '../LinkCard/LinkCard.component';
import './CTA.styles.scss';
import PhoneImage from '../../assets/phone-image.png';
import CustomButton from '../Button/CustomButton.component';
import Web from '../../assets/computer.svg';
import Tools from '../../assets/tools.svg';
import Phone from '../../assets/smartphone.svg';
import Vpn from '../../assets/vpn.svg';
import OS from '../../assets/operating-system.svg';
import Software from '../../assets/software.svg';

const CTA = () => {
    return (
        <Grid container className="cta">
            <Grid container justify="center" md={12}>
                <LinkCard icon={OS} title="Secure Operating Systems (PC/Android)" />
                <LinkCard icon={Vpn} title="Private Home Network Guide" />
                <LinkCard icon={Software} title="Alternatives Applications" />
                <LinkCard icon={Tools} title="Tools Against Censorship" />
                <LinkCard icon={Phone} title="Native App Development Resources" />
                <LinkCard icon={Web} title="Web App Development Resources" />
            </Grid>
            
        </Grid>
    )
}

export default CTA;
