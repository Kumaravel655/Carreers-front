import React from 'react';
import styles from './appliedJobs.module.css';
import { FaCheckCircle } from 'react-icons/fa';

const AppliedJobsTable = ({ applications }) => {
  return (
    <div className={styles.appliedJobsTable}>
      <h2 className={styles.tableTitle}>Applied Jobs (589)</h2>
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <div className={styles.tableCell}>JOBS</div>
          <div className={styles.tableCell}>DATE APPLIED</div>
          <div className={styles.tableCell}>STATUS</div>
          <div className={styles.tableCell}>ACTION</div>
        </div>
        <div className={styles.tableBody}>
          {applications.map((app, index) => (
            <div key={index} className={styles.tableRow}>
              <div className={styles.tableCell}>
                <div className={styles.jobInfo}>
                  <div className={styles.companyLogo} style={{ backgroundColor: app.logoColor }}>
                    {app.company[0]}
                  </div>
                  <div>
                    <h4>{app.title}</h4>
                    <div className={styles.jobMeta}>
                      <span className={`${styles.jobType} ${styles[app.type.toLowerCase().replace(' ', '')]}`}>{app.type}</span>
                      <span className={styles.location}>{app.location}</span>
                      <span className={styles.salary}>{app.salary}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.tableCell}>{app.date}</div>
              <div className={styles.tableCell}>
                <FaCheckCircle className={styles.statusIcon} />
                <span className={styles.statusText}>{app.status}</span>
              </div>
              <div className={styles.tableCell}>
                <button className={styles.viewDetailsButton}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsTable;