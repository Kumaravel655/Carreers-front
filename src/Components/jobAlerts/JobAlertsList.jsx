import React from 'react';
import styles from '../../styles/jobAlerts.module.css';
import { FaBookmark, FaArrowRight, FaPencilAlt } from 'react-icons/fa';

const JobAlertsList = ({ alerts }) => {
  return (
    <div className={styles.jobAlertsList}>
      <div className={styles.listHeader}>
        <h2 className={styles.listTitle}>Job Alerts <span className={styles.newBadge}>(new jobs)</span></h2>
        <a href="#" className={styles.editAlertsLink}>
          <FaPencilAlt /> Edit Job Alerts
        </a>
      </div>
      <div className={styles.jobList}>
        {alerts.map((alert) => (
          <div key={alert.id} className={styles.jobItem}>
            <div className={styles.jobInfo}>
              <div className={styles.companyLogo} style={{ backgroundColor: alert.logoColor }}>
                {alert.company[0]}
              </div>
              <div className={styles.jobDetails}>
                <h4>{alert.title}</h4>
                <div className={styles.jobMeta}>
                  <span className={`${styles.jobType} ${styles[alert.type.toLowerCase().replace(' ', '')]}`}>{alert.type}</span>
                  <span className={styles.location}>{alert.location}</span>
                  <span className={styles.salary}>{alert.salary}</span>
                  <span className={styles.daysRemaining}>{alert.daysRemaining}</span>
                </div>
              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.bookmarkIcon}>
                <FaBookmark />
              </div>
              <button className={styles.applyButton}>
                Apply Now <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobAlertsList;