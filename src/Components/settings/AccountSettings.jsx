import React from 'react';
import styles from '../../styles/settings.module.css';
import { FaLock, FaCheckSquare, FaSquare, FaTimes } from 'react-icons/fa';

const AccountSettings = () => {
  return (
    <div className={styles.formContainer}>
      <h3 className={styles.sectionTitle}>Contact Info</h3>
      {/* ... Contact Info forms */}

      <h3 className={styles.sectionTitle}>Notification</h3>
      <div className={styles.notificationOptions}>
        {/* ... Checkboxes with labels */}
      </div>

      <h3 className={styles.sectionTitle}>Job Alerts</h3>
      {/* ... Job Alert forms */}

      <h3 className={styles.sectionTitle}>Profile Privacy</h3>
      {/* ... Switch components */}

      <h3 className={styles.sectionTitle}>Change Password</h3>
      {/* ... Password fields */}

      <h3 className={styles.sectionTitle}>Delete Your Account</h3>
      <p className={styles.deleteWarning}>If you delete your account...</p>
      <button className={styles.closeAccountButton}>
        <FaTimes /> Close Account
      </button>
    </div>
  );
};

export default AccountSettings;