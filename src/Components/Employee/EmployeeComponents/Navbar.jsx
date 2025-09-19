import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa"; // Import the bell icon

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between  align-items-center px-5 navbar">
      <div className="llo">JobPilot</div>
      <ul className="nav-links1">
        <li>Home</li>
        <li><Link to="/job-seeker/findjob">Jobs</Link></li>
        <li>
          <Link to="/job-seeker/dashboard">Dashboard</Link>
        </li>
         <li>
          <Link to="/job-seeker/support">Support</Link>
        </li>
        <li>
          <Link to="/job-seeker/faq">FAQ</Link>
        </li>
        <li>
                  <Link to="/job-seeker/notifications" className="notification-icon">
                    <FaRegBell size={20} />
                    {/* You can add a notification count here later */}
                    <span className="notification-badge">3</span>
                  </Link>
                </li>

      </ul>
    </nav>
  );
};

export default Navbar;
