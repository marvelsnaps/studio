import React from 'react';
import './ImageRemoveModal.css';

const ImageRemoveModal = ({ onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Remove Image</h2>
                <p>Select an image to remove from the admin panel.</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ImageRemoveModal;