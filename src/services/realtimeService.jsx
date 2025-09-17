// This is a conceptual service. In a real project, you would
// use a library like Socket.io to connect to a WebSocket server.

const mockNotifications = [
  { id: 1, message: 'New job alert: "UI/UX Designer" at Google.', timestamp: new Date() },
  { id: 2, message: 'Your application for "Front End Dev" has been reviewed.', timestamp: new Date() },
];

let subscribers = [];
let notificationCount = mockNotifications.length;

// Simulates a new notification arriving from the server
const simulateNewNotification = () => {
  const newNotification = {
    id: Date.now(),
    message: `You have a new message from a recruiter!`,
    timestamp: new Date(),
  };
  mockNotifications.unshift(newNotification);
  notificationCount = mockNotifications.length;
  subscribers.forEach(callback => callback(notificationCount));
};

// Start the simulation
setInterval(simulateNewNotification, 10000); // New notification every 10 seconds

export const realtimeService = {
  getNotifications: () => mockNotifications,
  subscribe: (callback) => {
    subscribers.push(callback);
    return () => {
      subscribers = subscribers.filter(sub => sub !== callback);
    };
  },
  getNotificationCount: () => notificationCount,
};