import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { ImageContext } from '../contexts/ImageContext'; // Import the context
import './Gallery.css';

const Gallery = () => {
    const { images } = useContext(ImageContext); 

    // Determine the number of images to display based on screen size
    const isMobile = window.innerWidth <= 860; // Check if the screen width is 768px or less
    const isLaptop = window.innerWidth > 860 && window.innerWidth <= 2440; // Check if the screen width is between 768px and 1024px
    let displayedImages;

    if (isMobile) {
        displayedImages = images.slice(0, 4); // Show only 4 images on mobile
    } else if (isLaptop) {
        displayedImages = images.slice(0, 8); // Show only 10 images on laptop
    } else {
        displayedImages = images; // Show all images on larger screens
    }

    return (
        <div className="gallery-section">
            <h2>Gallery</h2>
            <h3>A Collection of Memorable Moments</h3>
            <div className="gallery-grid">
                {displayedImages.length > 0 ? (
                    displayedImages.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                loading="lazy" // Enable lazy loading
                            />
                        </div>
                    ))
                ) : (
                    <p>No images available.</p>
                )}
            </div>
            <Link to="/gallery" className="view-more-button">View More</Link> {/* View More button */}
        </div>
    );
};

export default Gallery; 