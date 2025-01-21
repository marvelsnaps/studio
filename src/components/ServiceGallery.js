import React, { useState, useEffect } from 'react';
import './ServiceGallery.css';

// Wedding imports
import w1 from '../images/wedding/w1.jpeg';
import w2 from '../images/wedding/w2.jpeg';
import w3 from '../images/wedding/w4.jpeg';
import w4 from '../images/wedding/w5.jpeg';

// Model imports
import m1 from '../images/model/m1.jpeg';
import m2 from '../images/model/m2.jpeg';
import m3 from '../images/model/m3.jpeg';
import m4 from '../images/model/m4.jpeg';
import m5 from '../images/model/m5.jpeg';

// Pre & Post Wedding imports
// import pp1 from '../images/Pre and Post wedding/m1.jpeg';
// import pp2 from '../images/Pre and Post wedding/m2.jpeg';
import pp3 from '../images/Pre and Post wedding/m3.jpeg';
import pp4 from '../images/Pre and Post wedding/m4.jpeg';
import pp5 from '../images/Pre and Post wedding/m5.jpeg';
import pp6 from '../images/Pre and Post wedding/m6.jpeg';

// Portrait imports
import p1 from '../images/portraits/p1.jpeg';
import p4 from '../images/portraits/p2.jpeg';
// import p3 from '../images/portraits/p3.jpeg';
import p2 from '../images/portraits/p4.jpeg';
import p5 from '../images/portraits/p5.jpeg';

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

// Birthday imports
import bd1 from '../images/birthday/bd1.jpeg';
import bd2 from '../images/birthday/bd2.jpeg';
import bd3 from '../images/birthday/bd3.jpeg';
import bd4 from '../images/birthday/bd4.jpeg';
import bd5 from '../images/birthday/bd5.jpeg';


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

//drone imports

import drone1 from '../images/drone/d1.jpeg';
import drone2 from '../images/drone/d2.jpeg';
import drone3 from '../images/drone/d3.jpeg';
import drone4 from '../images/drone/d4.jpeg';
import drone5 from '../images/drone/d5.jpeg';


const galleryData = {
    wedding: [
        { id: 1, url: w1, title: 'Traditional Wedding' },
        { id: 2, url: w2, title: 'Modern Wedding' },
        { id: 3, url: w3, title: 'Wedding Ceremony' },
        { id: 4, url: w4, title: 'Reception' }
    ],
    prePostWedding: [
        // { id: 1, url: pp1, title: 'Pre-Wedding Shoot' },
        // { id: 2, url: pp2, title: 'Post-Wedding' },
        { id: 3, url: pp3, title: 'Couple Shoot' },
        { id: 4, url: pp4, title: 'Couple Shoot' },
        { id: 5, url: pp5, title: 'Couple Shoot' },
        { id: 6, url: pp6, title: 'Couple Shoot' }
    ],
    portrait: [
        { id: 1, url: p1, title: 'Studio Portrait' },
        { id: 2, url: p2, title: 'Outdoor Portrait' },
        // { id: 3, url: p3, title: 'Family Portrait' },
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
        { id: 12, url: b12}
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
        const preloadImages = async () => {
            const loaded = {};
            await Promise.all(
                Object.values(galleryData).flat().map(async (image) => {
                    try {
                        await new Promise((resolve) => {
                            const img = new Image();
                            img.src = image.url;
                            img.onload = resolve;
                            img.onerror = resolve;
                        });
                        loaded[image.id] = true;
                    } catch (error) {
                        console.error('Error loading image:', error);
                    }
                })
            );
            setIsLoading(false);
        };

        preloadImages();
    }, []);

    return (
        <div className="service-gallery">
            <h2 id='top' >Our Photography Portfolio</h2>
            <div className="gallery-content">
                {isLoading ? (
                    <div className="loading-spinner">loading . . .</div>
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