import React from 'react';
import styles from '../../styles/sidebar.module.css';
import { FaTachometerAlt, FaBriefcase, FaBookmark, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link, useLocation, Navigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Get the current URL location

  return (
    <nav className={styles.sidebar}>
      <div className={styles.sectionTitle}>CANDIDATE DASHBOARD</div>
      <ul className={styles.menu}>
        <li className={`${styles.menuItem} ${location.pathname === '/job-seeker/dashboard' ? styles.active : ''}`}>
          <Link to="/job-seeker/dashboard">
            <FaTachometerAlt />
            <span>Overview</span>
          </Link>
        </li>
        <li className={`${styles.menuItem} ${location.pathname === '/job-seeker/applied-jobs' ? styles.active : ''}`}>
          <Link to="/job-seeker/applied-jobs">
            <FaBriefcase />
            <span>Applied Jobs</span>
          </Link>
        </li>
        <li className={`${styles.menuItem} ${location.pathname === '/job-seeker/favorite-jobs' ? styles.active : ''}`}>
          <Link to="/job-seeker/favorite-jobs">
            <FaBookmark />
            <span>Favorite Jobs</span>
          </Link>
        </li>
        <li className={`${styles.menuItem} ${location.pathname === '/job-seeker/job-alerts' ? styles.active : ''}`}>
          <Link to="/job-seeker/job-alerts">
            <FaBell />
            <span>Job Alert</span>
            <span className={styles.badge}>09</span>
          </Link>
        </li>
        <li className={`${styles.menuItem} ${location.pathname === '/job-seeker/settings' ? styles.active : ''}`}>
          <Link to="/job-seeker/settings">
            <FaCog />
            <span>Settings</span>
          </Link>
        </li>
        <li><Link to = "/job-seeker/findjob"><button className='btn btn-primary'>Find Jobs</button></Link></li>
      </ul>
      <div className={styles.logout}>
        <Link to="/">
          <FaSignOutAlt />
          <span>Log-out</span>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;