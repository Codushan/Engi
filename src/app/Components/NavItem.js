import React from 'react';
import Link from 'next/link';
import styles from './NavItem.module.css';

const NavItem = ({ 
  href = '#', 
  label, 
  icon, 
  isActive = false, 
  hasDropdown = false, 
  dropdownItems = [],
  onClick 
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const handleToggleDropdown = (e) => {
    if (hasDropdown) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };
  
  return (
    <li className={styles.navItem}>
      <Link 
        href={href} 
        className={`${styles.navLink} ${isActive ? styles.active : ''}`}
        onClick={(e) => {
          if (onClick) onClick(e);
          handleToggleDropdown(e);
        }}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.label}>{label}</span>
        {hasDropdown && (
          <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        )}
      </Link>
      
      {hasDropdown && isOpen && dropdownItems.length > 0 && (
        <ul className={styles.dropdown}>
          {dropdownItems.map((item, index) => (
            <li key={`dropdown-item-${index}`} className={styles.dropdownItem}>
              <Link 
                href={item.href} 
                className={styles.dropdownLink}
                onClick={() => {
                  setIsOpen(false);
                  if (item.onClick) item.onClick();
                }}
              >
                {item.icon && <span className={styles.dropdownIcon}>{item.icon}</span>}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;