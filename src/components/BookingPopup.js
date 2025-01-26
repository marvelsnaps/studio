import React, { useState, useRef, useEffect } from 'react';
import './BookingPopup.css';

const TermsModal = ({ isOpen, onClose, onTermsRead }) => {
    const [hasRead, setHasRead] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const [isForced, setIsForced] = useState(false);
    const termsRef = useRef(null);

    useEffect(() => {
        let timer;
        if (isForced && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsForced(false);
            onTermsRead(true);
        }
        return () => clearInterval(timer);
    }, [timeLeft, isForced, onTermsRead]);

    const handleScroll = () => {
        if (termsRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = termsRef.current;
            const isBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
            
            if (isBottom && !hasRead) {
                setHasRead(true);
                onTermsRead(true);
                setIsForced(false);
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div className="terms-modal-overlay">
            <div className="terms-modal">
                <button 
                    className="close-button" 
                    onClick={onClose}
                    disabled={isForced}
                >
                    &times;
                </button>
                <h3>Terms & Conditions</h3>
                {isForced && (
                    <div className="timer-warning">
                        Please read the terms carefully. Modal will close in {timeLeft} seconds
                    </div>
                )}
                <div 
                    className="terms-content" 
                    ref={termsRef}
                    onScroll={handleScroll}
                >
                    <h4>1. Acceptance of terms:</h4>
                    <p>By using this Website, you agree to these Terms and any future amendments. We may update or modify the Terms at any time, and such changes will be effective immediately upon posting. Please review the Terms periodically.</p>
                    
                    <h4>2. Services Provided:</h4>
                    <p>Marvel Snaps offers a range of services, including photography booking, image purchase, and digital content. By engaging with the Services, you acknowledge and agree to comply with all applicable terms and conditions specific to each service offered.</p>
                    
                    <h4>3. Pricing and Payments:</h4>
                    <p>All prices listed on the Website for photography services or products are in rupees and are subject to change without prior notice. Payment for services must be made in full before the provision of any services, including image downloads or physical products.</p>
                    <p>Important payment details:</p>
                    <ul>
                        <li>An amount of 25% from the package cost must be paid in advance for booking.</li>
                        <li>Full payment must be paid before the entire product delivery.</li>
                    </ul>
                    
                    <h4>4. Client's support:</h4>
                    <p>Proper support and details required for the event & editing must be provided from the client's end for better outputs, otherwise the studio will not be responsible for the final results.</p>
                </div>
            </div>
        </div>
    );
};

const BookingPopup = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        serviceType: 'Wedding Photography',
        eventDetails: '',
        personNames: '',
        duration: '',
        time: '',
        place: '',
        message: ''
    });
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showTerms, setShowTerms] = useState(false);
    const [canAcceptTerms, setCanAcceptTerms] = useState(false);
    const [isForced, setIsForced] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!termsAccepted) {
            alert('Please accept the terms and conditions to proceed');
            return;
        }

        console.log('Form submitted:', formData);
        // Construct WhatsApp message
        const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ADate: ${formData.date}%0AService Type: ${formData.serviceType}%0AEvent Details: ${formData.eventDetails}%0APerson Names: ${formData.personNames}%0ADuration: ${formData.duration}%0ATime: ${formData.time}%0APlace: ${formData.place}%0AMessage: ${formData.message}`;

        // Replace with your WhatsApp number
        const phoneNumber = '+918098449639'; 
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        // Open WhatsApp
        window.open(whatsappLink, '_blank');
        onClose(); 
        console.log('Form submitted:', formData);
        onClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxClick = (e) => {
        if (!canAcceptTerms) {
            e.preventDefault();
            setShowTerms(true);
            setIsForced(true);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="booking-popup-overlay">
            <div className="booking-popup">
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>Book Your Photoshoot</h2>
                <form onSubmit={handleSubmit}>
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
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                    <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                    >
                        <option value="Wedding Photography">Wedding Photography</option>
                        <option value="Wedding Photography & videography">Wedding Photography & Videography</option>
                        <option value="Pre-Wedding Photography">Pre & Post Wedding Photography</option>
                        <option value="Candid Photography">Candid Photography</option>
                        <option value="Model shoots">Model Shoots</option>
                        <option value="Portrait Session">Portrait Session</option>
                        <option value="Event Photography">Event Photography</option>
                        <option value="Baby Photography">Baby Photography</option>
                        <option value="Product Photography">Product Photography</option>
                    </select>

                    <input
                        type="text"
                        name="eventDetails"
                        placeholder="Event Details"
                        value={formData.eventDetails}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="personNames"
                        placeholder="Person Names"
                        value={formData.personNames}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="duration"
                        placeholder="Duration (e.g., 4 hours, Full day)"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="time"
                        name="time"
                        placeholder="Time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="place"
                        placeholder="Place/Venue"
                        value={formData.place}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Additional Message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                    
                    <div className="terms-checkbox">
                        <label>
                            <input
                                type="checkbox"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                onClick={handleCheckboxClick}
                                disabled={!canAcceptTerms}
                                required
                            />
                            I accept the 
                            <span 
                                className="terms-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowTerms(true);
                                }}
                            > Terms & Conditions</span>
                        </label>
                        {!canAcceptTerms && (
                            <p className="terms-warning">Please read full terms before accepting</p>
                        )}
                    </div>
                    
                    <button 
                        type="submit" 
                        className={`submit-button ${!termsAccepted ? 'disabled' : ''}`}
                        disabled={!termsAccepted}
                    >
                        Book Now
                    </button>
                </form>
            </div>
            <TermsModal 
                isOpen={showTerms} 
                onClose={() => !isForced && setShowTerms(false)}
                onTermsRead={(value) => {
                    setCanAcceptTerms(value);
                    setIsForced(false);
                }}
            />
        </div>
    );
};

export default BookingPopup;