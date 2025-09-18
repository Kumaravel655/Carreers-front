import React from 'react';
import styles from '../../styles/dashboard.module.css';
import { FaUserCircle, FaArrowRight } from 'react-icons/fa';

const ProfileCompletionAlert = () => {
  return (
    <div className={styles.profileAlert}>
      <div className={styles.alertContent}>
        <FaUserCircle className={styles.alertIcon} />
        <div className={styles.alertText}>
          <p className={styles.alertTitle}>Your profile editing is not completed.</p>
          <p className={styles.alertMessage}>Complete your profile editing & build your custom Resume</p>
        </div>
      </div>
      <button className={styles.editProfileButton}>
        Edit Profile <FaArrowRight />
      </button>
    </div>
  );
};

export default ProfileCompletionAlert;