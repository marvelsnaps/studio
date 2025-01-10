import React from 'react';
import './BookingPopup.css';

const PhotoSelectionPopup = ({ isOpen, onClose, photoPaths, selectedPhotos, togglePhotoSelection }) => {
    if (!isOpen) return null;

    return (
        <div className="photo-selection-popup-overlay">
            <div className="photo-selection-popup">
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>Select Photos</h2>
                <div className="dropdown-options grid">
                    {Object.keys(photoPaths).map(photo => (
                        <div 
                            key={photo} 
                            className="dropdown-option" 
                            onClick={() => togglePhotoSelection(photo)}
                        >
                            <img src={photoPaths[photo]} alt={photo} className="photo-option" />
                            <span className={`tick ${selectedPhotos.includes(photo) ? 'selected' : ''}`}>
                                ✓
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhotoSelectionPopup; 