import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h3>Marvel Snaps</h3>
                    <div className="social-links">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/marvel_snaps_official" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://wa.me/+918098449639" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Info</h4>
                    <p>
                        <span className="contact-icon">📞</span>
                        <span className="contact-text">
                            <a href="tel:+918098449639">+91 8098449639</a>
                        </span>
                    </p>
                    <p>
                        <span className="contact-icon">✉️</span>
                        <span className="contact-text">
                            <a href="mailto:marvelsnapsnpk@gmail.com">marvelsnapsnpk@gmail.com</a>
                        </span>
                    </p>
                    <p>
                        <Link to="/contact#location" className="location-link">
                            <span className="contact-icon">📍</span>
                            <span className="contact-text">
                                #2, Bathrakalaiyamman kovil complex, 
                                Kolumam main road, neikkarapatti, 
                                palani.624615
                            </span>
                        </Link>
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-p">© 2024 copyright Marvel Snaps. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;