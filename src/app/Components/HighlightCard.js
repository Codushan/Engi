import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { FaTrophy, FaChalkboardTeacher, FaUsers } from 'react-icons/fa';
import styles from './HighlightCard.module.css';

const HighlightCard = ({
  title,
  description,
  image,
  icon,
  link,
  tags = [],
  featured = false,
  reversed = false
}) => {
  return (
    <div className={`
      ${styles.card} 
      ${featured ? styles.featured : ''} 
      ${reversed ? styles.reversed : ''}
    `}>
      <div className={styles.content}>
        {icon && <div className={styles.iconWrapper}>{icon}</div>}
        
        <h3 className={styles.title}>{title}</h3>
        
        <p className={styles.description}>{description}</p>
        
        {tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={`tag-${index}`} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
        
        {link && (
          <Link href={link.href} className={styles.link}>
            <span>{link.label}</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={styles.arrow}
            >
              <path 
                d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        )}
      </div>
      
      {image && (
        <div className={styles.imageWrapper}>
          <Image 
  src={image.src} 
  alt={image.alt || title} 
  width={500} // Set appropriate width
  height={300} // Set appropriate height
  className={styles.image} 
/>
          
          {featured && (
            <div className={styles.featuredBadge}>
              <span>Featured</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const highlights = [
  {
    title: 'Exciting Competitions',
    description: 'Participate in thrilling competitions and showcase your skills.',
    image: { src: '/images/competition.jpg', alt: 'Competition' },
    icon: <FaTrophy size={30} color="#FFD700" />,
    link: { href: '/competitions', label: 'Explore Competitions' },
    tags: ['Engineering', 'Challenge', 'Innovation'],
    featured: true,
  },
  {
    title: 'Expert Lectures',
    description: 'Gain insights from industry leaders and top academicians.',
    image: { src: '/images/lecture.jpg', alt: 'Lecture' },
    icon: <FaChalkboardTeacher size={30} color="#4CAF50" />,
    link: { href: '/lectures', label: 'Join Lectures' },
    tags: ['Knowledge', 'Networking', 'Future'],
  },
  {
    title: 'Meet Our Team',
    description: 'Get to know the people behind EngiFuture 2025.',
    image: { src: '/images/team.jpg', alt: 'Our Team' },
    icon: <FaUsers size={30} color="#007BFF" />,
    link: { href: '/team', label: 'Meet the Team' },
    tags: ['Organizers', 'Passion', 'Commitment'],
    reversed: true,
  },
];

const HighlightSection = () => (
  <div>
    {highlights.map((item, index) => (
      <HighlightCard key={index} {...item} />
    ))}
  </div>
);

export default HighlightSection;
