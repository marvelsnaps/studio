import React, { useState } from 'react';
import BookingPopup from './BookingPopup';
import './BookNowButton.css';

const BookNowButton = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const handleBookNow = () => {
        setIsBookingOpen(true);
    };

    return (
        <>
            <button onClick={handleBookNow} className="book-now-button">
                Book Now
            </button>
            <BookingPopup 
                isOpen={isBookingOpen} 
                onClose={() => setIsBookingOpen(false)} 
            />
        </>
    );
};

export default BookNowButton; 