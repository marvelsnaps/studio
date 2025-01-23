import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/logo1.png';
import menuIcon from './assets/8666802_menu_navigation_icon.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="nav-left">
                <NavLink to="/" className="logo-link">
                    <img src={logo} alt="Logo" className="logo" width="100" height="100"/>
                </NavLink>
                {!isOpen && (
                    <button className="menu-button" onClick={toggleMenu}>
                        <img src={menuIcon} alt="Menu" width="24" height="24" />
                    </button>
                )}
            </div>
            <div className="nav-right">
                <ul className="nav-links-desktop">
                    <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                    <li><NavLink to="/gallery" activeClassName="active">Gallery</NavLink></li>
                    <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
                    <li><NavLink to="/service-gallery" activeClassName="active">Services Gallery</NavLink></li>
                    <li><NavLink to="/packages" activeClassName="active">Packages</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
                </ul>
            </div>
            <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                <button className="close-button" onClick={toggleMenu}>X</button>
                <ul className="nav-links-mobile">
                    <li><NavLink to="/" onClick={toggleMenu} activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/about" onClick={toggleMenu} activeClassName="active">About</NavLink></li>
                    <li><NavLink to="/services" onClick={toggleMenu} activeClassName="active">Services</NavLink></li>
                    <li><NavLink to="/service-gallery" onClick={toggleMenu} activeClassName="active">Gallery</NavLink></li>
                    <li><NavLink to="/packages" onClick={toggleMenu} activeClassName="active">Packages</NavLink></li>
                    <li><NavLink to="/contact" onClick={toggleMenu} activeClassName="active">Contact Us</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
