import React, { useState } from 'react';
import styles from '../../styles/topNavbar.module.css';
import { FaSearch, FaBell, FaPhoneAlt, FaAngleDown } from 'react-icons/fa';
import NotificationsPopover from '../notifications/NotificationsPopover';
import { useRealtimeNotifications } from '../../hooks/useRealtimeNotifications';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const { notificationCount, notifications } = useRealtimeNotifications();

  const toggleNotifications = () => {
    setShowNotifications(prev => !prev);
  };

  const clearNotifications = () => {
    // In a real app, this would be an API call
    console.log('Clearing all notifications...');
    setShowNotifications(false);
  };

  return (
    <nav className={styles.navbar}>
      {/* ... (existing code for left and center sections) ... */}

      <div className={styles.rightSection}>
        <div className={styles.userInfo}>
          <FaPhoneAlt />
          <span>+1-202-555-0178</span>
        </div>
        <div className={styles.languageSelector}>
          <img src="/path/to/flag-icon.png" alt="Country Flag" className={styles.flag} />
          <span>English</span>
          <FaAngleDown />
        </div>
        
        {/* The new notification bell with a badge */}
        <div className={styles.notificationBell} onClick={toggleNotifications}>
          <FaBell className={styles.notificationIcon} />
          {notificationCount > 0 && <span className={styles.badge}>{notificationCount}</span>}
          {showNotifications && (
            <NotificationsPopover notifications={notifications} onClear={clearNotifications} />
          )}
        </div>
        
        <img src="/path/to/user-avatar.png" alt="User Avatar" className={styles.userAvatar} />
      </div>
    </nav>
  );
};

export default Header;