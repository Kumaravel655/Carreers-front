// src/pages/NotificationsPage.jsx
import React, { useState, useEffect } from 'react';
import './NotificationsPage.css'
const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Replace this with your actual API endpoint for notifications
        const response = await fetch('https://your-api-server.com/api/notifications');
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []); // The empty array ensures this runs only once on component mount

  if (loading) {
    return <div>Loading notifications...</div>;
  }

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map(notif => (
            <li key={notif.id}>{notif.message}</li>
          ))}
        </ul>
      ) : (
        <p>No new notifications.</p>
      )}
    </div>
  );
};

export default NotificationsPage;