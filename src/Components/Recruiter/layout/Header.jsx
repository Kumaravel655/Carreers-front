import React, { useState, useEffect } from "react";
// We no longer need NavLink, so it can be removed if not used elsewhere
import "./Header.css";

export default function Header() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("/data/notifications.json")
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAsRead = () => {
    const updated = notifications.map((n) => ({ ...n, read: true }));
    setNotifications(updated);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container-fluid">
        {/* Logo on the left */}
        <a className="navbar-brand fw-bold" href="/recruit/dashboard">
          <i className="bi bi-briefcase-fill me-2"></i>Jobpilot
        </a>

        {/* This toggler is for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav-actions"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Wrapper for right-side actions */}
        <div className="collapse navbar-collapse" id="main-nav-actions">
          {/* This pushes the content to the right */}
          <div className="ms-auto d-flex align-items-center">
            {/* Notification Dropdown */}
            <div className="dropdown me-3">
              <a
                href="#"
                className="text-secondary"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleMarkAsRead}
              >
                <i className="bi bi-bell-fill fs-5 position-relative">
                  {unreadCount > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      style={{ fontSize: "0.6em" }}
                    >
                      {unreadCount}
                    </span>
                  )}
                </i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                style={{ width: "300px" }}
              >
                <li className="p-2">
                  <h6 className="dropdown-header">Notifications</h6>
                </li>
                {notifications.map((n) => (
                  <li key={n.id}>
                    <a className="dropdown-item" href="#">
                      <div className={`small ${!n.read ? "fw-bold" : ""}`}>
                        {n.message}
                      </div>
                      <div className="small text-muted">{n.time}</div>
                    </a>
                  </li>
                ))}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-center small" href="#">
                    View all notifications
                  </a>
                </li>
              </ul>
            </div>

            {/* Post a Job Button */}
            <a href="/recruit/post-job" className="btn btn-primary me-3">
              Post A Job
            </a>

            {/* User Profile Dropdown */}
            <div className="dropdown">
              <a
                href="#"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://via.placeholder.com/32"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end text-small">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
