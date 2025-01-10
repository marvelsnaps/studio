import React, { useEffect, useState } from 'react';

const ImageRemoveModal = ({ onClose, apiKey }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch images from GitHub repo
        const fetchImages = async () => {
            const repo = 'newtest'; // Your repository name
            const owner = 'dineshraja03'; // Your GitHub username
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/src/components/images`, {
                headers: {
                    'Authorization': `token ${apiKey}`,
                },
            });
            const data = await response.json();
            setImages(data);
        };
        fetchImages();
    }, [apiKey]);

    const handleRemove = async (imageName) => {
        const repo = 'newtest'; // Your repository name
        const owner = 'dineshraja03'; // Your GitHub username

        // Get the SHA of the file to delete
        const fileResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/src/components/images/${imageName}`, {
            headers: {
                'Authorization': `token ${apiKey}`,
            },
        });
        const fileData = await fileResponse.json();

        // Delete the file
        const deleteResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/src/components/images/${imageName}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `token ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: `Delete ${imageName}`,
                sha: fileData.sha,
            }),
        });

        if (deleteResponse.ok) {
            alert(`${imageName} removed successfully!`);
            onClose();
        } else {
            alert(`Failed to remove ${imageName}`);
        }
    };

    return (
        <div className="modal">
            <h2>Remove Images</h2>
            <ul>
                {images.map((image) => (
                    <li key={image.name}>
                        {image.name}
                        <button onClick={() => handleRemove(image.name)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default ImageRemoveModal; 