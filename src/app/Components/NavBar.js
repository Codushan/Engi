import Link from 'next/link';
import { FaTrophy, FaCalendarAlt, FaChalkboardTeacher, FaHome, FaUsers, FaMapMarkedAlt, FaMicrophone, FaTools, FaUserFriends } from 'react-icons/fa';
import styles from './Navbar.module.css';

const NavItem = ({ href, icon, label }) => (
  <Link href={href} legacyBehavior>
    <a className={styles.navItem}>
      {icon}
      <span>{label}</span>
    </a>
  </Link>
);

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link href="/" legacyBehavior>
        <div className={styles.logo}><a>ENGI<span>FUTURE</span> 2025</a></div>
      </Link>
      
      <nav className={styles.nav}>
        <NavItem href="/#" icon={<FaHome />} label="Home" />
        <NavItem href="/Schedule" icon={<FaCalendarAlt />} label="Schedule" />
        <NavItem href="/Workshops" icon={<FaTools />} label="Workshops" />
        <NavItem href="/Lecture" icon={<FaChalkboardTeacher />} label="Lecture" />
        <NavItem href="/Competition" icon={<FaTrophy />} label="Competition" />
        <NavItem href="/Team" icon={<FaUsers />} label="Our Team" />
        <NavItem href="/Speakers" icon={<FaMicrophone />} label="Speakers" />
        <NavItem href="/Contact" icon={<FaUserFriends />} label="Contact Us" />
      </nav>
    </header>
  );
};

export default Navbar;