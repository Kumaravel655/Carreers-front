import React from "react";
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">JobPilot</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Jobs</li>
        <li>Companies</li>
        <li>About</li>
      </ul>
      <div className="nav-actions">
        <button className="btn-outline">Sign In</button>
        <button className="btn-primary">Post a Job</button>
      </div>
    </nav>
  );
};

export default Navbar;
