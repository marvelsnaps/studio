import React, { useState } from 'react';
import { Octokit } from '@octokit/rest';
import './ImageUploader.css';

const ImageUploader = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState({});

  const handleFileSelect = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const convertToBase64 = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    setUploading(true);

    try {
      const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_TOKEN
      });

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        setProgress(prev => ({
          ...prev,
          [file.name]: 'uploading'
        }));

        const base64Content = await convertToBase64(file);

        await octokit.repos.createOrUpdateFileContents({
          owner: 'marvelsnaps',
          repo: 'studio',
          path: `src/components/images/${file.name}`,
          message: `Upload image: ${file.name}`,
          content: base64Content,
          branch: 'main'
        });

        setProgress(prev => ({
          ...prev,
          [file.name]: 'completed'
        }));
      }

      alert('All images uploaded successfully!');
      setFiles([]);
      setProgress({});
    } catch (error) {
      console.error('Upload failed:', error);
      alert(`Upload failed: ${error.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="image-uploader">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileSelect}
        disabled={uploading}
      />
      <div className="preview-container">
        {files.map(file => (
          <div key={file.name} className="file-item">
            <span>{file.name}</span>
            <span className="status">
              {progress[file.name] === 'uploading' ? '⌛' : 
               progress[file.name] === 'completed' ? '✅' : ''}
            </span>
          </div>
        ))}
      </div>
      <button 
        onClick={handleUpload}
        disabled={files.length === 0 || uploading}
      >
        {uploading ? `Uploading (${Object.values(progress).filter(p => p === 'completed').length}/${files.length})` : 'Upload Files'}
      </button>
    </div>
  );
};

export default ImageUploader;