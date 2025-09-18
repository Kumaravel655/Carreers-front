import React from "react";
import styles from "./notifications.module.css";
import { FaBell } from "react-icons/fa";

const NotificationsPopover = ({ notifications, onClear }) => {
  return (
    <div className={styles.popoverContainer}>
      <div className={styles.popoverHeader}>
        <h4>Notifications</h4>
        <button onClick={onClear}>Clear All</button>
      </div>
      <div className={styles.notificationList}>
        {notifications.length > 0 ? (
          notifications.map((note) => (
            <div key={note.id} className={styles.notificationItem}>
              <div className={styles.notificationIcon}>
                <FaBell />
              </div>
              <div className={styles.notificationDetails}>
                <p>{note.message}</p>
                <span>{note.timestamp.toLocaleTimeString()}</span>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.noNotifications}>No new notifications.</p>
        )}
      </div>
    </div>
  );
};

export default NotificationsPopover;
