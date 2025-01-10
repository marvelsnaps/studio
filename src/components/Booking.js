import React from 'react';
import { Link } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    return (
        <div className="booking-section">
            <div className="booking-content">
                <h2>Book Your Photoshoot</h2>
                <p>Schedule your professional photography session with Marvel Snaps Studio</p>
                <Link to="/booking" className="book-now-btn">Book Now</Link>
            </div>
        </div>
    );
};

export default Booking; 