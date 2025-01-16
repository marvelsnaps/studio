import React, { useState, useContext } from 'react';
import axios from 'axios';
import './AdminPanel.css';
import ImageUploadModal from './ImageUploadModal';
import ImageRemoveModal from './ImageRemoveModal';
import { ImageContext } from '../contexts/ImageContext';

const AdminPanel = () => {
    const { images, setImages } = useContext(ImageContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [showRemoveModal, setShowRemoveModal] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple authentication check
        if (username === 'a' && password === 'a') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    const handleAddImage = async (newImage) => {
        try {
            const response = await axios.put(
                `https://api.github.com/repos/dineshraja03/demo/contents/src/components/images/${newImage.name}`,
                {
                    message: `Add ${newImage.name}`,
                    content: newImage.content, // Base64 encoded content
                },
                {
                    headers: {
                        Authorization: `token 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`,
                    },
                }
            );
            setImages([...images, { src: response.data.content.download_url, alt: newImage.name }]);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleRemoveImage = async (index) => {
        const image = images[index];
        try {
            const response = await axios.get(
                `https://api.github.com/repos/dineshraja03/demo/contents/src/components/images/${image.alt}`,
                {
                    headers: {
                        Authorization: `token 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`,
                    },
                }
            );
            await axios.delete(
                `https://api.github.com/repos/dineshraja03/demo/contents/src/components/images/${image.alt}`,
                {
                    data: {
                        message: `Delete ${image.alt}`,
                        sha: response.data.sha,
                    },
                    headers: {
                        Authorization: `token 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`,
                    },
                }
            );
            const updatedImages = images.filter((_, i) => i !== index);
            setImages(updatedImages);
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    const handleReorderImages = (startIndex, endIndex) => {
        const result = Array.from(images);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        setImages(result);
    };

    return (
        <div className="admin-panel">
            {!isLoggedIn ? (
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            ) : (
                <div>
                    <h2>Admin Panel</h2>
                    <button onClick={() => setShowUploadModal(true)}>Upload Images</button>
                    <button onClick={() => setShowRemoveModal(true)}>Remove Images</button>
                    <div className="image-list">
                        {images.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.src} alt={image.alt} />
                                <button onClick={() => handleRemoveImage(index)}>Delete</button>
                                <button onClick={() => handleReorderImages(index, index - 1)}>Move Up</button>
                                <button onClick={() => handleReorderImages(index, index + 1)}>Move Down</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {showUploadModal && <ImageUploadModal onClose={() => setShowUploadModal(false)} onAddImage={handleAddImage} />}
            {showRemoveModal && <ImageRemoveModal onClose={() => setShowRemoveModal(false)} />}
        </div>
    );
};

export default AdminPanel;
