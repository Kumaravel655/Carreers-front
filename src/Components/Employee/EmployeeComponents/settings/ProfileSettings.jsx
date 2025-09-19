import React from 'react';
import styles from './settings.module.css';

const ProfileSettings = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label>Nationality</label>
        <input type="text" placeholder="Nationality" />
      </div>
      <div className={styles.formGroup}>
        <label>Date of Birth</label>
        <input type="date" />
      </div>
      {/* ... Add other fields from the image */}
      <button className={styles.saveButton}>Save Changes</button>
    </div>
  );
};

export default ProfileSettings;