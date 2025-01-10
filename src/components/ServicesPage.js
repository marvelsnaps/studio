import React, { useEffect, useState } from 'react';
import BookNowButton from './BookNowButton';
import './ServicesPage.css';
import weddingImage from './images/service.jpg';

// Data for the services offered
const servicesData = [
    { 
        name: 'Wedding Photography', 
        description: 'Capture the magic of your special day with our comprehensive wedding photography packages.',
        image: weddingImage 
    },
    { 
        name: 'Event Videography', 
        description: 'Professional video coverage that tells the story of your most important moments.',
        image: weddingImage 
    },
    { 
        name: 'Portrait Sessions', 
        description: 'Personalized photo shoots that bring out your unique personality and style.',
        image: weddingImage 
    },
    { 
        name: 'Corporate Photography', 
        description: 'Professional imagery that represents your brand and corporate identity.',
        image: weddingImage 
    },
    { 
        name: 'Pre-wedding Photoshoot', 
        description: 'Capture the love before the big day with our pre-wedding photoshoot packages.',
        image: weddingImage 
    },
    { 
        name: 'Post-wedding Photoshoot', 
        description: 'Relive the moments after your wedding with our post-wedding photoshoot services.',
        image: weddingImage 
    },
    { 
        name: 'Ad Films', 
        description: 'Create stunning advertisements that showcase your brand effectively.',
        image: weddingImage 
    },
    { 
        name: 'Short Films', 
        description: 'Capture your events in a creative short film format.',
        image: weddingImage 
    },
    { 
        name: 'Model Shoots', 
        description: 'Professional shoots tailored for models to enhance their portfolios.',
        image: weddingImage 
    },
    { 
        name: 'Product Photography', 
        description: 'Showcase your products with high-quality photography that attracts customers.',
        image: weddingImage 
    },
    { 
        name: 'Candid Photography & Videography', 
        description: 'Capture genuine moments with our candid photography and videography services.',
        image: weddingImage 
    },
    { 
        name: 'Drone Shoots', 
        description: 'Get stunning aerial shots with our professional drone photography services.',
        image: weddingImage 
    }
];

const ServicesPage = () => {
    // Define state for images in each section
    const [currentImages, setCurrentImages] = useState({
        Photography: 0,
        Videography: 0,
        Frameworks: 0,
        Artworks: 0,
        'Video Editing': 0,
    });

    const [animationClass, setAnimationClass] = useState('fade-in'); // Change initial animation class

    // Define image paths for each section
    const images = {
        Photography: [
            require('./service-images/photography/image1.jpg'),
            require('./service-images/photography/image2.jpg'),
            require('./service-images/photography/image3.jpg'),
            require('./service-images/photography/image4.jpg'),
            require('./service-images/photography/image5.jpg'),
        ],
        Videography: [
            require('./service-images/videography/image1.jpg'),
            require('./service-images/videography/image2.jpg'),
            require('./service-images/videography/image3.jpg'),
            require('./service-images/videography/image4.jpg'),
            require('./service-images/videography/image5.jpg'),
        ],
        Frameworks: [
            require('./service-images/frameworks/image1.jpg'),
            require('./service-images/frameworks/image2.jpg'),
            require('./service-images/frameworks/image3.jpg'),
            require('./service-images/frameworks/image4.jpg'),
            require('./service-images/frameworks/image5.jpg'),
        ],
        Artworks: [
            require('./service-images/artworks/image1.jpg'),
            require('./service-images/artworks/image2.jpg'),
            require('./service-images/artworks/image3.jpg'),
            require('./service-images/artworks/image4.jpg'),
            require('./service-images/artworks/image5.jpg'),
        ],
        'Video Editing': [
            require('./service-images/video-editing/image1.jpg'),
            require('./service-images/video-editing/image2.jpg'),
            require('./service-images/video-editing/image3.jpg'),
            require('./service-images/video-editing/image4.jpg'),
            require('./service-images/video-editing/image5.jpg'),
        ],
    };

    // Effect to change images every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationClass('fade-out');
            setTimeout(() => {
                setCurrentImages(prev => {
                    const newImages = { ...prev };
                    Object.keys(newImages).forEach(section => {
                        newImages[section] = (newImages[section] + 1) % images[section].length;
                    });
                    return newImages;
                });
                setAnimationClass('fade-in');
            }, 100);
        }, 2500);
        return () => clearInterval(interval);
    });

    return (
        <div className="services-page" id="top">
            <div className="services">
                <h2 className='services-link'>Our Comprehensive Services</h2>
                <div className="services-detailed-grid">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-detailed-block glass-effect">
                            <img src={service.image} alt={service.name} className="service-detailed-image" />
                            <div className="service-detailed-content">
                                <h3>{service.name}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="service-showcase">
                <h2>Our Specialized Services</h2>
                {['Photography', 'Videography', 'Frameworks', 'Artworks', 'Video Editing'].map((service, index) => (
                    <div key={index} className="service-section">
                        <div className="service-images">
                            <img 
                                src={images[service][currentImages[service]]} 
                                alt={`${service} ${currentImages[service] + 1}`} 
                                className={`large-image ${animationClass}`} // Apply animation class
                            />
                        </div>
                        <div className="service-detailed-contents">
                            <h3>{service}</h3>
                            <p>Description for {service} services goes here.</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="booking-card">
                <h2>Book Your Photoshoot</h2>
                <p>Schedule your professional photography session with Marvel Snaps Studio</p>
                <BookNowButton />
            </div>
        </div>
    );
};

export default ServicesPage; 