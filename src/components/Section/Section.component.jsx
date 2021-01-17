import React from 'react';
import './Section.styles.scss';

const Section = ({heading, subheading}) => {
    return (
        <div className="section">
            <div className="section-wrapper">
                <h2>{heading}</h2>
                <h4>{subheading}</h4>
            </div>
            
        </div>
    )
}

export default Section
