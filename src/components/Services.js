import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import weddingImage from './images/service.jpg';

const servicesData = [
    { name: 'Wedding Photography', image: weddingImage },
    { name: 'Event Videography', image: weddingImage },
    { name: 'Portrait Sessions', image: weddingImage },
    { name: 'Ad Flims', image: weddingImage },
    { name: 'Short Flims', image: weddingImage },
    { name: 'Product Photography', image: weddingImage },
];

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleViewMore = () => {
        console.log("View More button clicked");
    };

    return (
        <div className="services">
            <h2>Our Services</h2>
            <div className="services-container">
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-block" key={index}>
                            <img src={service.image} alt={service.name} className="service-image" />
                            <h3>{service.name}</h3>
                        </div>
                    ))}
                </div>
                <div className="navigation-dots">
                    {servicesData.map((_, index) => (
                        <span 
                            key={index} 
                            className={`dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </div>
            <Link to="/services#top">
                <button onClick={handleViewMore}>View More</button>
            </Link>
        </div>
    );
};

export default Services; 