import React, { useEffect, useState, useMemo , useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import BookNowButton from './BookNowButton';
import './ServicesPage.css';

import wedding from '../images/service/wedding.jpeg';
import event from '../images/service/event.jpeg';
import portrait from '../images/service/portrait.jpeg';
import model from '../images/service/model.jpeg';
import prewed from '../images/service/pre-wed.jpeg';
// import postwed from '../images/service/post-wed.jpeg';
import ad from '../images/ad.jpg';
import candid from '../images/service/candit.jpeg';
import drone from '../images/service/drone.jpeg';
import baby from '../images/baby/b1.jpeg';
import corp from '../images/corp/c5.jpeg';
import product from '../images/product.jpeg';


const servicesData = [
    { 
        name: 'Wedding Photography', 
        description: 'From intimate ceremonies to grand celebrations, I specialize in capturing the joy and emotion of your big day.',
        image: wedding
    },
    { 
        name: 'Pre & Post wedding Photoshoot', 
        description: 'Capture the love before the big day with our pre-wedding photoshoot packages.',
        image: prewed
    },
    // { 
    //     name: 'Post-wedding Photoshoot', 
    //     description: 'Relive the moments after your wedding with our post-wedding photoshoot services.',
    //     image: postwed
    // },
    { 
        name: 'Candid Photography & Videography', 
        description: 'Capture genuine moments with our candid photography and videography services.',
        image: candid
    },
   
    { 
        name: 'Portrait Sessions', 
        description: 'Whether it’s a professional headshot or a personal family session, I create timeless portraits that you’ll cherish forever.',
        image: portrait
    },
    { 
        name: 'Model Shoots', 
        description: 'Professional shoots tailored for models to enhance their portfolios.',
        image: model 
    },
    { 
        name: 'Event Videography', 
        description: 'Let me capture your special event, be it a corporate gathering, birthday, or milestone celebration.',
        image: event
    },
    { 
        name: 'Baby Photography', 
        description: 'Capture your events in a creative short film format.',
        image: baby
    },
    { 
        name: 'Corporate Photography', 
        description: 'Professional imagery that represents your brand and corporate identity.',
        image: corp
    },
    
    { 
        name: 'Drone Shoots', 
        description: 'Get stunning aerial shots with our professional drone photography services.',
        image: drone
    },
    { 
        name: 'Ad Films', 
        description: 'Create stunning advertisements that showcase your brand effectively.',
        image: ad
    },
    { 
        name: 'Product Photography', 
        description: 'Showcase your products with high-quality photography that attracts customers.',
        image: product
    }
   
];

const serviceDescriptions = {
    Photography: 'Freeze your precious moments with our professional photography services. We capture emotions, details, and memories with stunning clarity. Every shot tells a story that lasts a lifetime.',
    Videography: 'Bring your vision to life with cinematic videography that captivates. We craft compelling visuals that showcase your story with perfection. From events to creative projects, we cover it all.',
    Frameworks: 'Enhance your ideas with our expertly designed frameworks. We provide structured, aesthetic layouts to elevate your projects. Turn concepts into visually stunning realities.',
    Artworks: 'Unleash creativity with our custom artworks, designed to inspire. From digital to traditional art, we create pieces that stand out. Let your imagination come to life with our artistic touch.',
    'Video Editing': 'Transform raw footage into stunning visual masterpieces with our video editing services. We blend creativity, precision, and storytelling to create impactful content. Make every second count with seamless edits.'
};

const ImagePlaceholder = () => (
    <div className="image-placeholder"></div>
);

const OptimizedImage = ({ src, alt, className, height, onError }) => (
    <LazyLoad 
        height={height}
        once
        placeholder={<ImagePlaceholder />}
        offset={100}
        throttle={100}
    >
        <img 
            src={src} 
            alt={alt} 
            className={className}
            onError={onError}
            loading="lazy"
            decoding="async"
        />
    </LazyLoad>
);



const ServicesPage = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
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

    const handleServiceClick = useCallback((service) => {
        history.push('/service-gallery', { 
            selectedService: service.name 
        });
    }, [history]);

    const handleImageError = useCallback((e) => {
        e.target.src = ad;
    }, []);





    const renderServiceCard = useCallback((service, index) => (
        <div 
            key={index} 
            className="service-detailed-block glass-effect"
            onClick={() => handleServiceClick(service)}
            style={{ cursor: 'pointer' }}
        >
            <OptimizedImage 
                src={service.image}
                alt={service.name}
                className="service-detailed-image"
                height={200}
                onError={handleImageError}
            />
            <div className="service-detailed-content">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
            </div>
        </div>
    ), [handleImageError,handleServiceClick]);

    const renderSlideshow = useCallback((service) => (
        <div className="service-images">
            <OptimizedImage 
                src={images[service][currentImages[service]]}
                alt={`${service} ${currentImages[service] + 1}`}
                className={`large-image ${animationClass}`}
                height={340}
                onError={handleImageError}
            />
        </div>
    ), [images, currentImages, animationClass, handleImageError]);

    useEffect(() => {
        let mounted = true;
        
        const preloadImages = async () => {
            try {
                await Promise.all(
                    Object.values(images).flat().map(src => {
                        return new Promise((resolve) => {
                            const img = new Image();
                            img.src = src;
                            img.onload = resolve;
                            img.onerror = resolve; // Continue on error
                        });
                    })
                );
                if (mounted) setIsLoading(false);
            } catch (error) {
                console.error('Error preloading images:', error);
                if (mounted) setIsLoading(false);
            }
        };

        preloadImages();

        let slideshowInterval;
        if (!isLoading) {
            slideshowInterval = setInterval(() => {
                setAnimationClass('fade-out');
                setTimeout(() => {
                    if (mounted) {
                        setCurrentImages(prev => {
                            const newImages = { ...prev };
                            Object.keys(newImages).forEach(section => {
                                newImages[section] = (newImages[section] + 1) % images[section].length;
                            });
                            return newImages;
                        });
                        setAnimationClass('fade-in');
                    }
                }, 100);
            }, 2500);
        }

        return () => {
            mounted = false;
            clearInterval(slideshowInterval);
        };
    }, [images, isLoading]);

    

    if (isLoading) {
        return <div className="loading-container"><ImagePlaceholder /></div>;
    }

    return (
        <div className="services-page" id="top">
            <div className="services">
                <h2 className='services-link'>Our Comprehensive Services</h2>
                <div className="services-detailed-grid">
                    {servicesData.map((service, index) => renderServiceCard(service, index))}
                </div>
            </div>

            <div className="service-showcase">
                <h2>Our Specialized Services</h2>
                {['Photography', 'Videography', 'Frameworks', 'Artworks', 'Video Editing'].map((service, index) => (
                    <div key={index} className="service-section">
                        {renderSlideshow(service)}
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