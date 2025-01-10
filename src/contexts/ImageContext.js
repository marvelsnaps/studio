import React, { createContext, useEffect, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null); // State to hold error messages

    const GITHUB_API_KEY = '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'; // Your GitHub API key
    const repo = 'newtest'; // Your repository name
    const owner = 'dineshraja03'; // Your GitHub username

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/src/components/images`, {
                    headers: {
                        'Authorization': `token ${GITHUB_API_KEY}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                const imageUrls = data.map(image => ({
                    name: image.name,
                    src: image.download_url, // Use the download URL for the image
                    alt: image.name,
                }));
                setImages(imageUrls);
            } catch (err) {
                setError(err.message); // Set error message
                console.error("Failed to fetch images:", err);
            }
        };

        fetchImages();
    }, [GITHUB_API_KEY, repo, owner]);

    return (
        <ImageContext.Provider value={{ images, error }}>
            {children}
        </ImageContext.Provider>
    );
};