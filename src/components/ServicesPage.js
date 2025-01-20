import React, { useEffect, useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import BookNowButton from './BookNowButton';
import './ServicesPage.css';

import wedding from '../images/service/wedding.webp';
import event from '../images/service/event.webp';
import portrait from '../images/service/portrait.webp';
import model from '../images/service/model.webp';
import prewed from '../images/service/pre-wed.webp';
import postwed from '../images/service/post-wed.webp';
import empty from '../images/service/empty.png';
import candid from '../images/service/candit.webp';
import drone from '../images/service/drone.webp';
import baby from '../images/baby/b8.webp';
import corp from '../images/corp/c5.webp';
import product from '../images/product.webp';


const servicesData = [
    { 
        name: 'Wedding Photography', 
        description: 'From intimate ceremonies to grand celebrations, I specialize in capturing the joy and emotion of your big day.',
        image: wedding
    },
    { 
        name: 'Event Videography', 
        description: 'Let me capture your special event, be it a corporate gathering, birthday, or milestone celebration.',
        image: event
    },
    { 
        name: 'Portrait Sessions', 
        description: 'Whether it’s a professional headshot or a personal family session, I create timeless portraits that you’ll cherish forever.',
        image: portrait
    },
    { 
        name: 'Corporate Photography', 
        description: 'Professional imagery that represents your brand and corporate identity.',
        image: corp
    },
    { 
        name: 'Pre-wedding Photoshoot', 
        description: 'Capture the love before the big day with our pre-wedding photoshoot packages.',
        image: prewed
    },
    { 
        name: 'Post-wedding Photoshoot', 
        description: 'Relive the moments after your wedding with our post-wedding photoshoot services.',
        image: postwed
    },
    { 
        name: 'Ad Films', 
        description: 'Create stunning advertisements that showcase your brand effectively.',
        image: empty
    },
    { 
        name: 'Baby Photography', 
        description: 'Capture your events in a creative short film format.',
        image: baby
    },
    { 
        name: 'Model Shoots', 
        description: 'Professional shoots tailored for models to enhance their portfolios.',
        image: model 
    },
    { 
        name: 'Product Photography', 
        description: 'Showcase your products with high-quality photography that attracts customers.',
        image: product
    },
    { 
        name: 'Candid Photography & Videography', 
        description: 'Capture genuine moments with our candid photography and videography services.',
        image: candid
    },
    { 
        name: 'Drone Shoots', 
        description: 'Get stunning aerial shots with our professional drone photography services.',
        image: drone
    }
   
];

const serviceDescriptions = {
    Photography: 'Freeze your precious moments with our professional photography services. We capture emotions, details, and memories with stunning clarity. Every shot tells a story that lasts a lifetime.',
    Videography: 'Bring your vision to life with cinematic videography that captivates. We craft compelling visuals that showcase your story with perfection. From events to creative projects, we cover it all.',
    Frameworks: 'Enhance your ideas with our expertly designed frameworks. We provide structured, aesthetic layouts to elevate your projects. Turn concepts into visually stunning realities.',
    Artworks: 'Unleash creativity with our custom artworks, designed to inspire. From digital to traditional art, we create pieces that stand out. Let your imagination come to life with our artistic touch.',
    'Video Editing': 'Transform raw footage into stunning visual masterpieces with our video editing services. We blend creativity, precision, and storytelling to create impactful content. Make every second count with seamless edits.'
};

const ServicesPage = () => {
    const history = useHistory();
    const [currentImages, setCurrentImages] = useState({
        Photography: 0,
        Videography: 0,
        Frameworks: 0,
        Artworks: 0,
        'Video Editing': 0,
    });

    const [animationClass, setAnimationClass] = useState('fade-in');

    const images = useMemo(() => ({
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
    }), []);

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
    }, [images]);

    const handleServiceClick = (service) => {
        history.push('/service-gallery', { 
            selectedService: service.name 
        });
    };

    return (
        <div className="services-page" id="top">
            <div className="services">
                <h2 className='services-link'>Our Comprehensive Services</h2>
                <div className="services-detailed-grid">
                    {servicesData.map((service, index) => (
                        <div 
                            key={index} 
                            className="service-detailed-block glass-effect"
                            onClick={() => handleServiceClick(service)}
                            style={{ cursor: 'pointer' }}
                        >
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
                                className={`large-image ${animationClass}`}
                            />
                        </div>
                        <div className="service-detailed-contents">
                            <h3>{service}</h3>
                            <p>{serviceDescriptions[service]}</p>
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