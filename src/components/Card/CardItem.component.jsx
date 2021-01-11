import React from 'react';
import './CardItem.styles.scss';
import CustomButton from '../Button/CustomButton.component';
import { ReactComponent as Discord } from '../../assets/discord.svg';
import { ReactComponent as Instagram } from '../../assets/instagram-square.svg';

const Card = () => {
    return (
        <div className="card">
            <div className="discord">
                <h3 className="heading">
                Join our Discord <br/> Server
                </h3>
                <Discord className="card-icon" />
                <CustomButton title="Discord" />
            </div>
            <div className="instagram">
                <h3 className="heading">
                Instagram Page <br/> <span>(while it lasts)</span>
                </h3>
                <Instagram className="card-icon" />
                <CustomButton title="Instagram" />
            </div>
            
        </div>
    )
}

export default Card;
