import React from 'react';
import Link from 'next/link';
import FooterLink from './FooterLink';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaPhone
} from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>ENGI<span>FUTURE</span> 2025</h2>
          <p className={styles.tagline}>Shaping the Future of Engineering Innovation</p>
          <div className={styles.socialLinks}>
            <FooterLink 
              href="https://linkedin.com" 
              label="LinkedIn" 
              icon={<FaLinkedin />} 
              type="highlight" 
              isExternal 
            />
            <FooterLink 
              href="https://twitter.com" 
              label="Twitter" 
              icon={<FaTwitter />} 
              type="highlight" 
              isExternal 
            />
            <FooterLink 
              href="https://github.com" 
              label="GitHub" 
              icon={<FaGithub />} 
              type="highlight" 
              isExternal 
            />
          </div>
        </div>

        <div className={styles.linkColumns}>
          <div className={styles.linkColumn}>
            <h4>Conference</h4>
            <FooterLink href="/Schedule" label="Event Schedule" />
            <FooterLink href="/Speakers" label="Speakers" />
            <FooterLink href="/Workshops" label="Workshops" />
            <FooterLink href="/Competition" label="Competitions" />
          </div>

          <div className={styles.linkColumn}>
            <h4>About</h4>
            <FooterLink href="/About" label="About EngineFuture" />
            <FooterLink href="/Team" label="Our Team" />
            <FooterLink href="/Partners" label="Partners" />
            <FooterLink href="/Press" label="Press" />
          </div>

          <div className={styles.linkColumn}>
            <h4>Support</h4>
            <FooterLink href="/Contact" label="Contact Us" />
            <FooterLink href="/FAQ" label="FAQ" />
            <FooterLink href="/Help" label="Help Center" />
            <FooterLink href="/Accessibility" label="Accessibility" />
          </div>
        </div>

        <div className={styles.contactSection}>
          <h4>Contact Information</h4>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.contactIcon} />
            <span>123 Innovation Drive, Tech City, Global 54321</span>
          </div>
          <div className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.contactIcon} />
            <span>info@enginefuture.com</span>
          </div>
          
          <FooterLink 
            href="/Register" 
            label="Register Now" 
            type="button" 
          />
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.legalLinks}>
          <FooterLink href="/Privacy" label="Privacy Policy" />
          <FooterLink href="/Terms" label="Terms of Service" />
          <FooterLink href="/Cookies" label="Cookie Preferences" />
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} EngineFuture Conference. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;