"use client"
import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CountdownTimer from '../components/CountdownTimer';
import AIAssistant from '../components/AIAssistant';
import LeaderboardWidget from '../components/LeaderboardWidget';
import ARPreviewCard from '../components/ARPreviewCard';
import HolographicCity from '../components/HolographicCity';
import NetworkingMap from '../components/NetworkingMap';
import HighlightCard from '../components/HighlightCard';
import StatCard from '../components/StatCard';
import Footer from '../components/Footer';
import { FaTrophy, FaCalendarAlt, FaChalkboardTeacher, FaHome, FaUsers, FaMapMarkedAlt, FaMicrophone, FaTools, FaUserFriends } from 'react-icons/fa';


// Import styles
import styles from './index.module.css';
import Navbar from '../components/NavBar';

const text = "Our Highlights";
const animatedText = text.split("").map((char, index) => (
  <span key={index} style={{ "--dir": Math.random() > 0.5 ? 1 : -1 }}>
    {char === " " ? "\u00A0" : char}
  </span>
));

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const mainRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
   
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className={styles.container}>
      <Navbar/>
      
      <main ref={mainRef} className={styles.main}>
        <section className={styles.hero}>
          <motion.div 
            className={styles.heroContent} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1>Building <span>Tomorrow's</span> World</h1>
            <p>Join the world's leading engineers and architects at the most innovative civil engineering festival of 2025</p>
            <CountdownTimer targetDate="2025-06-15T09:00:00" />
          </motion.div>
        </section>
        
        <section className={styles.highlights}>
          <div><h2>{animatedText}</h2></div>
          <p>Explore groundbreaking innovations and connect with industry leaders.</p>
        </section>
      </main>
      
      {/* <AIAssistant isOpen={isAssistantOpen} onClose={() => setIsAssistantOpen(false)} /> */}
      {/* <button className={styles.aiButton} onClick={() => setIsAssistantOpen(true)}>AI</button> */}
      <HolographicCity/>
      {/* <ARPreviewCard/> */}
      <LeaderboardWidget/>
      <NetworkingMap/>
      <HighlightCard/>
      <StatCard/>
      <Footer/>
    </div>
  );
}

const NavItem = ({ href, icon, label }) => (
  <Link href={href} legacyBehavior>
    <a className={styles.navItem}>
      {icon}
      <span>{label}</span>
    </a>
  </Link>
);