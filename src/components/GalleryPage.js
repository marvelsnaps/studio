import React, { useContext } from 'react';
import BookNowButton from './BookNowButton';
import './GalleryPage.css';
import { ImageContext } from '../contexts/ImageContext'; // Import the context

const GalleryPage = () => {
    const { images } = useContext(ImageContext); // Get images from context

    return (
        <div className="gallery-page">
            <div className="gallery-section">
                <h2>Extensive Gallery</h2>
                <h3>A Collection of Memorable Moments</h3>
                <div className="gallery-detailed-grid">
                    {images.length > 0 ? (
                        images.map((image, index) => (
                            <div key={index} className="gallery-detailed-item glass-effect">
                                <div className="gallery-image-container">
                                    <img 
                                        src={image.src} 
                                        alt={image.alt} 
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No images available.</p>
                    )}
                </div>
            </div>
            <div className="booking-section">
                <h2>Book Your Photoshoot</h2>
                <p>Schedule your professional photography session with Marvel Snaps Studio</p>
                <BookNowButton />
            </div>
        </div>
    );
};

export default GalleryPage; 