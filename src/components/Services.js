import React, {  useRef } from 'react';
// import { Link } from 'react-router-dom';
import { useHistory,Link } from 'react-router-dom';
import './Services.css';
// import weddingImage from './images/service.jpg';
import weddingVideo from './videos/wedding.webm';
import drone from './videos/drone.mp4';
import event from './videos/event.mp4';
import port from '../images/portraits/p1.jpeg';
import bday from '../images/birthday/bd1.jpeg';
import videography from './videos/videography.webm';


const servicesData = [
    { 
        name: 'Wedding shoots', 
        type: 'video',
        media: weddingVideo 
    },
    { 
        name: 'Event shoots', 
        type: 'video',
        media: event 
    },

    { 
        name: 'Drone shoots', 
        type: 'video',
        media: drone
    },
    { 
        name: 'Videography', 
        type: 'video',
        media: videography
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
    
];

const Services = () => {
    const videoRef = useRef(null);
    const history = useHistory();

    const handleServiceClick = (serviceName) => {
        const categoryMap = {
            'Wedding Photography': 'wedding',
            'Baby Photography': 'babyShoot',
            'Drone Videography': 'drone',
            'Portrait Sessions': 'portrait',
            'Birthday Photography': 'birthday',
            'Product Photography': 'product'
        };

        const category = categoryMap[serviceName];
        history.push('/service-gallery', { selectedCategory: category });
    };

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
                        <div 
                            className="service-block" 
                            key={index}
                            onClick={() => handleServiceClick(service.name)}
                            style={{ cursor: 'pointer' }}
                        >
                            {renderMedia(service)}
                            <h3>{service.name}</h3>
                        </div>
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