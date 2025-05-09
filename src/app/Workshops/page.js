// components/Workshop.js
"use client"
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Workshop = () => {
  const [workshops, setWorkshops] = useState([]);
  const [hoveredWorkshop, setHoveredWorkshop] = useState(null);

  useEffect(() => {
    // In a real app, this would be an API call
    setWorkshops([
      {
        id: 1,
        title: "Future Skyscrapers: Designing for 2050",
        date: "March 15, 2025",
        time: "10:00 - 13:00",
        instructor: "Dr. Elena Nguyen",
        description: "Explore cutting-edge materials and design principles for vertical cities of tomorrow.",
        capacity: 50,
        registered: 32,
        image: "/workshop-skyscraper.png",
        ar: true
      },
      {
        id: 2,
        title: "Quantum Infrastructure Modeling",
        date: "March 16, 2025",
        time: "14:00 - 17:00",
        instructor: "Prof. Marcus Wei",
        description: "Learn how quantum computing is revolutionizing structural analysis and urban planning.",
        capacity: 40,
        registered: 40,
        image: "/workshop-quantum.png",
        ar: true
      },
      {
        id: 3,
        title: "Self-Healing Concrete Applications",
        date: "March 17, 2025",
        time: "09:00 - 12:00",
        instructor: "Dr. Sarah Johnson",
        description: "Hands-on workshop with nano-engineered materials that repair themselves.",
        capacity: 30,
        registered: 18,
        image: "/workshop-concrete.png",
        ar: true
      }
    ]);
  }, []);

  return (
    <div className={styles.workshopContainer}>
      <Navbar/>
      <div className={styles.holographicHeader}>
        <h1>WORKSHOPS</h1>
        <div className={styles.gridPatterns}></div>
        <p className={styles.subtitle}>Hands-on Learning with Industry Pioneers</p>
      </div>

      <div className={styles.workshopGrid}>
        {workshops.map((workshop) => (
          <div 
            className={styles.workshopCard} 
            key={workshop.id}
            onMouseEnter={() => setHoveredWorkshop(workshop.id)}
            onMouseLeave={() => setHoveredWorkshop(null)}
          >
            <div className={styles.hologramContainer}>
              <div className={styles.hologramImage} style={{ backgroundImage: `url(${workshop.image})` }}></div>
              <div className={styles.blueprintOverlay}></div>
              {workshop.ar && (
    <div className={styles.arBadge}>
      {workshop.registered >= workshop.capacity ? 'Closed' : 'Live'}
    </div>
  )}
            </div>
            <div className={styles.workshopContent}>
              <h3>{workshop.title}</h3>
              <p className={styles.workshopDetails}>
                <span className={styles.dateTime}>{workshop.date} • {workshop.time}</span>
                <span className={styles.instructor}>Led by: {workshop.instructor}</span>
              </p>
              <p className={styles.description}>{workshop.description}</p>
              <div className={styles.capacityContainer}>
                <div className={styles.capacityBar}>
                  <div 
                    className={styles.capacityFill} 
                    style={{ width: `${(workshop.registered / workshop.capacity) * 100}%` }}
                  ></div>
                </div>
                <span className={styles.capacityText}>
                  {workshop.registered}/{workshop.capacity} Registered
                </span>
              </div>
              <button 
                className={`${styles.registerButton} ${workshop.registered >= workshop.capacity ? styles.disabled : ''}`}
                disabled={workshop.registered >= workshop.capacity}
              >
                {workshop.registered >= workshop.capacity ? 'WORKSHOP FULL' : 'REGISTER NOW'}
              </button>
            </div>
            
            {hoveredWorkshop === workshop.id && (
              <div className={styles.holographicDetails}>
                <div className={styles.detailsContent}>
                  <h4>WORKSHOP DETAILS</h4>
                  <ul>
                    <li>Interactive sessions</li>
                    <li>Live demos with industry tools</li>
                    <li>Take-home project materials</li>
                    <li>Certificate of completion</li>
                  </ul>
                  {workshop.ar && (
                    <div className={styles.arPreview}>
                      <button 
                className={`${styles.registerButton} ${workshop.registered >= workshop.capacity ? styles.disabled : ''}`}
                disabled={workshop.registered >= workshop.capacity}
              >
                {workshop.registered >= workshop.capacity ? 'WORKSHOP FULL' : 'REGISTER NOW'}
              </button>
                      {/* <div className={styles.arIcon}></div> */}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* <div className={styles.aiAssistant}>
        <div className={styles.aiAvatar}></div>
        <div className={styles.aiInterface}>
          <div className={styles.aiHeader}>
            <span>NEXUS AI</span>
            <div className={styles.pulsingDot}></div>
          </div>
          <p>Need help finding the right workshop? Ask me about topics, difficulty levels, or specific skills you want to learn.</p>
          <div className={styles.aiInput}>
            <input type="text" placeholder="Ask about workshops..." />
            <button className={styles.aiButton}></button>
          </div>
        </div>
      </div> */}
      <Footer/>
    </div>
  );
};

export default Workshop;