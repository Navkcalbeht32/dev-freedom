import React from 'react';
import './Banner.styles.scss';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-wrapper">
                <div className="banner-left">
                    <button>Learn More</button>
                    Join our developer community and learn more about our mission.
                </div>
                <div className="banner-right">
                    <a href="">Learn Development</a> 
                    <a href="">Support Others</a> 
                </div>  
            </div>
        </div>
    )
}

export default Banner;
