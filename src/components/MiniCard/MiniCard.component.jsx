import React from 'react';
import './MiniCard.styles.scss';

const MiniCard = ({Icon, title}) => {
    return (
        <div className="mini-card">
            <Icon src={Icon} alt="" className="icon" />
            <div className="title">
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default MiniCard;
