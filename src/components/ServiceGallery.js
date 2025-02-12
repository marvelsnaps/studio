import React, { useState, useEffect , useCallback} from 'react';
import './ServiceGallery.css';
import { useLocation } from 'react-router-dom';

// Wedding imports
import w1 from '../images/wedding/w1.jpeg';
import w2 from '../images/wedding/w2.jpeg';
import w3 from '../images/wedding/w4.jpeg';
import w4 from '../images/wedding/w5.jpeg';
import w5 from '../images/wedding/w6.JPG';
import w6 from '../images/wedding/w7.JPG';
// import w7 from '../images/wedding/w8.JPG';

// Model imports
import m1 from '../images/model/m1.jpg';
import m2 from '../images/model/m2.jpg';
import m3 from '../images/model/m3.jpg';
import m4 from '../images/model/m4.jpg';
import m5 from '../images/model/m5.jpeg';
import m6 from '../images/model/m6.jpeg';
import m7 from '../images/model/m7.jpeg';
import m8 from '../images/model/m8.jpeg';
import m9 from '../images/model/m9.jpeg';

// Pre & Post Wedding imports
// import pp1 from '../images/Pre and Post wedding/m1.jpeg';
import pp2 from '../images/Pre and Post wedding/m2.JPG';
import pp3 from '../images/Pre and Post wedding/m3.jpeg';
import pp4 from '../images/Pre and Post wedding/m4.jpeg';
import pp5 from '../images/Pre and Post wedding/m5.jpeg';
import pp6 from '../images/Pre and Post wedding/m6.jpeg';

// Portrait imports
import p1 from '../images/portraits/p1.jpeg';
import p4 from '../images/portraits/p2.jpeg';
import p3 from '../images/portraits/p3.jpg';
import p2 from '../images/portraits/p4.jpeg';
import p5 from '../images/portraits/p5.jpeg';
import p6 from '../images/portraits/p6.jpg';
import p7 from '../images/portraits/p7.JPG';

// Baby imports
import b1 from '../images/baby/b1.jpeg';
import b2 from '../images/baby/b2.jpeg';
import b3 from '../images/baby/b3.jpeg';
import b4 from '../images/baby/b4.jpeg';
import b5 from '../images/baby/b5.jpeg';
import b6 from '../images/baby/b6.jpeg';
import b7 from '../images/baby/b7.jpeg';
import b8 from '../images/baby/b8.jpeg';
import b9 from '../images/baby/b9.jpeg';
import b10 from '../images/baby/b10.jpeg';
import b11 from '../images/baby/b11.jpeg';
import b12 from '../images/baby/b12.jpeg';
import b13 from '../images/baby/b13.JPG';
import b14 from '../images/baby/b14.jpg';
import b15 from '../images/baby/b15.jpg';
import b16 from '../images/baby/b16.JPG';
import b17 from '../images/baby/b17.JPG';
import b18 from '../images/baby/b18.JPG';
import b19 from '../images/baby/b19.JPG';
import b20 from '../images/baby/b20.JPG';

// Birthday imports
import bd1 from '../images/birthday/bd1.jpeg';
import bd2 from '../images/birthday/bd2.jpeg';
import bd3 from '../images/birthday/bd3.jpeg';
import bd4 from '../images/birthday/bd4.jpeg';
import bd5 from '../images/birthday/bd5.jpeg';
import bd6 from '../images/birthday/bd6.jpeg';
import bd7 from '../images/birthday/bd7.jpeg';
import bd8 from '../images/birthday/bd8.jpeg';


//corporate imports

import c1 from '../images/corp/c1.jpeg';
import c2 from '../images/corp/c2.jpeg';
import c3 from '../images/corp/c3.jpeg';
import c4 from '../images/corp/c4.jpeg';
import c5 from '../images/corp/c5.jpeg';

//candit imports

import candit1 from '../images/candit/c1.jpeg';
import candit2 from '../images/candit/c2.jpeg';
import candit3 from '../images/candit/c3.jpeg';
import candit4 from '../images/candit/c4.jpeg';
import candit5 from '../images/candit/c5.jpg';
import candit6 from '../images/candit/c6.JPG';
import candit7 from '../images/candit/c7.JPG'; 
import candit8 from '../images/candit/c8.jpg';
import candit9 from '../images/candit/c9.jpg';
import candit10 from '../images/candit/c10.jpg';

//drone imports

import drone1 from './videos/drone.mp4';
import drone2 from '../images/drone/d2.jpeg';
import drone3 from '../images/drone/d3.jpeg';
import drone4 from '../images/drone/d4.jpeg';
import drone5 from '../images/drone/d5.jpeg';

//baby shower import

import bs1 from '../images/baby shower/bs1.jpg';
import bs2 from '../images/baby shower/bs2.jpg';
import bs3 from '../images/baby shower/bs3.JPG';
import bs4 from '../images/baby shower/bs4.JPG';
import bs5 from '../images/baby shower/bs5.JPG';

// Add these imports at the top with other imports
import ad1 from './videos/ad.webm';
// import ad2 from '../images/edit.mp4';/

const galleryData = {
    wedding: [
        { id: 1, url: w1, title: 'Traditional Wedding' },
        { id: 2, url: w2, title: 'Traditional Wedding' },
        { id: 3, url: w3, title: 'Wedding Ceremony' },
        { id: 4, url: w4, title: 'Traditional Wedding' },
        { id: 5, url: w5, title: 'Wedding Ceremony' },
        { id: 6, url: w6, title: 'Wedding Ceremony' },
    ],
    prePostWedding: [
        // { id: 1, url: pp1, title: 'Pre-Wedding Shoot' },
        { id: 2, url: pp2, title: 'Post-Wedding' },
        { id: 3, url: pp3, title: 'Couple Shoot' },
        { id: 4, url: pp4, title: 'Couple Shoot' },
        { id: 5, url: pp5, title: 'Couple Shoot' },
        { id: 6, url: pp6, title: 'Couple Shoot' }
    ],
    babyshower:[
        {id: 1, url: bs1, title: 'Baby Shower'},
        {id: 2, url: bs2, title: 'Baby Shower'},
        {id: 3, url: bs3, title: 'Baby Shower'},
        {id: 4, url: bs4, title: 'Baby Shower'},
        {id: 5, url: bs5, title: 'Baby Shower'}

    ],
    candid: [
        { id: 1, url: candit1, title: 'Candid Photography' },
        { id: 2, url: candit2, title: 'Candid Photography' },
        { id: 3, url: candit3, title: 'Candid Photography' },
        { id: 4, url: candit4, title: 'Candid'},
        { id: 5, url: candit5, title: 'Candid'},
        { id: 6, url: candit6, title: 'Candid'},
        { id: 7, url: candit7, title: 'Candid'},
        { id: 8, url: candit8, title: 'Candid'},
        { id: 9, url: candit9, title: 'Candid'},
        { id: 10, url: candit10, title: 'Candid'}
    ],
    portrait: [
        { id: 1, url: p1, title: 'Portrait' },
        { id: 2, url: p2, title: 'Portrait' },
        { id: 3, url: p3, title: 'Portrait' },
        { id: 4, url: p4, title: 'Portrait' },
        { id: 5, url: p5, title: 'Portrait' },
        { id: 6, url: p6, title: 'Wedding Portrait' },
        { id: 7, url: p7, title: 'Portrait' }
    ],
    modelShoots: [
        { id: 1, url: m1, title: 'Fashion Photography' },
        { id: 2, url: m2, title: 'Model Shoot' },
        { id: 3, url: m3, title: 'Model Shoot' },
        { id: 4, url: m4, title: 'Model Shoot' },
        { id: 5, url: m5, title: 'Model Shoot' },
        { id: 6, url: m6, title: 'Model Shoot' },
        { id: 7, url: m7, title: 'Model Shoot' },
        { id: 8, url: m8, title: 'Model Shoot' },
        { id: 9, url: m9, title: 'Model Shoot' },

    ],
    babyShoot: [
       
        { id: 1, url: b1, title: 'Baby Portrait' },
        { id: 2, url: b2, title: 'Family with Baby' },
        { id: 3, url: b3, title: 'Baby Candid' },
        { id: 4, url: b4, title: 'Baby Candid' },
        { id: 5, url: b5, title: 'Baby Candid' },
        { id: 6, url: b6, title: 'Family with Baby' },
        { id: 7, url: b7, title: 'Baby Candid' },
        { id: 8, url: b8, title: 'Baby Candid' },
        { id: 9, url: b9, title: 'Baby Candid' },
        { id: 10, url: b10, title: 'Baby Candid' },
        { id: 11, url: b11},
        { id: 12, url: b12},
        { id: 13, url: b13},
        { id: 14, url: b14},
        { id: 15, url: b15},
        { id: 16, url: b16},
        { id: 17, url: b17},
        { id: 18, url: b18},
        { id: 19, url: b19},
        { id: 20, url: b20}
    ],
    birthday: [
        { id: 1, url: bd1, title: 'Birthday Party' },
        { id: 2, url: bd2, title: 'Cake Cutting' },
        { id: 3, url: bd3, title: 'Birthday Celebration' },
        { id: 4, url: bd4, title: 'Birthday Celebration' },
        { id: 5, url: bd5, title: 'Birthday Celebration' },
        { id: 6, url: bd6, title: 'Birthday Celebration' },
        { id: 7, url: bd7, title: 'Birthday Celebration' },
        { id: 8, url: bd8, title: 'Birthday Celebration' }
    ],
    corporate: [
        { id: 1, url: c1, title: 'Corporate Event' },
        { id: 2, url: c2, title: 'Corporate Event' },
        { id: 3, url: c3, title: 'Corporate Event' },
        { id: 4, url: c4, title: 'Corporate Event' },
        { id: 5, url: c5, title: 'Corporate Event' }
    ],
    
    drone:[
        { id: 1, url: drone1, title: 'Drone Videography', type: 'video' },
        { id: 2, url: drone2, title: 'Drone Photography' },
        { id: 3, url: drone3, title: 'Drone Photography' },
        { id: 4, url: drone4, title: 'Drone Photography' },
        { id: 5, url: drone5, title: 'Drone Photography' }
    ],

    adFilms: [
        { 
            id: 1, 
            url: ad1, 
            title: 'Hi-Tech Collections',
            type: 'video'
        },
        // { 
        //     id: 2, 
        //     url: ad2, 
        //     title: 'Product Advertisement',
        //     type: 'video'
        // }
    ]

};


const ServiceGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentCategory, setCurrentCategory] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const preloadImages = async () => {
            try {
                await Promise.all(
                    Object.values(galleryData).flat().map(image => {
                        return new Promise((resolve) => {
                            const img = new Image();
                            img.src = image.url;
                            img.onload = resolve;
                            img.onerror = resolve;
                        });
                    })
                );
                setIsLoading(false);
            } catch (error) {
                console.error('Error preloading images:', error);
                setIsLoading(false);
            }
        };
        preloadImages();
    }, []);

    useEffect(() => {
        if (location.state?.selectedCategory && !isLoading) {
            const element = document.getElementById(location.state.selectedCategory);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location.state, isLoading]);

    useEffect(() => {
        const handleNavigation = (direction) => {
            if (!currentCategory || !selectedImage) return;
            
            const currentImages = galleryData[currentCategory];
            let newIndex = currentImageIndex + direction;
            
            if (newIndex < 0) newIndex = currentImages.length - 1;
            if (newIndex >= currentImages.length) newIndex = 0;
            
            setCurrentImageIndex(newIndex);
            setSelectedImage(currentImages[newIndex]);
        };

        const handleKeyPress = (e) => {
            if (!selectedImage) return;
            if (e.key === 'ArrowRight') handleNavigation(1);
            if (e.key === 'ArrowLeft') handleNavigation(-1);
            if (e.key === 'Escape') setSelectedImage(null);
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selectedImage, currentImageIndex, currentCategory]);

    const openModal = (image, category, index) => {
        setSelectedImage(image);
        setCurrentCategory(category);
        setCurrentImageIndex(index);
    };

    const handleNavClick = useCallback((direction) => {
        if (!currentCategory) return;
        
        const currentImages = galleryData[currentCategory];
        let newIndex = currentImageIndex + direction;
        
        if (newIndex < 0) newIndex = currentImages.length - 1;
        if (newIndex >= currentImages.length) newIndex = 0;
        
        setCurrentImageIndex(newIndex);
        setSelectedImage(currentImages[newIndex]);
    }, [currentCategory, currentImageIndex]);

    return (
        <div className="service-gallery">
            <h2 id='top'>Our Photography Portfolio</h2>
            <div className="gallery-content">
                {isLoading ? (
                    <div className="loading-spinner">loading . . .</div>
                ) : (
                    Object.entries(galleryData).map(([category, images]) => (
                        <section key={category} className="category-section" id={category}>
                            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                            <div className="image-grid">
                                {images.map((image, index) => (
                                    <div 
                                        key={image.id} 
                                        className="image-card"
                                        onClick={() => openModal(image, category, index)}
                                    >
                                        <div className="image-wrapper">
                                            {image.type === 'video' ? (
                                                <video 
                                                    src={image.url}
                                                    alt={image.title}
                                                    controls
                                                    autoPlay
                                                    loop
                                                    muted
                                                    preload="metadata"
                                                    className="video-preview"
                                                />
                                            ) : (
                                                <img 
                                                    src={image.url} 
                                                    alt={image.title} 
                                                    loading="lazy"
                                                />
                                            )}
                                            <div className="image-overlay">
                                                <h4>{image.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))
                )}
            </div>

            {selectedImage && (
                <div className="modal" onClick={(e) => {
                    if (e.target.className === 'modal') {
                        setSelectedImage(null);
                    }
                }}>
                    <span className="close" onClick={() => setSelectedImage(null)}>&times;</span>
                    {selectedImage.type === 'video' ? (
                        <video 
                            src={selectedImage.url}
                            controls
                            autoPlay
                            className="modal-video"
                        />
                    ) : (
                        <>
                            <button className="nav-btn prev" onClick={(e) => {
                                e.stopPropagation();
                                handleNavClick(-1);
                            }}>
                                &#10094;
                            </button>
                            <img src={selectedImage.url} alt={selectedImage.title} />
                            <button className="nav-btn next" onClick={(e) => {
                                e.stopPropagation();
                                handleNavClick(1);
                            }}>
                                &#10095;
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ServiceGallery;