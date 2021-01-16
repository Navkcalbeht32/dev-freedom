import React from 'react';
import './LinkCard.styles.scss';
import { ReactComponent as Web } from '../../assets/web.svg';

const LinkCard = (props) => {
    return (
        <a href={props.link}>
            <div className="link-card">
                <div className="title-box">
                    <h3>{props.title}</h3>
                </div>
                <div className="icon-box">
                    <img src={props.icon} alt="" className="icon" />
                </div>
            </div>
        </a>
        
    )
}

export default LinkCard
