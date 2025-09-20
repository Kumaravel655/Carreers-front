import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css"; // Make sure you have the CSS file from our previous steps

export default function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0">
      <div className="sidebar-heading px-3 mt-2 mb-3">Employers Dashboard</div>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/recruit/dashboard" className="nav-link">
            <i className="bi bi-speedometer2"></i> Overview
          </NavLink>
        </li>
        {/* UPDATED LINK */}
        <li className="nav-item">
          <NavLink to="/recruit/company-profile" className="nav-link">
            <i className="bi bi-building"></i> Company Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/recruit/post-job" className="nav-link">
            <i className="bi bi-file-earmark-plus"></i> Post a Job
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/recruit/my-jobs" className="nav-link">
            <i className="bi bi-briefcase"></i> My Jobs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/recruit/applicants" className="nav-link">
            <i className="bi bi-people"></i> Applicants
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/recruit/candidate-search" className="nav-link">
            <i className="bi bi-search"></i> Find Candidate
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/recruit/billing" className="nav-link">
            <i className="bi bi-credit-card"></i> Plans & Billing
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/recruit/settings" className="nav-link">
            <i className="bi bi-gear"></i> Settings
          </NavLink>
        </li>
      </ul>
      <hr />
      <div className="nav">
        <a href="/" className="nav-link">
          <i className="bi bi-box-arrow-left"></i> Log-out
        </a>
      </div>
    </div>
  );
}
