import React from 'react';
import Header from '../components/common/Header';
import Sidebar from '../components/common/Sidebar';
import AppliedJobsTable from '../components/appliedJobs/AppliedJobsTable';
import Pagination from '../components/common/Pagination';
import styles from '../styles/appliedJobs.module.css';

const AppliedJobsPage = () => {
  // Sample data to simulate an API response for applied jobs
  const appliedJobsData = [
    {
      company: 'Upwork',
      logoColor: '#4CAF50',
      title: 'Networking Engineer',
      type: 'Remote',
      location: 'Washington, USA',
      salary: '$50k-$80k/month',
      date: 'Feb 2, 2019 19:28',
      status: 'Active',
    },
    {
      company: 'Product Hunt',
      logoColor: '#E91E63',
      title: 'Product Designer',
      type: 'Full Time',
      location: 'Dhaka, USA',
      salary: '$50k-$80k/month',
      date: 'Dec 7, 2019 23:26',
      status: 'Active',
    },
    {
      company: 'Apple',
      logoColor: '#000000',
      title: 'Junior Graphic Designer',
      type: 'Temporary',
      location: 'Brazil',
      salary: '$50k-$80k/month',
      date: 'Feb 2, 2019 19:28',
      status: 'Active',
    },
    {
      company: 'Microsoft',
      logoColor: '#00A1F1',
      title: 'Visual Designer',
      type: 'Contract Base',
      location: 'Wisconsin, USA',
      salary: '$50k-$80k/month',
      date: 'Dec 7, 2019 23:26',
      status: 'Active',
    },
    {
      company: 'Twitter',
      logoColor: '#1DA1F2',
      title: 'Marketing Officer',
      type: 'Full Time',
      location: 'United States',
      salary: '$50k-$80k/month',
      date: 'Dec 4, 2019 21:42',
      status: 'Active',
    },
    {
      company: 'Facebook',
      logoColor: '#1877F2',
      title: 'UI/UX Designer',
      type: 'Full Time',
      location: 'North Dakota, USA',
      salary: '$50k-$80k/month',
      date: 'Dec 30, 2019 07:52',
      status: 'Active',
    },
    {
      company: 'Orange',
      logoColor: '#FF6F00',
      title: 'Software Engineer',
      type: 'Full Time',
      location: 'New York, USA',
      salary: '$50k-$80k/month',
      date: 'Dec 30, 2019 05:18',
      status: 'Active',
    },
    {
      company: 'Google',
      logoColor: '#DB4437',
      title: 'Front End Developer',
      type: 'Full Time',
      location: 'Michigan, USA',
      salary: '$50k-$80k/month',
      date: 'Mar 20, 2019 23:14',
      status: 'Active',
    },
  ];

  return (
    <div className={styles.appliedJobsLayout}>
      <Header />
      <div className={styles.mainContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <AppliedJobsTable applications={appliedJobsData} />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsPage;