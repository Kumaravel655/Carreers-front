import React, { useState } from "react";
import styles from "./settings.module.css";
import { FaUpload, FaTrashAlt, FaPen } from "react-icons/fa";
import Modal from "../common/Modal";

const PersonalSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resumes = [
    { name: "Professional Resume", size: "3.5 MB" },
    { name: "Product Designer", size: "4.7 MB" },
    { name: "Visual Designer", size: "1.3 MB" },
  ];

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.sectionTitle}>Basic Information</h3>
      <div className={styles.basicInfoForm}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Profile Picture</label>
            <div className={styles.uploadBox}>
              <FaUpload />
              <span>Browse photo or drop here</span>
              <p>
                4 photos larger than 400 pixels work best. Max photo size 5 MB
              </p>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Full name</label>
            <input type="text" placeholder="Your full name" />
          </div>
          <div className={styles.formGroup}>
            <label>Title/Headline</label>
            <input type="text" placeholder="Title/Headline" />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Experience</label>
            <select>
              <option>Select...</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Educations</label>
            <select>
              <option>Select...</option>
            </select>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label>Personal Website</label>
          <input type="text" placeholder="Website url..." />
        </div>
        <button className={styles.saveButton}>Save Changes</button>
      </div>

      <h3 className={styles.sectionTitle}>Your CV/Resume</h3>
      <div className={styles.resumeList}>
        <div
          className={styles.addResumeCard}
          onClick={() => setIsModalOpen(true)}
        >
          <FaUpload className={styles.addIcon} />
          <p>Add Cv/Resume</p>
          <span>Browse file or drop here, only .pdf</span>
        </div>
        {resumes.map((resume, index) => (
          <div key={index} className={styles.resumeCard}>
            <p className={styles.resumeName}>{resume.name}</p>
            <span className={styles.resumeSize}>{resume.size}</span>
            <div className={styles.resumeActions}>
              <button>
                <FaPen />
              </button>
              <button>
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className={styles.modalTitle}>Add Cv/Resume</h3>
        <p className={styles.modalSubTitle}>CV/Resume Name</p>
        <input
          type="text"
          placeholder="Cv/Resume Name"
          className={styles.modalInput}
        />
        <p className={styles.modalSubTitle}>Upload Your Cv/Resume</p>
        <div className={styles.modalUploadBox}>
          <FaUpload />
          <span>Browse File or drop here</span>
          <p>Only PDF format available. Max file size 12 MB.</p>
        </div>
        <div className={styles.modalButtons}>
          <button
            className={styles.cancelButton}
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button className={styles.addButton}>Add Cv/Resume</button>
        </div>
      </Modal>
    </div>
  );
};

export default PersonalSettings;
