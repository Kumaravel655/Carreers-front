import { useState, useEffect } from 'react';
import { realtimeService } from '../services/realtimeService';

export const useRealtimeNotifications = () => {
  const [notificationCount, setNotificationCount] = useState(realtimeService.getNotificationCount());
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch initial data
    setNotifications(realtimeService.getNotifications());

    // Subscribe to real-time updates
    const unsubscribe = realtimeService.subscribe((count) => {
      setNotificationCount(count);
      setNotifications(realtimeService.getNotifications()); // Re-fetch updated list
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return { notificationCount, notifications };
};