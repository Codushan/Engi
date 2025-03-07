// components/Speakers.js
"use client"
import React, { useState, useRef, useEffect } from 'react';
import styles from './page.module.css';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Speakers = () => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');
  const [expandedSpeaker, setExpandedSpeaker] = useState(null);
  const speakersRef = useRef(null);

  const speakers = [
    {
      id: 1,
      name: "Dr. Elena Rodriguez",
      title: "Sustainable Urban Mobility Innovator",
      image: "/speakers/elena-rodriguez.png",
      category: ["keynote", "urban-design"],
      background: "Ph.D. in Urban Systems Engineering, MIT",
      description: "Global leader in transformative urban mobility solutions, specializing in autonomous transportation and smart city infrastructure.",
      specialties: [
        "Autonomous Transportation",
        "Smart City Design",
        "Urban Mobility Systems"
      ],
      keynoteTitle: "Reimagining Urban Mobility: The Next Decade of Transportation",
      socialLinks: {
        linkedin: "https://linkedin.com/in/elenarodriguez",
        twitter: "https://twitter.com/elenarodriguez"
      },
      researchHighlights: [
        "Developed first fully integrated autonomous public transit system",
        "Published groundbreaking research on urban mobility ecosystems",
        "Advisor to UN Smart Cities Initiative"
      ]
    },
    {
      id: 2,
      name: "Prof. Akira Tanaka",
      title: "Resilient Infrastructure Architect",
      image: "/speakers/akira-tanaka.png",
      category: ["keynote", "resilience"],
      background: "Ph.D. in Structural Resilience, University of Tokyo",
      description: "World-renowned expert in designing infrastructure that adapts and survives in extreme environmental conditions.",
      specialties: [
        "Climate-Adaptive Design",
        "Earthquake Engineering",
        "Resilient Structures"
      ],
      keynoteTitle: "Engineering for Extreme: Building Infrastructures That Survive and Thrive",
      socialLinks: {
        linkedin: "https://linkedin.com/in/akiratanaka",
        google: "https://scholar.google.com/akiratanaka"
      },
      researchHighlights: [
        "Designed Tokyo's earthquake-resistant metropolitan infrastructure",
        "Created self-healing concrete technology",
        "Recipient of Global Resilience Engineering Award"
      ]
    },
    {
      id: 3,
      name: "Dr. Maya Chen",
      title: "AI and Computational Design Pioneer",
      image: "/speakers/maya-chen.png",
      category: ["tech", "innovation"],
      background: "Ph.D. in Computational Engineering, Stanford University",
      description: "Leading researcher integrating artificial intelligence with computational design to revolutionize engineering processes.",
      specialties: [
        "AI in Engineering",
        "Generative Design",
        "Machine Learning"
      ],
      keynoteTitle: "Algorithmic Engineering: How AI is Redefining Design Possibilities",
      socialLinks: {
        linkedin: "https://linkedin.com/in/mayachen",
        twitter: "https://twitter.com/mayachen"
      },
      researchHighlights: [
        "Developed AI-driven structural optimization algorithms",
        "Created first fully generative bridge design system",
        "Named in MIT Technology Review's Top 35 Innovators"
      ]
    },
    {
      id: 4,
      name: "Omar Al-Farsi",
      title: "Sustainable Infrastructure Developer",
      image: "/speakers/omar-alfarsi.png",
      category: ["sustainability", "urban-design"],
      background: "MSc in Sustainable Infrastructure, Cambridge University",
      description: "International expert in developing sustainable infrastructure solutions for emerging urban environments.",
      specialties: [
        "Sustainable Urban Planning",
        "Green Infrastructure",
        "Climate Adaptation"
      ],
      keynoteTitle: "Designing Cities of Tomorrow: Sustainable Infrastructure Strategies",
      socialLinks: {
        linkedin: "https://linkedin.com/in/omaralfarsi"
      },
      researchHighlights: [
        "Led sustainable urban development project in Qatar",
        "Designed carbon-neutral district infrastructure",
        "UN Climate Action Advisory Board Member"
      ]
    },
    {
      id: 5,
      name: "Dr. Sarah Williams",
      title: "Digital Twin Technology Expert",
      image: "/speakers/sarah-williams.png",
      category: ["tech", "innovation"],
      background: "Ph.D. in Digital Engineering, Imperial College London",
      description: "Pioneering researcher developing comprehensive digital twin technologies for complex infrastructure systems.",
      specialties: [
        "Digital Twin Modeling",
        "Infrastructure Simulation",
        "Real-time Data Analysis"
      ],
      keynoteTitle: "Digital Twins: The Future of Predictive Infrastructure Management",
      socialLinks: {
        linkedin: "https://linkedin.com/in/sarahwilliams",
        twitter: "https://twitter.com/sarahwilliams"
      },
      researchHighlights: [
        "Created first comprehensive urban digital twin platform",
        "Developed real-time infrastructure monitoring systems",
        "Innovator Award, International Digital Engineering Conference"
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Speakers' },
    { id: 'keynote', label: 'Keynote Speakers' },
    { id: 'tech', label: 'Tech Innovators' },
    { id: 'urban-design', label: 'Urban Design' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'resilience', label: 'Resilience Engineering' }
  ];

  const filteredSpeakers = activeCategoryFilter === 'all' 
    ? speakers 
    : speakers.filter(speaker => speaker.category.includes(activeCategoryFilter));

  const toggleSpeakerExpansion = (id) => {
    setExpandedSpeaker(expandedSpeaker === id ? null : id);
  };

  useEffect(() => {
    // Scroll to top of speakers section when filter changes
    if (speakersRef.current) {
      speakersRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeCategoryFilter]);

  return (
    <div className={styles.speakersContainer}>
      <Navbar/>
      <div className={styles.holographicHeader}>
        <h1>CIVFORGE SPEAKERS</h1>
        <div className={styles.gridPatterns}></div>
        <p className={styles.subtitle}>Visionaries Shaping the Future of Engineering</p>
      </div>

      <div className={styles.categoriesFilter}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.categoryButton} ${activeCategoryFilter === category.id ? styles.active : ''}`}
            onClick={() => setActiveCategoryFilter(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div ref={speakersRef} className={styles.speakersGrid}>
        {filteredSpeakers.map((speaker) => (
          <div 
            key={speaker.id} 
            className={`${styles.speakerCard} ${expandedSpeaker === speaker.id ? styles.expanded : ''}`}
            onClick={() => toggleSpeakerExpansion(speaker.id)}
          >
            <div className={styles.speakerBasic}>
              <div className={styles.speakerImageContainer}>
                <div 
                  className={styles.speakerImage}
                  style={{ backgroundImage: `url(${speaker.image})` }}
                ></div>
                <div className={styles.holographicRing}></div>
              </div>
              
              <div className={styles.speakerInfo}>
                <h3>{speaker.name}</h3>
                <div className={styles.speakerTitle}>{speaker.title}</div>
                <div className={styles.speakerBackground}>{speaker.background}</div>
                
                <div className={styles.expandPrompt}>
                  {expandedSpeaker === speaker.id ? 'Show Less' : 'Show More'}
                  <div className={`${styles.expandIcon} ${expandedSpeaker === speaker.id ? styles.rotated : ''}`}></div>
                </div>
              </div>
            </div>
            
            {expandedSpeaker === speaker.id && (
              <div className={styles.speakerExpanded}>
                <div className={styles.keynoteSection}>
                  <h4>KEYNOTE PRESENTATION</h4>
                  <p className={styles.keynoteTitle}>{speaker.keynoteTitle}</p>
                </div>
                
                <p className={styles.speakerDescription}>{speaker.description}</p>
                
                <div className={styles.speakerSection}>
                  <h4>SPECIALTIES</h4>
                  <div className={styles.specialtiesList}>
                    {speaker.specialties.map((specialty, index) => (
                      <span key={index} className={styles.specialty}>{specialty}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.speakerSection}>
                  <h4>RESEARCH HIGHLIGHTS</h4>
                  <ul className={styles.researchList}>
                    {speaker.researchHighlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.socialLinks}>
                  {Object.entries(speaker.socialLinks).map(([platform, link]) => (
                    <a 
                      key={platform} 
                      href={link} 
                      className={`${styles.socialLink} ${styles[platform]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.speakersFooter}>
        <div className={styles.callToAction}>
          <h3>Interested in Speaking at CIVFORGE 2025?</h3>
          <p>We're always looking for innovative minds to share groundbreaking ideas in civil engineering.</p>
          <button className={styles.applyButton}>SUBMIT SPEAKER PROPOSAL</button>
        </div>
        
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>12</div>
            <div className={styles.statLabel}>Keynote Speakers</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>42</div>
            <div className={styles.statLabel}>Total Speakers</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>18</div>
            <div className={styles.statLabel}>Countries Represented</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>5+</div>
            <div className={styles.statLabel}>Days of Talks</div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Speakers;