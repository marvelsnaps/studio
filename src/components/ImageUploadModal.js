import React, { useState } from 'react';

const ImageUploadModal = ({ onClose, apiKey }) => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        setFiles([...e.target.files]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        files.forEach(file => {
            formData.append('images', file);
        });

        // Upload images to your GitHub repo
        const repo = 'newtest'; // Your repository name
        const owner = 'dineshraja03'; // Your GitHub username

        for (const file of files) {
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/src/components/images/${file.name}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `token ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: `Upload ${file.name}`,
                    content: await fileToBase64(file), // Convert file to base64
                }),
            });

            if (response.ok) {
                alert(`${file.name} uploaded successfully!`);
            } else {
                alert(`Failed to upload ${file.name}`);
            }
        }

        onClose();
    };

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = (error) => reject(error);
        });
    };

    return (
        <div className="modal">
            <h2>Upload Images</h2>
            <input type="file" multiple accept="image/png, image/jpeg" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default ImageUploadModal; 