import React from 'react';
import './About.css'; // Ensure you have the CSS file for styling
import dummyImage from './images/ab1.jpg'; // Update the path to your dummy image

const About = () => {
    return (
        <div className="about">
            <div className="about-text">
                <h2>About Us</h2>
                <img src={dummyImage} alt="About Us" className="about-image" />
                <p className='p-text'>Marvel Snap Studio captures life’s cherished moments with creativity and precision, delivering stunning photos and videos that turn special occasions into lasting memories.</p>
            </div>
        </div>
    );
};

export default About; 