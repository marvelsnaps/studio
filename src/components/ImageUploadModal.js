import React, { useState } from 'react';
import './ImageUploadModal.css';

const ImageUploadModal = ({ onClose, onAddImage }) => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage({
                name: file.name,
                content: reader.result.split(',')[1], // Base64 encoded content
            });
        };
        reader.readAsDataURL(file);
    };

    const handleUpload = () => {
        if (image) {
            onAddImage(image);
            onClose();
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Upload Image</h2>
                <input type="file" onChange={handleImageChange} />
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    );
};

export default ImageUploadModal;