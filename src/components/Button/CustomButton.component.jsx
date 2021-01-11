import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = (props) => {
    return (
        <button className="button">
            {props.title}
        </button>
    )
}

export default CustomButton;
