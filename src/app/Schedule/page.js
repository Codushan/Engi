"use client"
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';
import styles from './schedule.module.css';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('day1');
  const [visibleItems, setVisibleItems] = useState([]);

  // Example schedule data
  const scheduleData = [
    {
      id: 's1',
      day: 'day1',
      time: '09:00 - 10:30',
      title: 'Opening Ceremony: Future of Civil Engineering',
      location: 'Main Holodeck',
      speaker: 'Dr. Elena Kowalski',
      category: 'keynote',
      description: 'Welcome to CIVIL2050 with a visionary talk on engineering challenges of the next century.'
    },
    {
      id: 's2',
      day: 'day1',
      time: '11:00 - 12:30',
      title: 'Quantum Materials in Infrastructure',
      location: 'Innovation Lab A',
      speaker: 'Prof. Hiroshi Tanaka',
      category: 'lecture',
      description: 'Exploring how quantum-enhanced materials are revolutionizing structural integrity.'
    },
    {
      id: 's3',
      day: 'day1',
      time: '14:00 - 17:00',
      title: 'Bridge Design Competition: Phase 1',
      location: 'Competition Arena',
      speaker: 'Jury Panel',
      category: 'competition',
      description: 'Teams showcase their initial designs for the hyperloop bridge challenge.'
    },
    {
      id: 's4',
      day: 'day2',
      time: '09:30 - 12:30',
      title: 'AI-Powered Urban Planning Workshop',
      location: 'Digital Studio 3',
      speaker: 'Dr. Maya Rodriguez',
      category: 'workshop',
      description: 'Hands-on session with the latest AI tools for sustainable city design.'
    },
    {
      id: 's5',
      day: 'day2',
      time: '13:30 - 15:00',
      title: 'Resilient Infrastructure in Extreme Climates',
      location: 'Climate Simulation Chamber',
      speaker: 'Dr. Ahmed Hassan',
      category: 'lecture',
      description: 'Designing structures that withstand the challenges of our changing planet.'
    },
    {
      id: 's6',
      day: 'day3',
      time: '10:00 - 11:30',
      title: 'Nanotechnology in Structural Reinforcement',
      location: 'Nano Lab',
      speaker: 'Dr. Sophia Chen',
      category: 'lecture',
      description: 'How atomic-scale engineering is creating indestructible building materials.'
    },
    {
      id: 's7',
      day: 'day3',
      time: '13:00 - 16:00',
      title: 'Closing Ceremony & Awards',
      location: 'Main Holodeck',
      speaker: 'Festival Committee',
      category: 'event',
      description: 'Celebrating innovation and announcing competition winners.'
    }
  ];

  // Filter schedule items by selected day
  const filteredSchedule = scheduleData.filter(item => item.day === activeDay);
  
  // Reveal animation for schedule items
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, entry.target.dataset.id]);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll(`.${styles.scheduleItem}`).forEach(item => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, [activeDay]);

  const getCategoryColor = (category) => {
    const colors = {
      keynote: '#FF5E87',
      lecture: '#00D8FF',
      workshop: '#7B61FF',
      competition: '#FFB800',
      event: '#00FF9D'
    };
    return colors[category] || '#0055FF';
  };

  return (
    <>
      <Head>
        <title>Schedule | CIVIL2050 Engineering Festival</title>
        <meta name="description" content="Explore the full schedule of events, workshops, and lectures at the CIVIL2050 Engineering Festival." />
      </Head>

      <NavBar />
      
      <main className={styles.mainContent}>
        <section className={styles.scheduleHero}>
          <div className={styles.blueprintGrid}></div>
          <div className={styles.container}>
            <h1 className={styles.pageTitle}>Festival Schedule</h1>
            <p className={styles.pageSubtitle}>Plan your visit to CIVIL2050 with our interactive timeline</p>
          </div>
        </section>

        <section className={styles.scheduleSection}>
          <div className={styles.container}>
            <div className={styles.scheduleTabs}>
              <button 
                className={`${styles.scheduleTab} ${activeDay === 'day1' ? styles.active : ''}`}
                onClick={() => setActiveDay('day1')}
              >
                <span className={styles.dayNumber}>01</span>
                <span className={styles.dayName}>Day One</span>
                <span className={styles.dayDate}>June 15, 2050</span>
              </button>
              <button 
                className={`${styles.scheduleTab} ${activeDay === 'day2' ? styles.active : ''}`}
                onClick={() => setActiveDay('day2')}
              >
                <span className={styles.dayNumber}>02</span>
                <span className={styles.dayName}>Day Two</span>
                <span className={styles.dayDate}>June 16, 2050</span>
              </button>
              <button 
                className={`${styles.scheduleTab} ${activeDay === 'day3' ? styles.active : ''}`}
                onClick={() => setActiveDay('day3')}
              >
                <span className={styles.dayNumber}>03</span>
                <span className={styles.dayName}>Day Three</span>
                <span className={styles.dayDate}>June 17, 2050</span>
              </button>
            </div>

            <div className={styles.timeline}>
              <div className={styles.timelineLine}></div>
              
              {filteredSchedule.map((item, index) => (
                <div 
                  key={item.id}
                  data-id={item.id}
                  className={`${styles.scheduleItem} ${visibleItems.includes(item.id) ? styles.visible : ''}`}
                >
                  <div className={styles.scheduleTime}>
                    <span className={styles.timeText}>{item.time}</span>
                    <div 
                      className={styles.categoryDot}
                      style={{ backgroundColor: getCategoryColor(item.category) }}
                    ></div>
                  </div>
                  
                  <div className={styles.scheduleCard}>
                    <div 
                      className={styles.categoryTag}
                      style={{ backgroundColor: getCategoryColor(item.category) }}
                    >
                      {item.category.toUpperCase()}
                    </div>
                    <h3 className={styles.scheduleTitle}>{item.title}</h3>
                    <div className={styles.scheduleDetails}>
                      <div className={styles.scheduleLocation}>
                        <svg className={styles.icon} viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        {item.location}
                      </div>
                      <div className={styles.scheduleSpeaker}>
                        <svg className={styles.icon} viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                        {item.speaker}
                      </div>
                    </div>
                    <p className={styles.scheduleDescription}>{item.description}</p>
                    <button className={styles.addToCalendarBtn}>
                      Add to My Schedule
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}