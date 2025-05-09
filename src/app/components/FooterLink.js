import React from 'react';
import Link from 'next/link';
import styles from './FooterLink.module.css';

const FooterLink = ({ 
  href, 
  label, 
  icon = null, 
  type = 'text', // 'text', 'button', 'highlight'
  isExternal = false,
  onClick = null
}) => {
  // Ensure href is always a valid string
  const validHref = href && typeof href === 'string' ? href : '#';

  return (
    <Link href={validHref} passHref legacyBehavior>
      <a 
        className={`${styles.link} ${styles[type]}`} 
        onClick={onClick} 
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{label}</span>

        {isExternal && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={styles.externalIcon}
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 1 2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        )}

        {type === 'button' && (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={styles.arrowIcon}
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        )}
      </a>
    </Link>
  );
};

export default FooterLink;
