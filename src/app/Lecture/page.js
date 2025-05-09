// components/Lecture.js
"use client"
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Lecture = () => {
  const [lectures, setLectures] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // In a real app, this would be an API call
    setLectures([
      {
        id: 1,
        title: "Future Cities: Vertical Expansion and Sustainable Growth",
        speaker: "Prof. Richard Torres",
        organization: "MIT Urban Planning Institute",
        date: "March 15, 2025",
        time: "09:00 - 10:30",
        location: "Main Auditorium",
        category: "urban",
        attendees: 342,
        maxCapacity: 400,
        description: "An examination of how cities will evolve in the next 50 years, focusing on vertical expansion strategies and integration of natural elements in urban planning.",
        image: "/lecture-future-cities.png",
        featured: true
      },
      {
        id: 2,
        title: "Quantum Material Science in Infrastructure",
        speaker: "Dr. Amara Singh",
        organization: "Quantum Materials Research Lab",
        date: "March 15, 2025",
        time: "11:00 - 12:30",
        location: "Innovation Hall",
        category: "materials",
        attendees: 215,
        maxCapacity: 250,
        description: "Exploring how quantum physics is revolutionizing material science and creating self-reinforcing structures that respond to environmental stressors.",
        image: "/lecture-quantum.png",
        featured: false
      },
      {
        id: 3,
        title: "Oceanic Engineering: Floating Cities of Tomorrow",
        speaker: "Dr. Hiroshi Tanaka",
        organization: "Pacific Oceanic Solutions",
        date: "March 16, 2025",
        time: "10:00 - 11:30",
        location: "Blue Horizon Room",
        category: "oceanic",
        attendees: 178,
        maxCapacity: 200,
        description: "How floating city technologies are developing to address rising sea levels and urban overcrowding through sustainable oceanic engineering.",
        image: "/lecture-oceanic.png",
        featured: true
      },
      {
        id: 4,
        title: "AI-Powered Structural Analysis: Beyond Human Limitations",
        speaker: "Eng. Sofia Patel",
        organization: "NeuroStruct AI",
        date: "March 16, 2025",
        time: "14:00 - 15:30",
        location: "Digital Nexus Room",
        category: "technology",
        attendees: 289,
        maxCapacity: 300,
        description: "How artificial intelligence is transforming structural engineering by identifying optimal solutions beyond human cognitive limitations.",
        image: "/lecture-ai-structural.png",
        featured: true
      },
      {
        id: 5,
        title: "Lunar Construction Techniques for Earth Applications",
        speaker: "Cmdr. Robert Chen",
        organization: "International Space Agency",
        date: "March 17, 2025",
        time: "09:00 - 10:30",
        location: "Cosmos Auditorium",
        category: "space",
        attendees: 312,
        maxCapacity: 350,
        description: "Adapting techniques developed for lunar habitation to solve Earth's most pressing civil engineering challenges in extreme environments.",
        image: "/lecture-lunar.png",
        featured: false
      }
    ]);
  }, []);
  
  const filteredLectures = lectures.filter(lecture => {
    if (filter !== 'all' && lecture.category !== filter) return false;
    if (searchTerm && !lecture.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });
  
  const featuredLectures = lectures.filter(lecture => lecture.featured);
  
  return (
    <div className={styles.lectureContainer}>
      <Navbar/>
      <div className={styles.spaceBackground}></div>
      
      <div className={styles.holographicHeader}>
        <h1>LECTURES</h1>
        <p className={styles.subtitle}>Cutting-Edge Knowledge from Global Experts</p>
      </div>
      
      <div className={styles.featuredSection}>
        <h2>FEATURED PRESENTATIONS</h2>
        <div className={styles.featuredGrid}>
          {featuredLectures.map(lecture => (
            <div className={styles.featuredCard} key={`featured-${lecture.id}`}>
              <div className={styles.featuredImageContainer}>
                <div 
                  className={styles.featuredImage} 
                  style={{ backgroundImage: `url(${lecture.image})` }}
                ></div>
                <div className={styles.blueprintOverlay}></div>
                <div className={styles.featuredBadge}>FEATURED</div>
              </div>
              <div className={styles.featuredContent}>
                <h3>{lecture.title}</h3>
                <p className={styles.speakerInfo}>
                  <span className={styles.speakerName}>{lecture.speaker}</span>
                  <span className={styles.speakerOrg}>{lecture.organization}</span>
                </p>
                <p className={styles.lectureDescription}>{lecture.description}</p>
                <div className={styles.lectureDetails}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}></span>
                    <span>{lecture.date} • {lecture.time}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailIcon}></span>
                    <span>{lecture.location}</span>
                  </div>
                </div>
                <div className={styles.attendeeInfo}>
                  <div className={styles.attendeeBar}>
                    <div 
                      className={styles.attendeeFill} 
                      style={{ width: `${(lecture.attendees / lecture.maxCapacity) * 100}%` }}
                    ></div>
                  </div>
                  <span>{lecture.attendees}/{lecture.maxCapacity} Registered</span>
                </div>
                <button className={styles.registerButton}>REGISTER NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.filtersSection}>
        <div className={styles.filterButtons}>
          <button 
            className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
            onClick={() => setFilter('all')}
          >
            All Topics
          </button>
          <button 
            className={`${styles.filterButton} ${filter === 'urban' ? styles.active : ''}`}
            onClick={() => setFilter('urban')}
          >
            Urban Planning
          </button>
          <button 
            className={`${styles.filterButton} ${filter === 'materials' ? styles.active : ''}`}
            onClick={() => setFilter('materials')}
          >
            Materials Science
          </button>
          <button 
            className={`${styles.filterButton} ${filter === 'technology' ? styles.active : ''}`}
            onClick={() => setFilter('technology')}
          >
            Technology
          </button>
          <button 
            className={`${styles.filterButton} ${filter === 'oceanic' ? styles.active : ''}`}
            onClick={() => setFilter('oceanic')}
          >
            Oceanic
          </button>
          <button 
            className={`${styles.filterButton} ${filter === 'space' ? styles.active : ''}`}
            onClick={() => setFilter('space')}
          >
            Space Applications
          </button>
        </div>
        <div className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search lectures..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className={styles.searchIcon}></div>
        </div>
      </div>
      
      <div className={styles.allLecturesGrid}>
        {filteredLectures.map(lecture => (
          <div className={styles.lectureCard} key={lecture.id}>
            <div className={styles.lectureImageContainer}>
              <div 
                className={styles.lectureImage} 
                style={{ backgroundImage: `url(${lecture.image})` }}
              ></div>
              <div className={styles.lectureCategory}>{lecture.category}</div>
            </div>
            <div className={styles.lectureCardContent}>
              <h4>{lecture.title}</h4>
              <p className={styles.cardSpeaker}>{lecture.speaker}</p>
              <div className={styles.cardDetails}>
                <div className={styles.cardDetail}>
                  <span className={styles.detailDot}></span>
                  <span>{lecture.date}</span>
                </div>
                <div className={styles.cardDetail}>
                  <span className={styles.detailDot}></span>
                  <span>{lecture.time}</span>
                </div>
                <div className={styles.cardDetail}>
                  <span className={styles.detailDot}></span>
                  <span>{lecture.location}</span>
                </div>
              </div>
              <div className={styles.cardActions}>
                <button className={styles.detailsButton}>DETAILS</button>
                <button className={styles.addButton}>ADD</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.calendarView}>
        <button className={styles.calendarButton}>
          <span>View Full Schedule</span>
          <div className={styles.calendarIcon}></div>
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Lecture;