import React, { useState } from 'react';
import './Packages.css'; // Import the CSS file for styling
import img1 from './images/cam-new.gif';

const packages = [
    {
        category: 'Silver',
        image: img1, // Add image URL
        description: 'Our most comprehensive package with premium services.',
        services: [
            { name: 'Wedding Photography', cost: '₹ 50000' },
            { name: 'Traditional photos only' },
            { name: 'For Videos extra charges will be applied' }
        ],
        complementary: [
            { name: 'Outdoor photo shoot (photo only)', cost: '' },
            { name: '2 - Photoframe', cost: '' },
            { name: '2 - Calendar', cost: '' },
            { name: 'WhatsApp wedding invitation', cost: '' },
            { name: '1/2 kg wedding cake', cost: '' },
        ],
    },
    {
        category: 'Gold',
        image: img1, // Add image URL
        description: 'A great balance of quality and affordability.',
        services: [
            { name: 'Wedding Photography', cost: '$1200' }
        ],
        complementary: [],
    },
    {
        category: 'Diamond',
        image: img1, // Add image URL
        description: 'Essential services for a budget-friendly option.',
        services: [
            { name: 'Wedding Photography', cost: '$1000' }
        ],
        complementary: [],
    },
];

const Packages = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);

    const handlePackageClick = (pkg) => {
        setSelectedPackage(pkg);
    };

    const handleCloseModal = () => {
        setSelectedPackage(null);
    };

    return (
        <div className="packages-section">
            <h2>Our Packages</h2>
            <div className="packages-list">
                {packages.map((pkg, index) => (
                    <div key={index} className={`package-category ${pkg.category.toLowerCase()}`} onClick={() => handlePackageClick(pkg)}>
                        <img src={pkg.image} alt={`${pkg.category} package`} className="package-image" />
                        <h3>{pkg.category} Package</h3>
                    </div>
                ))}
            </div>

            {selectedPackage && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <img src={selectedPackage.image} alt={`${selectedPackage.category} package`} className="modal-package-image" />
                        <h3>{selectedPackage.category} Package</h3>
                        <p className="package-description">{selectedPackage.description}</p>
                        <div className="services-section">
                            <h4>Services</h4>
                            <ul>
                                {selectedPackage.services.map((service, idx) => (
                                    <li key={idx}>{service.name} {service.cost && `- ${service.cost}`}</li>
                                ))}
                            </ul>
                        </div>
                        {selectedPackage.complementary.length > 0 && (
                            <div className="complementary-section">
                                <h4>Complementary</h4>
                                <ul className="complementary-list">
                                    {selectedPackage.complementary.map((item, idx) => (
                                        <li className="complementary-item" key={idx}>
                                            <h4>{item.name}</h4>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Packages;