import React, { useState } from 'react';
import './BookNow.css';
import BookingPopup from './BookingPopup';
// import { Link } from 'react-router-dom';

const BookNowButton = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const handleBookNow = () => {
        setIsBookingOpen(true);
    };

    return (
        <><div className="book-now-section">
        <div className="container">
            <h2>Ready to Capture Your Moments?</h2>
            <p>Let's create beautiful memories together</p>
            <button onClick={handleBookNow} className="book-now-button">
                Book Now
            </button>
            <BookingPopup 
                isOpen={isBookingOpen} 
                onClose={() => setIsBookingOpen(false)} 
            />
              </div>
              </div>
        </>
    );
};
export default BookNowButton;