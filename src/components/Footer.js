import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Ensure you have the CSS file for styling
import logo from './assets/logo2.png';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Logo" /> {/* Replace with your logo path */}
                    <p className="footer-p">Marvel Snaps studio, Palani's best studio, captures life's beauty to create timeless memories you'll treasure forever.</p>
                </div>
                <div className="footer-links">
                    <h4>Navigation Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                {/* <div className="footer-links">
                    <h4>Important Links</h4>
                    <ul>
                        <li>Get a Quote</li>
                        <li>Chat with an Expert</li>
                        <li>WhatsApp Chat Support</li>
                    </ul>
                </div> */}
                <div className="footer-contact">
                    <h4>Contact Info</h4>
                    <p>📞 +91 8098449639</p>
                    <p>✉️ marvelsnapsnpk@gmail</p>
                    <p>📍 location</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-p">© 2024 copyright Marvel Snaps studio. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer; 