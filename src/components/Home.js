import React from 'react';
import './Home.css';
import backgroundImage from '../images/art.jpg';

const Home = () => {
    return (
        <div className="home">
            <img src={backgroundImage} alt="background" className="background-image" />
        </div>
    );
};

export default Home;