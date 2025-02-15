import React, { useState } from 'react';
import './Packages.css';
import img1 from '../images/silver.png';
import img2 from '../images/gold.png';
import img3 from '../images/diamond.png';
import BookNowButton from './BookNowButton';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
// import QuotationCalculator from './Quotation/QuotationCalculator';


const packages = [
    {
        category: 'Silver',
        image: img1,
        price: '₹ 55,000',
        mainServices: 'Traditional photo & video',
        description: 'Perfect for traditional ceremonies with essential coverage',
        services: [
            'Traditional photo & video coverage',
            'Additional charges for outdoor videos'
        ],
        complementary: [
            // 'Outdoor photo shoot (photo only)',
            '2 Photoframes',
            '2 Calendars',
            'WhatsApp wedding invitation',
            '1/2 kg wedding cake'
        ],
        terms: 'Outdoor photos up to 10km no charges. Above 10 km travel expense applicable.'
    },
    {
        category: 'Gold',
        image: img2,
        price: '₹ 95,000',
        mainServices: 'Traditional & Candid Coverage',
        description: 'Complete coverage with both traditional and candid moments',
        services: [
            'Traditional photo & video coverage',
            'Candid photo & video coverage',
            'Complete event documentation'
        ],
        complementary: [
            // 'Outdoor photo shoot (photo only)',
            '3 Photoframes',
            '2 Calendars',
            'WhatsApp wedding invitation',
            '1 kg wedding cake'
        ],
        terms: 'Outdoor photos up to 10km no charges. Above 10 km travel expense applicable.'
    },
    {
        category: 'Diamond',
        image: img3,
        price: '₹ 1,45,000',
        mainServices: 'Premium All-Inclusive Coverage',
        description: 'Luxury coverage with all premium features included',
        services: [
            'Traditional photo & video coverage',
            'Candid photo & video coverage',
            'LED Wall (8x6)',
            'Drone coverage',
            'Complete outdoor photos & videos'
        ],
        complementary: [
            // 'Complete outdoor photo & video shoot',
            '4 Photoframes',
            '2 Calendars',
            'WhatsApp wedding invitation',
            '1 kg wedding cake'
        ],
        terms: 'Outdoor photos up to 10km no charges. Above 10 km travel expense applicable.'
    }
];

const Packages = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);

    return (
        <div className="packages-section">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Wedding Photography Packages
            </motion.h2>
            <div className="packages-grid">
                {packages.map((pkg, index) => (
                    <motion.div
                        key={index}
                        className={`package-card ${pkg.category.toLowerCase()}`}
                        onClick={() => setSelectedPackage(pkg)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="package-preview">
                            <img src={pkg.image} alt={pkg.category} />
                            <h3>{pkg.category}</h3>
                            <div className="price">{pkg.price}</div>
                            <div className="main-services">{pkg.mainServices}</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {selectedPackage && (
                <motion.div 
                    className="package-modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setSelectedPackage(null)}
                >
                    <motion.div 
                        className="modal-content"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button className="close-btn" onClick={() => setSelectedPackage(null)}>×</button>
                        
                        <div className="modal-header">
                            <h2>{selectedPackage.category} Package</h2>
                            <div className="price-tag">{selectedPackage.price}</div>
                        </div>

                        <img src={selectedPackage.image} alt={selectedPackage.category} />
                        
                        <div className="modal-body">
                            <div className="package-description">
                                <h3>Package Description</h3>
                                <p>{selectedPackage.description}</p>
                            </div>

                            <div className="services-section">
                                <h3>Services Included</h3>
                                <ul className="services-list">
                                    {selectedPackage.services.map((service, idx) => (
                                        <motion.li 
                                            key={idx}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: idx * 0.1 }}
                                        >
                                            <FaCheck color="#00b894" /> {service}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="complementary-section">
                                <h3>Complementary Offerings</h3>
                                <ul className="complementary-list">
                                    {selectedPackage.complementary.map((item, idx) => (
                                        <li key={idx}>🎁 {item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="terms-section">
                                <h3>Terms & Conditions</h3>
                                <p>{selectedPackage.terms}</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* <QuotationCalculator/> */}
            <div className="booking-section">
                
                <h2>Book Your Photoshoot</h2>
                
                <p>Schedule your professional photography session with Marvel Snaps Studio</p>
                <BookNowButton />
                 </div>
        </div>
    );
};

export default Packages;