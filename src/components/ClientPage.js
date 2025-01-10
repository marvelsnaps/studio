import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ClientPage.css'; // Ensure this CSS file is imported

const ClientPage = () => {
    const [images, setImages] = useState([]);
    const folderId = '1GQqf6vMEaXxzh5KKFFPyVtdQbVTGi6tT'; // Your Google Drive folder ID
    const apiKey = 'AIzaSyChK8djb8OAlHPMCtb2iGk7-erKmrVMbkA'; // Your API key

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`);
                console.log('API Response:', response.data); // Log the response

                const imageFiles = response.data.files.map(file => ({
                    id: file.id,
                    name: file.name,
                    url: `https://drive.google.com/uc?id=${file.id}` // Direct link to the image
                }));

                console.log('Image URLs:', imageFiles.map(image => image.url)); // Log the image URLs
                setImages(imageFiles);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [folderId, apiKey]);

    return (
        <div className="client-page">
            <h2>Client Photos</h2>
            <div className="image-grid">
                {images.length > 0 ? ( // Check if images are available
                    images.map(image => (
                        <div className="image-item" key={image.id}>
                            <img src={image.url} alt={image.name} loading="lazy" /> {/* Ensure the image URL is correct */}
                        </div>
                    ))
                ) : (
                    <p>No images available.</p> // Message if no images are found
                )}
            </div>
        </div>
    );
};

export default ClientPage; 