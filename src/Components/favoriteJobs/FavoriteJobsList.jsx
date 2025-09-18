import React from 'react';
import styles from '../../styles/favoriteJobs.module.css';
import { FaBookmark, FaArrowRight } from 'react-icons/fa';

const FavoriteJobsList = ({ jobs }) => {
  return (
    <div className={styles.favoriteJobsList}>
      <h2 className={styles.listTitle}>Favorite Jobs (17)</h2>
      <div className={styles.jobList}>
        {jobs.map((job) => (
          <div key={job.id} className={styles.jobItem}>
            <div className={styles.jobInfo}>
              <div className={styles.companyLogo} style={{ backgroundColor: job.logoColor }}>
                {job.company[0]}
              </div>
              <div className={styles.jobDetails}>
                <h4>{job.title}</h4>
                <div className={styles.jobMeta}>
                  <span className={`${styles.jobType} ${styles[job.type.toLowerCase().replace(' ', '')]}`}>{job.type}</span>
                  <span className={styles.location}>{job.location}</span>
                  <span className={styles.salary}>{job.salary}</span>
                  <span className={styles.daysRemaining}>{job.daysRemaining}</span>
                </div>
              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.bookmarkIcon}>
                <FaBookmark />
              </div>
              {job.status === 'active' ? (
                <button className={styles.applyButton}>
                  Apply Now <FaArrowRight />
                </button>
              ) : (
                <span className={styles.expiredLabel}>Deadline Expired</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteJobsList;