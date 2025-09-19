import React from 'react';
import './Header.css'; 
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <a href="/" className="logo">Jobplot</a>
          <nav className="nav">
            <a href="#" className="nav-link">About us</a>
          </nav>
        </div>
        <div className="header-right">
          <div className="search-box">
            <input type="text" placeholder="Job title, keyword, company" />
            <i className="search-icon">🔍</i>
          </div>
          <Link to="/login"><button className="btn btn-signin">Sign In</button></Link>
          <Link to="/signup"><button className="btn btn-postjob">Sign Up</button></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;