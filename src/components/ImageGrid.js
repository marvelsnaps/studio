import React, { useState, useEffect } from 'react';
import { Octokit } from '@octokit/rest';
import './ImageGrid.css';

const ImageGrid = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deletedImages, setDeletedImages] = useState(new Set());

    const fetchImages = async () => {
        try {
            const octokit = new Octokit({
                auth: process.env.REACT_APP_GITHUB_TOKEN
            });

            const response = await octokit.repos.getContent({
                owner: 'Dineshraja03',
                repo: 'demo',
                path: 'src/components/images'
            });

            const imageFiles = response.data.filter(file => 
                file.type === 'file' && 
                /\.(jpg|jpeg|png|gif)$/i.test(file.name)
            );

            setImages(imageFiles);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
        setLoading(false);
    };

    const handleDelete = async (filename, sha) => {
        try {
            setDeletedImages(prev => new Set([...prev, filename]));
            
            const octokit = new Octokit({
                auth: process.env.REACT_APP_GITHUB_TOKEN
            });

            await octokit.repos.deleteFile({
                owner: 'Dineshraja03',
                repo: 'demo',
                path: `src/components/images/${filename}`,
                message: `Delete ${filename}`,
                sha: sha
            });
        } catch (error) {
            console.error('Delete error:', error);
            setDeletedImages(prev => {
                const newSet = new Set([...prev]);
                newSet.delete(filename);
                return newSet;
            });
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    if (loading) return <div>Loading images...</div>;

    return (
        <div className="image-grid">
            {images.map(image => (
                <div key={image.sha} className={`image-item ${deletedImages.has(image.name) ? 'deleted' : ''}`}>
                    <img 
                        src={`https://raw.githubusercontent.com/Dineshraja03/demo/main/src/components/images/${image.name}`}
                        alt={image.name} 
                    />
                    <button 
                        onClick={() => handleDelete(image.name, image.sha)}
                        disabled={deletedImages.has(image.name)}
                    >
                        {deletedImages.has(image.name) ? 'Deleted!' : 'Delete'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;