import React, { useState, useContext, useEffect } from 'react';
// import BookNowButton from './BookNowButton';
import './GalleryPage.css';
import { ImageContext } from '../contexts/ImageContext';

const GalleryPage = () => {
    const { images } = useContext(ImageContext);
    const [selectedImage, setSelectedImage] = useState(null);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <div className="gallery-page">
            <div className="gallery-hero">
                <h1 className={`fade-in ${animate ? 'visible' : ''}`}>
                    Our Masterpiece Collection
                </h1>
                <p className={`fade-in ${animate ? 'visible' : ''}`}>
                    Where Every Frame Tells a Story
                </p>
            </div>

            <div className="gallery-section">
                <div className="masonry-grid">
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className={`gallery-item fade-in ${animate ? 'visible' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="image-wrapper">
                                <img src={image.src} alt={image.alt} loading="lazy" />
                                <div className="image-overlay">
                                    <div className="image-info">
                                        <h3>{image.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="modal" onClick={() => setSelectedImage(null)}>
                    <span className="close-modal">&times;</span>
                    <img src={selectedImage.src} alt={selectedImage.alt} />
                    <div className="modal-caption">
                        <h3>{selectedImage.title}</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;