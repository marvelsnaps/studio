import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
// import weddingImage from './images/service.jpg';
import weddingVideo from '../images/wedding/w1.webp';
import drone from '../images/drone/d1.webp';
import event from '../images/service/event.webp';
import port from '../images/portraits/p1.webp';
import bday from '../images/birthday/bd1.webp';
import product from '../images/product.webp';


const servicesData = [
    { 
        name: 'Wedding Photography', 
        type: 'image',
        media: weddingVideo 
    },
    { 
        name: 'Event Videography', 
        type: 'image',
        media: event 
    },

    { 
        name: 'Drone Videography', 
        type: 'image',
        media: drone
    },
    { 
        name: 'Portrait Sessions', 
        type: 'image',
        media: port
    },
    
    { 
        name: 'Birthday Photography', 
        type: 'image',
        media: bday
    },
    { 
        name: 'Product Photography', 
        type: 'image',
        media: product
    },
];

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRef = useRef(null);

    const handleViewMore = () => {
        console.log("View More button clicked");
    };

    const renderMedia = (service) => {
        if (service.type === 'video') {
            return (
                <video 
                    ref={videoRef}
                    className="service-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={service.media} type="video/webm" />
                </video>
            );
        }
        return <img src={service.media} alt={service.name} className="service-image" />;
    };

    return (
        <div className="services">
            <h2>Our Services</h2>
            <div className="services-container">
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-block" key={index}>
                            {renderMedia(service)}
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