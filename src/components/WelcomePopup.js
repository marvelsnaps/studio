import React, { useState, useEffect } from 'react';
import './WelcomePopup.css';
import logo from './assets/logo-w.png';

const WelcomePopup = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
        }, 500);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleClose();
        }, 6000); // 12 seconds

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className={`ms-welcome-overlay ${isClosing ? 'ms-fade-out' : 'ms-fade-in'}`}>
            <div className="ms-welcome-popup ms-glass-effect">
                {/* <button className="ms-close-btn" onClick={handleClose}>&times;</button> */}
                <div className="ms-welcome-header">
                    <img src={logo} alt="Marvel Snaps" className="ms-welcome-logo" />
                    <h2 className="ms-welcome-title">Welcome to Marvel Snaps</h2>
                </div>
                <p className="ms-welcome-subtitle">Where Every Frame Tells a Story</p>
                <div className="ms-welcome-content">
                    <p className="ms-content-text">Capturing Life's Beautiful Moments</p>
                    <ul className="ms-services-list">
                        <li className="ms-service-item">✨ Wedding Photography</li>
                        <li className="ms-service-item">🎈 Events & Celebrations</li>
                        <li className="ms-service-item">👶 Baby Photography</li>
                        <li className="ms-service-item">🎭 Portrait Sessions</li>
                    </ul>
                </div>
                <button className="ms-start-btn" onClick={handleClose}>
                    Let's Begin
                </button>
            </div>
        </div>
    );
};

export default WelcomePopup;