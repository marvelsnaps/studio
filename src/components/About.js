import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import dummyImage from './images/ab1.jpg';

const About = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        });

        document.querySelectorAll('.animate').forEach((el) => observer.observe(el));
    }, []);

    return (
        <div className="about">
            <div className="about-text">
                <h2 className="animate slide-down">Welcome to Marvel snaps</h2>
                <div className="image-gallery animate fade-in">
                    <img src={dummyImage} alt="Left side view" className="side-image left-image" />
                    <img src={dummyImage} alt="Studio showcase" className="main-image" />
                    <img src={dummyImage} alt="Right side view" className="side-image right-image" />
                </div>
                
                <div className="content-container animate slide-up">
                    <p className='p-text'>
                        Capturing timeless moments through the lens, we specialize in 
                        <span className="highlight"> Traditional</span>, 
                        <span className="highlight"> Weddings</span>, 
                        <span className="highlight"> Portraits</span>,
                        <span className="highlight"> Candid</span>, 
                        <span className="highlight"> Commercial</span> shoots and 
                        <span className="highlight"> Documentary</span>.
                    </p>
                    <div className="button-container">
                        <Link to="/about" className="view-more-btn animate bounce">
                            View More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;