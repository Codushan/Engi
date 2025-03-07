// components/ContactUs.js
"use client"
import React, { useState, useRef, useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });
  
  const [activeField, setActiveField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [aiAssistant, setAiAssistant] = useState(false);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  
  useEffect(() => {
    // Animation for the map points when component mounts
    const mapPoints = document.querySelectorAll(`.${styles.locationPoint}`);
    mapPoints.forEach((point, index) => {
      setTimeout(() => {
        point.classList.add(styles.active);
      }, 300 * index);
    });
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleFocus = (field) => {
    setActiveField(field);
  };
  
  const handleBlur = () => {
    setActiveField(null);
  };
  
  const toggleAiAssistant = () => {
    setAiAssistant(!aiAssistant);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Animation effect for form submission
    formRef.current.classList.add(styles.formSubmitting);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      formRef.current.classList.remove(styles.formSubmitting);
    }, 1500);
  };
  
  return (
    <div className={styles.contactContainer}>
      <Navbar/>
      <div className={styles.holographicHeader}>
        <h1>CONTACT US</h1>
        <div className={styles.gridPatterns}></div>
        <p className={styles.subtitle}>Connect with the CIVFORGE 2025 Team</p>
      </div>
      
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardIcon}>
              <div className={styles.iconPulse}></div>
            </div>
            <h3>Headquarters</h3>
            <p>CIVFORGE Innovation Center</p>
            <p>88 Engineering Boulevard</p>
            <p>Singapore 138632</p>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.infoCardIcon}>
              <div className={styles.iconPulse}></div>
            </div>
            <h3>Festival Venue</h3>
            <p>Marina Bay Sands Convention Center</p>
            <p>10 Bayfront Avenue</p>
            <p>Singapore 018956</p>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.infoCardIcon}>
              <div className={styles.iconPulse}></div>
            </div>
            <h3>Contact Hours</h3>
            <p>Monday - Friday: 9:00 - 18:00 SGT</p>
            <p>Email Response: Within 24 hours</p>
          </div>
          
          <div className={styles.infoCard}>
            <div className={styles.infoCardIcon}>
              <div className={styles.iconPulse}></div>
            </div>
            <h3>Direct Contact</h3>
            <p>General Inquiries: info@civforge.org</p>
            <p>Competition: compete@civforge.org</p>
            <p>Media: press@civforge.org</p>
          </div>
        </div>
        
        <div className={styles.contactForm}>
          {!submitted ? (
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className={styles.formHeader}>
                <h2>Send Us a Message</h2>
                <p>Get in touch with our team about CIVFORGE 2025</p>
              </div>
              
              <div className={`${styles.formGroup} ${activeField === 'name' ? styles.active : ''}`}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required
                />
              </div>
              
              <div className={`${styles.formGroup} ${activeField === 'email' ? styles.active : ''}`}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                />
              </div>
              
              <div className={`${styles.formGroup} ${activeField === 'organization' ? styles.active : ''}`}>
                <label htmlFor="organization">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('organization')}
                  onBlur={handleBlur}
                />
              </div>
              
              <div className={`${styles.formGroup} ${activeField === 'subject' ? styles.active : ''}`}>
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="competition">Competition Inquiry</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="speakers">Speaker Invitation</option>
                  <option value="general">General Inquiry</option>
                  <option value="media">Media Request</option>
                </select>
              </div>
              
              <div className={`${styles.formGroup} ${activeField === 'message' ? styles.active : ''}`}>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Send Message
              </button>
            </form>
          ) : (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}></div>
              <h3>Message Sent Successfully!</h3>
              <p>Our team will get back to you within 24 hours.</p>
              <button onClick={() => setSubmitted(false)} className={styles.resetButton}>
                Send Another Message
              </button>
            </div>
          )}
        </div>
        
        {aiAssistant && (
          <div className={styles.aiAssistantPanel}>
            <div className={styles.aiHeader}>
              <h3>CIVFORGE AI Assistant</h3>
              <button onClick={toggleAiAssistant} className={styles.closeAiButton}>×</button>
            </div>
            <div className={styles.aiContent}>
              <div className={styles.aiMessageContainer}>
                <div className={styles.aiMessage}>
                  <p>Hi there! I'm your CIVFORGE AI assistant. How can I help you today?</p>
                </div>
              </div>
              <div className={styles.aiInputContainer}>
                <input 
                  type="text" 
                  placeholder="Type your question..."
                  className={styles.aiInput}
                />
                <button className={styles.aiSendButton}>Send</button>
              </div>
            </div>
          </div>
        )}
        
        <div className={styles.interactiveMap} ref={mapRef}>
          <div className={styles.mapBackground}></div>
          <div className={`${styles.locationPoint} ${styles.point1}`}></div>
          <div className={`${styles.locationPoint} ${styles.point2}`}></div>
          <div className={`${styles.locationPoint} ${styles.point3}`}></div>
          <div className={`${styles.locationPoint} ${styles.point4}`}></div>
          
          <div className={styles.mapControls}>
            <button onClick={toggleAiAssistant} className={styles.aiAssistantButton}>
              AI Assistant
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;