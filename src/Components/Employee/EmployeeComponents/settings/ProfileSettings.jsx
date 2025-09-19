import React from "react";
import styles from "./settings.module.css";

const ProfileSettings = () => {
  return (
    <div className={styles.formContainer}>
      
      <form>
        <div className={styles.grid}>
          {/* Nationality */}
          <div className={styles.formGroup}>
            <label>Nationality</label>
            <select>
              <option>Select...</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className={styles.formGroup}>
            <label>Date of Birth</label>
            <input type="date" />
          </div>

          {/* Gender */}
          <div className={styles.formGroup}>
            <label>Gender</label>
            <select>
              <option>Select...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Marital Status */}
          <div className={styles.formGroup}>
            <label>Marital Status</label>
            <select>
              <option>Select...</option>
              <option>Single</option>
              <option>Married</option>
            </select>
          </div>

          {/* Education */}
          <div className={styles.formGroup}>
            <label>Education</label>
            <select>
              <option>Select...</option>
              <option>Bachelor</option>
              <option>Master</option>
              <option>PhD</option>
            </select>
          </div>

          {/* Experience */}
          <div className={styles.formGroup}>
            <label>Experience</label>
            <select>
              <option>Select...</option>
              <option>1 Year</option>
              <option>2 Years</option>
              <option>5+ Years</option>
            </select>
          </div>
        </div>

        {/* Biography */}
        <div className={styles.formGroupFull}>
          <label>Biography</label>
          <textarea
            placeholder="Write down your biography here. Let the employers know who you are..."
            rows="5"
          ></textarea>
        </div>

        {/* Save Button */}
        <button type="submit" className={styles.saveButton}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
