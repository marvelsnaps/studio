import React, { useState } from 'react';
import './AdminPanel.css';
import ImageUploadModal from './ImageUploadModal';
import ImageRemoveModal from './ImageRemoveModal';

const AdminPanel = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [showRemoveModal, setShowRemoveModal] = useState(false);

    const GITHUB_API_KEY = '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'; // Your GitHub API key

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple authentication check
        if (username === 'a' && password === 'a') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
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
                </div>
            )}
            {showUploadModal && <ImageUploadModal onClose={() => setShowUploadModal(false)} apiKey={GITHUB_API_KEY} />}
            {showRemoveModal && <ImageRemoveModal onClose={() => setShowRemoveModal(false)} apiKey={GITHUB_API_KEY} />}
        </div>
    );
};

export default AdminPanel;
