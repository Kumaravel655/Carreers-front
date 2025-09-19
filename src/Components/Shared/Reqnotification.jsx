import { useState } from "react";
import "./Reqnotification.css";

const initialNotifications = [
  {
    id: 1,
    message: "Cody Fisher applied for Frontend Developer role",
    time: "2 mins ago",
    read: false,
  },
  {
    id: 2,
    message: "Darrell Steward shortlisted for Marketing Officer interview",
    time: "10 mins ago",
    read: false,
  },
  {
    id: 3,
    message: "Interview scheduled with Jane Cooper on Sep 20, 10:00 AM",
    time: "1 hour ago",
    read: true,
  },
];

function RecruiterNotifications() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);

  const toggleDropdown = () => setOpen(!open);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  return (
    <div className="notification-wrapper">
      {/* Bell Icon */}
      <button className="bell-btn" onClick={toggleDropdown}>
        🔔
        {notifications.some((n) => !n.read) && (
          <span className="badge">
            {notifications.filter((n) => !n.read).length}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="dropdown">
          <h4>Notifications</h4>
          {notifications.length === 0 ? (
            <p className="empty">No notifications</p>
          ) : (
            notifications.map((n) => (
              <div
                key={n.id}
                className={`notification-item ${n.read ? "read" : "unread"}`}
                onClick={() => markAsRead(n.id)}
              >
                <p>{n.message}</p>
                <span>{n.time}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default RecruiterNotifications;



