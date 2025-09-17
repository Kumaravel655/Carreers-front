import React from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import JobAlertsList from '../components/jobAlerts/JobAlertsList';
import Pagination from '../components/common/Pagination';
import styles from '../styles/jobAlerts.module.css';

const JobAlertsPage = () => {
  const jobAlertsData = [
    {
      id: 1,
      company: 'Google',
      logoColor: '#4285F4',
      title: 'Technical Support Specialist',
      type: 'Full Time',
      location: 'Istanbul, USA',
      salary: '$10k-$20k',
      daysRemaining: '4 Days Remaining',
      status: 'active',
    },
    {
      id: 2,
      company: 'YouTube',
      logoColor: '#FF0000',
      title: 'UI/UX Designer',
      type: 'Full Time',
      location: 'Minnesota, USA',
      salary: '$10k-$15k',
      daysRemaining: '4 Days Remaining',
      status: 'active',
    },
    {
      id: 3,
      company: 'Google',
      logoColor: '#DB4437',
      title: 'Front End Developer',
      type: 'Internship',
      location: 'Mymensingh, Bangladesh',
      salary: '$10k-$15k',
      daysRemaining: '4 Days Remaining',
      status: 'active',
    },
  ];

  return (
    <div className={styles.jobAlertsLayout}>
      <Header />
      <div className={styles.mainContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <JobAlertsList alerts={jobAlertsData} />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default JobAlertsPage;