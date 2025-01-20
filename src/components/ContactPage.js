import React, { useState } from 'react';
import './ContactPage.css';
import BookingPopup from './BookingPopup';
import { 
    FaInstagram, 
    FaYoutube, 
    FaWhatsapp, 
    FaPhone, 
    FaThreads,
    FaEnvelope 
} from 'react-icons/fa6';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const socialLinks = [
        {
            icon: <FaInstagram />,
            name: 'Instagram',
            link: 'https://instagram.com/marvelsnaps',
            color: '#000000'
        },
        {
            icon: <FaYoutube />,
            name: 'YouTube',
            link: 'https://youtube.com/marvelsnaps',
            color: '#000000'
        },
        {
            icon: <FaWhatsapp />,
            name: 'WhatsApp',
            link: 'https://wa.me/1234567890',
            color: '#000000'
        },
        {
            icon: <FaPhone />,
            name: 'Call Us',
            link: 'tel:+1234567890',
            color: '#000000'
        },
        {
            icon: <FaEnvelope />,
            name: 'Email',
            link: 'mailto:contact@marvelsnaps.com',
            color: '#000000'
        },
        {
            icon: <FaThreads />,
            name: 'Threads',
            link: 'https://threads.net/marvelsnaps',
            color: '#000000'
        }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add form submission logic
    };

    return (
        <div className="contact-page">
            <h2 className="title">Let’s Work Together</h2>
            
            <h3 className="subtitle">Ready to create beautiful memories? Contact us for more information or to book your session today!
            </h3>
            <BookingPopup isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
            <div className="contact-container">
                <div className="contact-section glass-effect">
                    <h2>Contact Marvel Snaps Studio</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Send Message</button>
                    </form>
                </div>

                <div className="social-media-section">
                    <h3>Connect With Us</h3>
                    <div className="social-media-buttons">
                        {socialLinks.map((social, index) => (
                            <a 
                                key={index} 
                                href={social.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-media-button"
                                style={{
                                    '--button-color': social.color
                                }}
                            >
                                {social.icon}
                                <span>{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="booking-section">
                <div className="booking-content">
                    <h2>Book Your Photoshoot</h2>
                    <p>Schedule your professional photography session with Marvel Snaps Studio</p>
                    <button type="button" onClick={() => setIsBookingOpen(true)}>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactPage; 