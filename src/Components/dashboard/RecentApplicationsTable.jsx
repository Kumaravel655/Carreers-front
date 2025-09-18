    import React from 'react';
import styles from '../../styles/dashboard.module.css';
import { FaCheckCircle, FaChevronRight } from 'react-icons/fa';

const RecentApplicationsTable = ({ applications }) => {
  return (
    <div className={styles.recentApplications}>
      <div className={styles.tableHeader}>
        <h3>Recently Applied</h3>
        <a href="#">
          View all <FaChevronRight />
        </a>
      </div>
      <div className={styles.table}>
        <div className={styles.tableRow} style={{ fontWeight: 'bold' }}>
          <div className={styles.tableCell}>Job</div>
          <div className={styles.tableCell}>Date Applied</div>
          <div className={styles.tableCell}>Status</div>
          <div className={styles.tableCell}>Action</div>
        </div>
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
                    <span className={styles.jobType}>{app.type}</span>
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
  );
};

export default RecentApplicationsTable;