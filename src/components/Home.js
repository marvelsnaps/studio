import React from 'react';
import BookNowButton from './BookNowButton';
import './Home.css';
import backgroundVideo from './videos/bg-vid.webm';

const Home = () => {
    return (
        <div className="home">
            <video autoPlay loop muted className="background-video">
                <source src={backgroundVideo} type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className="text-overlay">
                <h1>Photography is the push Button of life</h1>
                <div className="button-container">
                    <BookNowButton />
                </div>
            </div>
        </div>
    );
};

export default Home; 