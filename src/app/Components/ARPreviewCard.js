// components/ARPreviewCard.js
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUsers, FaCalendarAlt, FaVrCardboard } from 'react-icons/fa';
import styles from './ARPreviewCard.module.css';

const ARPreviewCard = ({ title, instructor, date, participants, maxParticipants, thumbnail, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate percentage of spots filled
  const spotsFilled = (participants / maxParticipants) * 100;
  
  return (
    <motion.div 
      className={styles.card}
      whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0, 255, 252, 0.2)' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link href={link || "/default-page"} className={styles.link}>
        <div className={styles.thumbnailContainer}>
          {/* Placeholder for workshop thumbnail image */}
          <div 
            className={styles.thumbnail}
            style={{
              backgroundImage: `url(${thumbnail})`,
            }}
          ></div>
          
          {/* AR overlay effect */}
          <div className={styles.overlayCenter}>
            <motion.div 
              className={styles.iconCircle}
              animate={{ scale: isHovered ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <FaVrCardboard className={styles.vrIcon} />
            </motion.div>
          </div>
          
          {/* Blueprint animation overlay */}
          <motion.div 
            className={isHovered ? `${styles.blueprintOverlay} ${styles.blueprintVisible}` : styles.blueprintOverlay}
            style={{
              backgroundImage: `url('/images/blueprint-pattern.svg')`,
            }}
            animate={{ 
              backgroundPositionX: isHovered ? '50px' : '0px',
              backgroundPositionY: isHovered ? '30px' : '0px',
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          ></motion.div>
        </div>
        
        <div className={styles.content}>
          <h3 className={isHovered ? `${styles.title} ${styles.titleHovered}` : styles.title}>
            {title}
          </h3>
          
          <p className={styles.instructor}>Instructor: {instructor}</p>
          
          <div className={styles.dateContainer}>
            <FaCalendarAlt className={styles.dateIcon} />
            {date}
          </div>
          
          <div className={styles.registrationContainer}>
            <div className={styles.registrationHeader}>
              <span className={styles.registrationLabel}>
                <FaUsers className={styles.usersIcon} />
                Registration
              </span>
              <span className={styles.registrationCount}>{participants}/{maxParticipants}</span>
            </div>
            <div className={styles.progressBarContainer}>
              <motion.div 
                className={styles.progressBar}
                initial={{ width: 0 }}
                animate={{ width: `${spotsFilled}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              ></motion.div>
            </div>
          </div>
          
          <div className={styles.joinLink}>
            <span className={styles.joinText}>Join Workshop</span>
            <span className={isHovered ? `${styles.arrow} ${styles.arrowHovered}` : styles.arrow}>→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ARPreviewCard;