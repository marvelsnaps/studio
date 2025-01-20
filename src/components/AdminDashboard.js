import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import ImageGrid from './ImageGrid';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('gallery');

    return (
        <div className="admin-dashboard">
            <nav className="admin-nav">
                <button 
                    className={activeTab === 'gallery' ? 'active' : ''} 
                    onClick={() => setActiveTab('gallery')}
                >
                    Gallery Management
                </button>
                <button onClick={() => {
                    localStorage.removeItem('isAuthenticated');
                    window.location.reload();
                }}>Logout</button>
            </nav>
            
            <div className="admin-content">
                {activeTab === 'gallery' && (
                    <div className="gallery-management">
                        <ImageUploader />
                        <ImageGrid />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;