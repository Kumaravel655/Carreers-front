import React from 'react';
import styles from '../../styles/sidebar.module.css';
import { FaTachometerAlt, FaBriefcase, FaBookmark, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Get the current URL location

  return (
    <nav className={styles.sidebar}>
      <div className={styles.sectionTitle}>CANDIDATE DASHBOARD</div>
      <ul className={styles.menu}>
        <li className={`${styles.menuItem} ${location.pathname === '/dashboard' ? styles.active : ''}`}>
          <Link to="/dashboard">
            <FaTachometerAlt />
            <span>Overview</span>
          </Link>
        </li>
        <li className={`${styles.menuItem} ${location.pathname === '/applied-jobs' ? styles.active : ''}`}>
          <Link to="/applied-jobs">
            <FaBriefcase />
            <span>Applied Jobs</span>
          </Link>
        </li>
        <li className={`${styles.menuItem} ${location.pathname === '/favorite-jobs' ? styles.active : ''}`}>
          <Link to="/favorite-jobs">
            <FaBookmark />
            <span>Favorite Jobs</span>
          </Link>
        </li>
        <li className={`${styles.menuItem} ${location.pathname === '/job-alerts' ? styles.active : ''}`}>
          <Link to="/job-alerts">
            <FaBell />
            <span>Job Alert</span>
            <span className={styles.badge}>09</span>
          </Link>
        </li>
        <li className={`${styles.menuItem} ${location.pathname === '/settings' ? styles.active : ''}`}>
          <Link to="/settings">
            <FaCog />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
      <div className={styles.logout}>
        <Link to="/logout">
          <FaSignOutAlt />
          <span>Log-out</span>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;