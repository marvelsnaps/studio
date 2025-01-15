import React, { createContext, useEffect, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null); // State to hold error messages

    useEffect(() => {
        const importAll = (r) => r.keys().map(r);
        try {
            const images = importAll(require.context('../components/images', false, /\.(png|jpe?g|svg|gif|mp4)$/));
            const imageUrls = images.map((image, index) => ({
                name: `Image ${index + 1}`,
                src: image, // Ensure image.default is used
                alt: `Image ${index + 1}`,
            }));
            setImages(imageUrls);
        } catch (err) {
            setError(err.message); // Set error message
            console.error("Failed to fetch images:", err);
        }
    }, []);

    return (
        <ImageContext.Provider value={{ images, error }}>
            {children}
        </ImageContext.Provider>
    );
};