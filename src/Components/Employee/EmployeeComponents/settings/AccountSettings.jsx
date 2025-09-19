import React, { useState } from "react";
import styles from "./settings.module.css";
import { FaTimes, FaMapMarkerAlt, FaPhone, FaEnvelope, FaBriefcase } from "react-icons/fa";

const AccountSettings = () => {
  const [notifications, setNotifications] = useState({
    shortlisted: false,
    savedProfile: false,
    jobsExpire: false,
    rejected: true,
    jobAlerts: true,
  });

  const [privacy, setPrivacy] = useState({
    profile: true,
    resume: false,
  });

  return (
    <div className={styles.formContainer}>
      {/* Contact Info */}
      <h3 className={styles.sectionTitle}>Contact Info</h3>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Map Location</label>
          <input type="text" placeholder="Enter your location" />
        </div>
        <div className={styles.formGroup}>
          <label>Phone</label>
          <div className={styles.inputWithIcon}>
            
            <input type="tel" placeholder="+91 Phone number.." />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>Email</label>
          <div className={styles.inputWithIcon}>
           
            <input type="email" placeholder="Email address" />
          </div>
        </div>
      </div>
      <button className={styles.saveButton}>Save Changes</button>

      {/* Notification */}
      <h3 className={styles.sectionTitle}>Notification</h3>
      <div className={styles.notificationOptions}>
        {Object.entries({
          shortlisted: "Notify me when employers shortlisted me",
          savedProfile: "Notify me when employers saved my profile",
          jobsExpire: "Notify me when my applied jobs are expire",
          rejected: "Notify me when employers rejected me",
          jobAlerts: "Notify me when I have up to 5 job alerts",
        }).map(([key, label]) => (
          <label key={key} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={notifications[key]}
              onChange={() =>
                setNotifications({ ...notifications, [key]: !notifications[key] })
              }
            />
            {label}
          </label>
        ))}
      </div>

      {/* Job Alerts */}
      <h3 className={styles.sectionTitle}>Job Alerts</h3>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <div className={styles.inputWithIcon}>
            <FaBriefcase />
            <input type="text" placeholder="Your job roles" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.inputWithIcon}>
            <FaMapMarkerAlt />
            <input type="text" placeholder="City, state, country name" />
          </div>
        </div>
      </div>
      <button className={styles.saveButton}>Save Changes</button>

      {/* Profile Privacy */}
      <h3 className={styles.sectionTitle}>Profile Privacy</h3>
      <div className={styles.privacyRow}>
        <div className={styles.privacyToggle}>
          <span>Profile Privacy</span>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={privacy.profile}
              onChange={() =>
                setPrivacy({ ...privacy, profile: !privacy.profile })
              }
            />
            <span className={styles.slider}></span>
          </label>
          <small>
            {privacy.profile
              ? "Your profile is public now"
              : "Your profile is private now"}
          </small>
        </div>

        <div className={styles.privacyToggle}>
          <span>Resume Privacy</span>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={privacy.resume}
              onChange={() =>
                setPrivacy({ ...privacy, resume: !privacy.resume })
              }
            />
            <span className={styles.slider}></span>
          </label>
          <small>
            {privacy.resume
              ? "Your resume is public now"
              : "Your resume is private now"}
          </small>
        </div>
      </div>

      {/* Change Password */}
      <h3 className={styles.sectionTitle}>Change Password</h3>
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <input type="password" placeholder="Current Password" />
        </div>
        <div className={styles.formGroup}>
          <input type="password" placeholder="New Password" />
        </div>
        <div className={styles.formGroup}>
          <input type="password" placeholder="Confirm Password" />
        </div>
      </div>
      <button className={styles.saveButton}>Save Changes</button>

      {/* Delete Account */}
      <h3 className={styles.sectionTitle}>Delete Your Account</h3>
      <p className={styles.deleteWarning}>
        If you delete your account, you will no longer be able to get
        information about the matched jobs, following employers, job alerts,
        shortlisted jobs and more. You will be abandoned from all the services
        of Jobpilot.com.
      </p>
      <button className={styles.closeAccountButton}>
        <FaTimes /> Close Account
      </button>
    </div>
  );
};

export default AccountSettings;
