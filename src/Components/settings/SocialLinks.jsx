import React from 'react';
import styles from '../../styles/settings.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPlus } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className={styles.formContainer}>
      {/* ... Social link input fields with icons */}
      <div className={styles.addSocialLink}>
        <FaPlus /> Add New Social Link
      </div>
      <button className={styles.saveButton}>Save Changes</button>
    </div>
  );
};

export default SocialLinks;