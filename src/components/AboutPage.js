import React, { useEffect, useState } from 'react';
import './AboutPage.css';
import studioLogo from './images/logo1.png';
import admin from '../images/admin.webp';
import pra from '../images/pra.webp';
import prav from '../images/prav.webp';
import arv from '../images/arv.jpg';
import far from '../images/far.webp';
import log from '../images/log.webp';
import kar from '../images/kar.webp';
import selva from '../images/selva.jpg';
import vetri from '../images/vetri.jpg';
import surya from '../images/surya.jpg';
import nirmal from '../images/nirmal.jpg';
import vish from '../images/vish.jpg';
import jai from '../images/jai.jpg';


import photographerImg from '../images/noimg.webp';
import heroVideo from './videos/MS .webm';


const AboutPage = () => {
    const [isVisible, setIsVisible] = useState(false);

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
                    autoPlay                     
                    loop 
                    playsInline
                    className="hero-video"
                >
                    <source src={heroVideo} type="video/webm" />
                </video>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className={`fade-in ${isVisible ? 'visible' : ''}`}>
                        Marvel Snaps Studio
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
                            <span className="number">50+</span>
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
                            <h2>Kumaran Giriswaran</h2>
                            <br></br>
                            <h3>CEO </h3>
                            <br></br>
                            <p>Based in Palani, I bring over a decade of experience in capturing 
                               life's most precious moments. My passion lies in creating timeless 
                               memories through creative and authentic photography.</p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="photographer-content">
                        <img src={photographerImg} alt="Lead Photographer" />
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
                                {/* <p>Lead Photographer</p> */}
                            </div>
                           
                            <div className="team-member">
                                <img src={nirmal} alt="Team member" />
                                <h3>Nirmal Abdullah Abdul Rahman
                                </h3>
                                {/* <p>Lead Photographer</p> */}
                            </div>
                           
                            </div>
                    </div>
                </div>


                <div className="team-section">
                <h3>Marvel Snaps Supporters</h3>
                    <div className="container">
                        <div className="team-grid">
                            <div className="team-member">
                                <img src={kar} alt="Team member" />
                                <h3>G Karthikeyan</h3>
                                {/* <p>Senior Photographer</p> */}
                            </div>
                            <div className="team-member">
                                <img src={surya} alt="Team member" />
                                <h3>Dhilip Surya</h3>
                                {/* <p>Lead Photographer</p> */}
                            </div>
                            <div className="team-member">
                                <img src={vetri} alt="Team member" />
                                <h3>Vetrimani kannan</h3>
                                {/* <p>Video Editor</p> */}
                            </div>
                            <div className="team-member">
                                <img src={pra} alt="Team member" />
                                <h3>Prabhakaran</h3>
                                {/* <p>Video Editor</p> */}
                            </div>


                            <div className="team-member">
                                <img src={log} alt="Team member" />
                                <h3>Lokesh</h3>
                                {/* <p>Video Editor</p> */}
                            </div>

                            <div className="team-member">
                                <img src={selva} alt="Team member" />
                                <h3>Selva</h3>
                                {/* <p>Video Editor</p> */}
                            </div>

                            <div className="team-member">
                                <img src={prav} alt="Team member" />
                                <h3>Praveen Kumar</h3>
                                {/* <p>Video Editor</p> */}
                            </div>

                            <div className="team-member">
                                <img src={vish} alt="Team member" />
                                <h3>Vishnu</h3>
                                {/* <p>Video Editor</p> */}
                            </div>

                            <div className="team-member">
                                <img src={jai} alt="Team member" />
                                <h3>Jai</h3>
                                {/* <p>Video Editor</p> */}
                            </div>





                        </div>
                    </div>
                </div>



            </section>

            <section className="cta animate-on-scroll">
                <div className="container">
                    <h2>Ready to Create Memories?</h2>
                    <p>Let's capture your special moments together</p>
                    <button className="book-now">Book Now</button>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;