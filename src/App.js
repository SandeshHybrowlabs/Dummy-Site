import React, { useState, useEffect, useRef } from "react";
import './App.css';
import { FaCode, FaCloud, FaChartBar } from 'react-icons/fa';

const App = () => {
  const [message, setMessage] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleButtonClick = (button) => {
    if (button === 'first') {
      setMessage('You clicked Explore More!');
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({ action: 'openDialog', message: 'Explore More clicked from the WebView!' })
        );
      }
    } else if (button === 'second') {
      setMessage('You clicked Contact Us!');
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({ action: 'showToast', message: 'Contact Us clicked from the WebView!' })
        );
      }
    }
    else if (button === 'third') {
      setMessage('You clicked Contact Us!');
      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({ action: 'openNestedWebView', url: 'https://www.gmail.com', title: 'Gmail' })
        );
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && !hamburgerRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1 className="header-logo">Hybrowlabs<span> Technologies</span></h1>
        <div className="header-container">
          <nav
            ref={navRef}
            className={`nav ${isNavOpen ? 'open' : ''}`}
          >
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#careers" className="nav-link">Careers</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div
            ref={hamburgerRef}
            className="hamburger"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h2 className="hero-title">Empowering Businesses with Cutting-edge IT Solutions</h2>
          <p className="hero-text">
            At Hybrowlabs Technologies, we transform ideas into innovative solutions. Let’s build the future together.
          </p>
        </div>
      </section>
      
        {/* Buttons Section */}
        <section id="buttons" className="section buttons-section">
          <h2 className="section-title">Take Action Now</h2>
          <p className="section-text">
            Discover how Hybrowlabs Technologies can accelerate your growth and transform your ideas into reality.
          </p>
          <div className="button-container">
            <button className="button" onClick={() => handleButtonClick("first")}>Open Native Dialog</button>
            <button className="button button-secondary" onClick={() => handleButtonClick("second")}>See Native Toast</button>
            <button className="button button-third" onClick={() => handleButtonClick("third")}>Open Native Screen</button>
         </div>
          {message && <p className="message">{message}</p>}
        </section>

      {/* About Us Section */}
      <section id="about" className="section about">
        <h2 className="section-title">About Hybrowlabs Technologies</h2>
        <p className="section-text">
          Hybrowlabs Technologies is a leading IT solutions provider specializing in software development, cloud computing, and digital transformation. 
          Our team is dedicated to delivering innovative and scalable solutions that empower businesses globally.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="section services">
      <h2 className="section-title">Our Expertise</h2>
      <div className="services-list">
        <div className="service-card">
          <FaCode className="service-icon" size={50} color="#4A90E2" />
          <h3 className="service-title">Web Development</h3>
          <p className="service-text">
            We create scalable, responsive, and user-friendly websites tailored to your needs.
          </p>
        </div>
        <div className="service-card">
          <FaCloud className="service-icon" size={50} color="#50C878" />
          <h3 className="service-title">Cloud Solutions</h3>
          <p className="service-text">
            Our cloud experts enable seamless migrations, cost optimization, and security in the cloud.
          </p>
        </div>
        <div className="service-card">
          <FaChartBar className="service-icon" size={50} color="#FF6347" />
          <h3 className="service-title">Data Analytics</h3>
          <p className="service-text">
            Turn data into actionable insights with our advanced analytics services.
          </p>
        </div>
      </div>
    </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section testimonials">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-text">
          Hear directly from our clients about how we've helped them achieve their goals and drive business growth.
        </p>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Hybrowlabs Technologies transformed our digital platform. Their expertise in web development and cloud solutions allowed us to scale efficiently and securely."
            </p>
            <p className="testimonial-author">- Sarah Johnson, CEO of TechInnovate</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "Their data analytics service provided actionable insights that helped us refine our strategies and achieve remarkable results in a short time."
            </p>
            <p className="testimonial-author">- Michael Lee, Chief Data Officer at DataCorp</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">
              "The Hybrowlabs team was a true partner in our cloud migration journey. Their attention to detail and professional approach made the transition smooth."
            </p>
            <p className="testimonial-author">- Jennifer Parker, IT Director at CloudNet Solutions</p>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="section careers">
        <h2 className="section-title">Join Our Team</h2>
        <p className="section-text">
          Ready to shape the future with us? Explore our open positions and be part of our mission to deliver excellence.
        </p>
        <button className="button">Explore Careers</button>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2 className="section-title">Get in Touch</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="input" />
          <input type="email" placeholder="Your Email" className="input" />
          <textarea placeholder="Your Message" className="textarea"></textarea>
          <button type="submit" className="button">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">© 2024 Sandesh Yadav (Hybrowlabs Technologies).</p>
      </footer>
    </div>
  );
};

export default App;
