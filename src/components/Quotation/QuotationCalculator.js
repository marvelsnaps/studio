import React, { useState } from 'react';
import { SERVICES_DATA } from './/PricingData';
import './QuotationCalculator.css';

const QuotationCalculator = () => {
    const [selectedServices, setSelectedServices] = useState({});
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        message: ''
    });

    const calculateTotal = () => {
        return Object.entries(selectedServices)
            .filter(([_, selected]) => selected)
            .reduce((total, [serviceId, _]) => {
                const service = Object.values(SERVICES_DATA)
                    .flatMap(category => category.services)
                    .find(s => s.id === serviceId);
                return total + (service?.price || 0);
            }, 0);
    };

    const handleServiceToggle = (serviceId) => {
        setSelectedServices(prev => ({
            ...prev,
            [serviceId]: !prev[serviceId]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format selected services
        const selectedServicesList = Object.entries(selectedServices)
            .filter(([_, selected]) => selected)
            .map(([serviceId, _]) => {
                const service = Object.values(SERVICES_DATA)
                    .flatMap(category => category.services)
                    .find(s => s.id === serviceId);
                return `- ${service?.name}: ₹${service?.price.toLocaleString()}`;
            }).join('  ');

        // Create formatted message
        const whatsappMessage = 
`Studio Quotation Details-------------------------
Selected Services:${selectedServicesList}
Total Amount: ₹${calculateTotal().toLocaleString()}

Contact Details:
Name: ${contact.name}, 
Phone: ${contact.phone},
Email: ${contact.email},
Event Date: ${contact.eventDate},
${contact.message ? `Message: ${contact.message}%0A` : ''}`;


        // WhatsApp business number
        const phoneNumber = '918098449639';
        
        // Create and open WhatsApp link
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="quotation-section">
            <h2>Create Your Custom Package</h2>
            <div className="quotation-calculator">
                <div className="services-container">
                    {Object.entries(SERVICES_DATA).map(([key, category]) => (
                        <div key={key} className="service-category">
                            <h3>{category.title}</h3>
                            {category.services.map(service => (
                                <label key={service.id} className="service-item">
                                    <input
                                        type="checkbox"
                                        checked={selectedServices[service.id] || false}
                                        onChange={() => handleServiceToggle(service.id)}
                                    />
                                    <span className="service-name">{service.name}</span>
                                    <span className="service-price">₹{service.price.toLocaleString()}</span>
                                </label>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="quote-summary">
                    <h3>Total Quotation</h3>
                    <div className="total-amount">₹{calculateTotal().toLocaleString()}</div>
                </div>

                <form onSubmit={handleSubmit} className="contact-form">
                    <h3>Contact Details</h3>
                    <div className="form-grid">
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            value={contact.name}
                            onChange={(e) => setContact({...contact, name: e.target.value})}
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            value={contact.email}
                            onChange={(e) => setContact({...contact, email: e.target.value})}
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            value={contact.phone}
                            onChange={(e) => setContact({...contact, phone: e.target.value})}
                        />
                        <input
                            type="date"
                            required
                            value={contact.eventDate}
                            onChange={(e) => setContact({...contact, eventDate: e.target.value})}
                        />
                        <textarea
                            placeholder="Additional Message"
                            value={contact.message}
                            onChange={(e) => setContact({...contact, message: e.target.value})}
                            className="message-input"
                            rows="4"
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-quote">Get Detailed Quotation</button>
                </form>
            </div>
        </div>
    );
};

export default QuotationCalculator;