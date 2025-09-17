import React from "react";
import "./../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">JobPilot</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Jobs</li>
        <li>
          <Link to="/dashboard">Candidates</Link>
        </li>
        <li>Companies</li>
        <li>About</li>
      </ul>
      <div className="nav-actions">
        <Link to="/login">
        <button className="btn btn-outline btn-dark">SignIn</button></Link>
       
        <Link to="/login"> <button className="btn btn-outline ">Post Job</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
