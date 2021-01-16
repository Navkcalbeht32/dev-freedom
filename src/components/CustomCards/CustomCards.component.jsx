import React from 'react';
import './CustomCards.styles.scss';


const CustomCards = ({image, title, heading}) => {
    return (
        <div className="custom-cards">
            <img src={image} alt="" className="card-image"/>
            <div className="card-info">
                <h4>{title}</h4>
                <h3>{heading}</h3>
            </div>
        </div>
    )
}

export default CustomCards;
