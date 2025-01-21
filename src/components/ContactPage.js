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
            link: 'https://instagram.com/marvel_snaps_official',
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
            link: 'https://wa.me/8098449639',
            color: '#000000'
        },
        {
            icon: <FaPhone />,
            name: 'Call Us',
            link: 'tel:8098449639',
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

    const studioLocation = {
        address: "#2, Bathrakalaiyamman kovil complex,Kolumam main road, neikkarapatti,palani.624615",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1731.2651358511234!2d77.46333853765884!3d10.444507641246968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI2JzQyLjIiTiA3N8KwMjcnNTAuNyJF!5e1!3m2!1sen!2sin!4v1737446585601!5m2!1sen!2sin"  // Replace with your studio's embed URL
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

                <div className="location-section glass-effect">
                    <h2>Visit Our Studio</h2>
                    <p className="studio-address">{studioLocation.address}</p>
                    <div className="map-container">
                        <iframe
                            src={studioLocation.mapUrl}
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Studio Location"
                        ></iframe>
                    </div>
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