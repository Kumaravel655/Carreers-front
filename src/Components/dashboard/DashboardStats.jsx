import React from 'react';
import styles from '../../styles/dashboard.module.css';
import { FaBriefcase, FaBookmark, FaBell } from 'react-icons/fa';

const StatCard = ({ title, value, icon }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'applied': return <FaBriefcase />;
      case 'favorite': return <FaBookmark />;
      case 'alert': return <FaBell />;
      default: return null;
    }
  };

  const cardStyle = {
    '--card-background': icon === 'applied' ? '#e6f7ff' : icon === 'favorite' ? '#fffbe6' : '#e6ffe6',
    '--icon-color': icon === 'applied' ? '#007bff' : icon === 'favorite' ? '#faad14' : '#52c41a',
  };

  return (
    <div className={styles.statCard} style={cardStyle}>
      <div className={styles.content}>
        <span className={styles.value}>{value}</span>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.icon}>{getIcon(icon)}</div>
    </div>
  );
};

const DashboardStats = ({ data }) => {
  return (
    <div className={styles.statsContainer}>
      {data.map((item, index) => (
        <StatCard key={index} title={item.title} value={item.value} icon={item.icon} />
      ))}
    </div>
  );
};

export default DashboardStats;