import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Home from './components/Home';
import About from './components/About';
import AboutPage from './components/AboutPage';
import Services from './components/Services';
import ServicesPage from './components/ServicesPage';
// import Gallery from './components/Gallery';
import GalleryPage from './components/GalleryPage';
import ServiceGallery from './components/ServiceGallery.js';
import ContactPage from './components/ContactPage';
import ClientPage from './components/ClientPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';
import './App.css';
import { ImageProvider } from './contexts/ImageContext';
import Packages from './components/Packages';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';
import BookNowButton from './components/BookNow.js';

function HomePage() {
    return (
        <>
            <Home />
            <About />
            <Services />
            {/* <Gallery /> */}
            <BookNowButton /> 
            
        </>
    );
}

function App() {
    return (
        <AuthProvider>
        <ImageProvider>
            <Router>
                <ErrorBoundary>
                    <div className="App">
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/services" component={ServicesPage} />
                            <Route path="/gallery" component={GalleryPage} />
                            <Route path="/contact" component={ContactPage} />
                            <Route path="/client" component={ClientPage} />
                            <Route path="/service-gallery" component={ServiceGallery} />
                            <Route path="/packages" component={Packages} />
                            <Route path="/admin" component={Login} />
                            <PrivateRoute path="/admin-dashboard" component={AdminDashboard} />
                        </Switch>
                        <Footer />
                        
                        {/* Floating Icons */}
                        <div className="floating-icons">
                            <a href="https://wa.me/8098449639" target="_blank" rel="noopener noreferrer" className="icon whatsapp">
                                <FaWhatsapp size={30} />
                            </a>
                            <a href="tel:8098449639" className="icon phone">
                                <FaPhone size={30} />
                            </a>
                        </div>
                    </div>
                </ErrorBoundary>
            </Router>
        </ImageProvider>
        </AuthProvider>
    );
}

export default App;