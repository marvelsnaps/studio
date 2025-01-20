import React, { useState, useEffect } from 'react';
import './ServiceGallery.css';

// Wedding imports
import w1 from '../images/wedding/w1.webp';
import w2 from '../images/wedding/w2.webp';
import w3 from '../images/wedding/w4.webp';
import w4 from '../images/wedding/w5.webp';

// Model imports
import m1 from '../images/model/webp/m1.webp';
import m2 from '../images/model/webp/m2.webp';
import m3 from '../images/model/webp/m3.webp';
import m4 from '../images/model/webp/m4.webp';
import m5 from '../images/model/webp/m5.webp';

// Pre & Post Wedding imports
import pp1 from '../images/Pre and Post wedding/m1.webp';
import pp2 from '../images/Pre and Post wedding/m2.webp';
import pp3 from '../images/Pre and Post wedding/m3.webp';
import pp4 from '../images/Pre and Post wedding/m5.webp';
import pp5 from '../images/Pre and Post wedding/m6.webp';
import pp6 from '../images/Pre and Post wedding/m7.webp';

// Portrait imports
import p1 from '../images/portraits/p1.webp';
import p4 from '../images/portraits/p2.webp';
import p3 from '../images/portraits/p3.webp';
import p2 from '../images/portraits/p4.webp';
import p5 from '../images/portraits/p5.webp';

// Baby imports
import b1 from '../images/baby/b1.webp';
import b2 from '../images/baby/b2.webp';
import b3 from '../images/baby/b3.webp';
import b4 from '../images/baby/b4.webp';
import b5 from '../images/baby/b5.webp';
// import b6 from '../images/baby/b6.webp';
import b7 from '../images/baby/b7.webp';
import b8 from '../images/baby/b8.webp';
import b9 from '../images/baby/b9.webp';
import b10 from '../images/baby/b10.webp';
import b11 from '../images/baby/b11.webp';

// Birthday imports
import bd1 from '../images/birthday/bd1.webp';
import bd2 from '../images/birthday/bd2.webp';
import bd3 from '../images/birthday/bd3.webp';
import bd4 from '../images/birthday/bd4.webp';
import bd5 from '../images/birthday/bd5.webp';


//corporate imports

import c1 from '../images/corp/c1.webp';
import c2 from '../images/corp/c2.webp';
import c3 from '../images/corp/c3.webp';
import c4 from '../images/corp/c4.webp';
import c5 from '../images/corp/c5.webp';

//candit imports

import candit1 from '../images/candit/c1.webp';
import candit2 from '../images/candit/c2.webp';
import candit3 from '../images/candit/c3.webp';
import candit4 from '../images/candit/c4.webp';

//drone imports

import drone1 from '../images/drone/d1.webp';
import drone2 from '../images/drone/d2.webp';
import drone3 from '../images/drone/d3.webp';
import drone4 from '../images/drone/d4.webp';
import drone5 from '../images/drone/d5.webp';


const galleryData = {
    wedding: [
        { id: 1, url: w1, title: 'Traditional Wedding' },
        { id: 2, url: w2, title: 'Modern Wedding' },
        { id: 3, url: w3, title: 'Wedding Ceremony' },
        { id: 4, url: w4, title: 'Reception' }
    ],
    prePostWedding: [
        { id: 1, url: pp1, title: 'Pre-Wedding Shoot' },
        { id: 2, url: pp2, title: 'Post-Wedding' },
        { id: 3, url: pp3, title: 'Couple Shoot' },
        { id: 4, url: pp4, title: 'Couple Shoot' },
        { id: 5, url: pp5, title: 'Couple Shoot' },
        { id: 6, url: pp6, title: 'Couple Shoot' }
    ],
    portrait: [
        { id: 1, url: p1, title: 'Studio Portrait' },
        { id: 2, url: p2, title: 'Outdoor Portrait' },
        { id: 3, url: p3, title: 'Family Portrait' },
        { id: 4, url: p4, title: 'Family Portrait' },
        { id: 5, url: p5, title: 'Family Portrait' }
    ],
    modelShoots: [
        { id: 1, url: m1, title: 'Fashion Photography' },
        { id: 2, url: m2, title: 'Portfolio Shoot' },
        { id: 3, url: m3, title: 'Editorial' },
        { id: 3, url: m4, title: 'Editorial' },
        { id: 3, url: m5, title: 'Editorial' }
    ],
    babyShoot: [
        { id: 8, url: b8, title: 'Baby Candid' },
        { id: 9, url: b9, title: 'Baby Candid' },
        { id: 10, url: b10, title: 'Baby Candid' },
        { id: 11, url: b11, title: 'Baby Candid' },
        { id: 1, url: b1, title: 'Baby Portrait' },
        { id: 2, url: b2, title: 'Family with Baby' },
        { id: 3, url: b3, title: 'Baby Candid' },
        { id: 4, url: b4, title: 'Baby Candid' },
        { id: 5, url: b5, title: 'Baby Candid' },
        // { id: 6, url: b6, title: 'Baby Portrait' },
        { id: 7, url: b7, title: 'Family with Baby' }
        
    ],
    birthday: [
        { id: 1, url: bd1, title: 'Birthday Party' },
        { id: 2, url: bd2, title: 'Cake Cutting' },
        { id: 3, url: bd3, title: 'Birthday Celebration' },
        { id: 4, url: bd4, title: 'Birthday Celebration' },
        { id: 5, url: bd5, title: 'Birthday Celebration' }
    ],
    corporate: [
        { id: 1, url: c1, title: 'Corporate Event' },
        { id: 2, url: c2, title: 'Corporate Event' },
        { id: 3, url: c3, title: 'Corporate Event' },
        { id: 4, url: c4, title: 'Corporate Event' },
        { id: 5, url: c5, title: 'Corporate Event' }
    ],
    candit: [
        { id: 1, url: candit1, title: 'Candid Photography' },
        { id: 2, url: candit2, title: 'Candid Photography' },
        { id: 3, url: candit3, title: 'Candid Photography' },
        { id: 4, url: candit4, title: 'Candid'}
    ],
    drone:[
        { id: 1, url: drone1, title: 'Drone Photography' },
        { id: 2, url: drone2, title: 'Drone Photography' },
        { id: 3, url: drone3, title: 'Drone Photography' },
        { id: 4, url: drone4, title: 'Drone Photography' },
        { id: 5, url: drone5, title: 'Drone Photography' }
    ]


};

const ServiceGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <div className="service-gallery">
            <h2>Our Photography Portfolio</h2>
            <div className="gallery-content">
                {isLoading ? (
                    <div className="loading-spinner">Loading...</div>
                ) : (
                    Object.entries(galleryData).map(([category, images]) => (
                        <section key={category} className="category-section">
                            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                            <div className="image-grid">
                                {images.map((image) => (
                                    <div 
                                        key={image.id} 
                                        className="image-card"
                                        onClick={() => setSelectedImage(image)}
                                    >
                                        <div className="image-wrapper">
                                            <img 
                                                src={image.url} 
                                                alt={image.title} 
                                                loading="lazy"
                                            />
                                            <div className="image-overlay">
                                                <h3>{image.title}</h3>
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
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <span className="close">&times;</span>
                    <img src={selectedImage.url} alt={selectedImage.title} />
                    <h3>{selectedImage.title}</h3>
                </div>
            )}
        </div>
    );
};

export default ServiceGallery;