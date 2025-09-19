import React, { useState } from "react";
import styles from "./topNavbar.module.css";
import { FaSearch, FaBell, FaPhoneAlt, FaAngleDown } from "react-icons/fa";
import NotificationsPopover from "../notifications/NotificationsPopover";
import { useRealtimeNotifications } from "../services/useRealtimeNotifications";

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const { notificationCount, notifications } = useRealtimeNotifications();

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
  };

  const clearNotifications = () => {
    console.log("Clearing all notifications...");
    setShowNotifications(false);
  };

  return "";
  // <nav className={styles.navbar}>
  //   <div className={styles.leftSection}>
  //     <img src="/path/to/jobpilot-logo.png" alt="Jobpilot Logo" className={styles.logo} />
  //     <div className={styles.navLinks}>
  //       <a href="#" className={styles.navItem}>Home</a>
  //       <a href="#" className={styles.navItem}>Find Job</a>
  //       <a href="#" className={styles.navItem}>Find Employers</a>
  //       <a href="#" className={`${styles.navItem} ${styles.active}`}>Dashboard</a>
  //       <a href="#" className={styles.navItem}>Job Alerts</a>
  //       <a href="#" className={styles.navItem}>Customer Supports</a>
  //     </div>
  //   </div>

  //   <div className={styles.centerSection}>
  //     <div className={styles.searchBox}>
  //       <FaSearch className={styles.searchIcon} />
  //       <input type="text" placeholder="Job title, keyword, company" />
  //     </div>
  //   </div>

  //   <div className={styles.rightSection}>
  //     <div className={styles.userInfo}>
  //       <FaPhoneAlt />
  //       <span>+1-202-555-0178</span>
  //     </div>
  //     <div className={styles.languageSelector}>
  //       <img src="/path/to/flag-icon.png" alt="Country Flag" className={styles.flag} />
  //       <span>English</span>
  //       <FaAngleDown />
  //     </div>

  //     <div className={styles.notificationBell} onClick={toggleNotifications}>
  //       <FaBell className={styles.notificationIcon} />
  //       {notificationCount > 0 && <span className={styles.badge}>{notificationCount}</span>}
  //       {showNotifications && (
  //         <NotificationsPopover notifications={notifications} onClear={clearNotifications} />
  //       )}
  //     </div>

  //     <img src="/path/to/user-avatar.png" alt="User Avatar" className={styles.userAvatar} />
  //   </div>
  // </nav>
};

export default Header;
