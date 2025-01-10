import React from 'react';
import BookNowButton from './BookNowButton';
import './About.css';
import dummyImage from './images/ab1.jpg';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="about">
                <div className="about-text">
                    <h2>About Marvel Snaps Studio</h2>
                    <img src={dummyImage} alt="About Us" className="about-image" />
                    <p className='p-text'>
                        Marvel Snap Studio is more than just a photography service - we're storytellers who capture the essence of your most precious moments. 
                        Founded with a passion for preserving memories, our team of professional photographers brings creativity, expertise, and a personal touch to every shoot.
                    </p>
                    <div className="about-details-container">
                        <div className="about-details-block glass-effect">
                            <h3>Our Mission</h3>
                            <p>
                                To transform fleeting moments into timeless memories, creating visual narratives that you'll cherish for a lifetime.
                            </p>
                        </div>
                        <div className="about-details-block glass-effect">
                            <h3>Our Approach</h3>
                            <p>
                                We believe in a personalized approach, taking the time to understand your unique story and vision, ensuring each photograph tells a meaningful story.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="booking-section">
                <h2>Book Your Photoshoot</h2>
                <p>Schedule your professional photography session with Marvel Snaps Studio</p>
                <BookNowButton />
            </div>
        </div>
    );
};

export default AboutPage; 