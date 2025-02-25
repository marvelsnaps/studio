import React, { useEffect, useState, useRef } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
// import { BsTelephone } from 'react-icons/bs';
import './AboutPage.css';
import studioLogo from './assets/logo1.png';
import admin from '../images/admin.jpg';
import arv from '../images/arv.jpg';
import far from '../images/far.webp';
import nirmal from '../images/nirmal.jpg';
import mrk from '../images/mrk.jpg';
import heroVideo from './videos/MS .webm';
import gokul from '../images/gokul.jpg';
// import vish from '../images/vish.jpg';
// import jai from '../images/jai.jpg';
// import log from '../images/log.webp';
// import kar from '../images/kar.webp';
// import selva from '../images/selva.jpg';
// import vetri from '../images/vetri.jpg';
// import surya from '../images/surya.jpg';
// import pra from '../images/pra.webp';
// import prav from '../images/prav.webp';

const AboutPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const handleMuteToggle = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    useEffect(() => {
        setIsVisible(true);
        const handleScroll = () => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const isInView = rect.top <= window.innerHeight - 100;
                if (isInView) el.classList.add('visible');
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="about-page">
            <section className="hero">
                <video 
                    ref={videoRef}
                    autoPlay                     
                    loop 
                    playsInline
                    muted={isMuted}
                    className="hero-video"
                >
                    <source src={heroVideo} type="video/webm" />
                </video>
                <div className="hero-overlay"></div>
                <button 
                    className="mute-button"
                    onClick={handleMuteToggle}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                >
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
                <div className="hero-content">
                    <h1 className={`fade-in ${isVisible ? 'visible' : ''}`}>
                        Marvel Snaps
                    </h1>
                    <p className={`fade-in ${isVisible ? 'visible' : ''}`}>
                        <q>Photography is the push button of life</q> 
                    </p>
                </div>
            </section>

            <section className="intro animate-on-scroll">
                <div className="container">
                    <div className="intro-content">
                        <img src={studioLogo} alt="Studio" className="studio-logo" />
                        <div className="intro-text">
                            <h2>Our Story</h2>
                            <br></br>
                            <p>We are passionate storytellers dedicated to capturing your precious moments 
                               through our lens. With years of experience and an eye for detail, we turn 
                               ordinary moments into extraordinary memories.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stats animate-on-scroll">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="number">500+</span>
                            <span className="label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="number">100+</span>
                            <span className="label">Weddings</span>
                        </div>
                        <div className="stat-item">
                            <span className="number">150+</span>
                            <span className="label">Commercial</span>
                        </div>
                        <div className="stat-item">
                            <span className="number">1000+</span>
                            <span className="label">Happy Clients</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="photographer animate-on-scroll">
                <div className="container">
                <div className="photographer-content">
            <img src={admin} alt="Lead Photographer" />
            <div className="photographer-info">
                <h2>Thirukkumaran Giriswaran</h2>
                <br></br>
                <h3>CEO of Marvel Snaps</h3>
                <br></br>
                <p>Hi, I'm ThiruKumaran, a professional photographer based in Palani. My journey into photography began long ago when I received my first camera and since then, I've been dedicated to capturing stories, emotions, and the world around me through my lens. With a passion for portrait, landscape, or event photography, I focus on creating images that tell a compelling story and make every moment last forever.
                </p>
                <div className="social-links">
                    <a href="https://www.instagram.com/man_with_cam" target="_blank" rel="noopener noreferrer">
                        <BsInstagram className="social-icon" />
                        <span>instagram</span>
                    </a>
                </div>
            </div>
        </div>
                </div>

                <div className="container">
                    <div className="photographer-content">
                        <img src={mrk} alt="Lead Photographer" />
                        <div className="photographer-info">
                            <h2>Kaviyaraj Nagaraj</h2>
                            <br></br>
                            <h3>Creative Advisor</h3>
                            
                        </div>

                    </div>
                </div>

                
<div className="team-section1">
                    <div className="container1">
                        <div className="team-grid">
                            


                        <div className="team-member">
                                <img src={arv} alt="Team member" />
                                <h3>Aravind Veerappan</h3>
                                <p>Manager</p>
                            </div>

                            <div className="team-member">
                                <img src={far} alt="Team member" />
                                <h3>Fazrul Hak Abdulkaboor</h3>
                                <p>Marketing Head</p>
                            </div>
                           
                            <div className="team-member">
                                <img src={nirmal} alt="Team member" />
                                <h3>Nirmal Abdullah Abdul Rahman
                                </h3>
                                <p>Accounts Department</p>
                            </div>

                            <div className="team-member">
                                <img src={gokul} alt="Team member" />
                                <h3>Gokul vasan B
                                </h3>
                                <p>Photographer</p>
                            </div>
                           
                            </div>
                    </div>
                </div>


                {/* <div className="team-section">
                <h3>Marvel Snaps Supporters</h3>
                    <div className="container">
                        <div className="team-grid">
                            <div className="team-member">
                                <img src={kar} alt="Team member" />
                                <h3>G Karthikeyan</h3>
                                
                            </div>
                            <div className="team-member">
                                <img src={surya} alt="Team member" />
                                <h3>Dhilip Surya</h3>
                        
                            </div>
                            <div className="team-member">
                                <img src={vetri} alt="Team member" />
                                <h3>Vetrimani kannan</h3>
                                
                            </div>
                            <div className="team-member">
                                <img src={pra} alt="Team member" />
                                <h3>Prabhakaran</h3>
                                
                            </div>


                            <div className="team-member">
                                <img src={log} alt="Team member" />
                                <h3>Lokesh</h3>
                                
                            </div>

                            <div className="team-member">
                                <img src={selva} alt="Team member" />
                                <h3>Selva</h3>
                                
                            </div>

                            <div className="team-member">
                                <img src={prav} alt="Team member" />
                                <h3>Praveen Kumar</h3>
                                
                            </div>

                            <div className="team-member">
                                <img src={vish} alt="Team member" />
                                <h3>Vishnu</h3>
                            
                            </div>

                            <div className="team-member">
                                <img src={jai} alt="Team member" />
                                <h3>Jai</h3>
                                
                            </div>

                        </div>
                    </div>
                </div> */}

        

            </section>

            {/* <section className="cta animate-on-scroll">
                <div className="container">
                    <h2>Ready to Create Memories?</h2>
                    <p>Let's capture your special moments together</p>
                    <button className="book-now">Book Now</button>
                </div>
            </section> */}
        </div>
    );
};

export default AboutPage;