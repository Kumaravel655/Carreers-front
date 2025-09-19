import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-col">
            <div className="footer-logo">Jobplot</div>
            <p>Call us: (218) 555-0115</p>
            <p>Email: <a href="mailto:info@jobplot.com">info@jobplot.com</a></p>
            <button className="btn btn-contact">Contact</button>
          </div>
          <div className="footer-col">
            <h4>Quick Link</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Candidate</h4>
            <ul>
              <li><a href="#">Browse Jobs</a></li>
              <li><a href="#">User Dashboard</a></li>
              <li><a href="#">Candidate Dashboard</a></li>
              <li><a href="#">Candidate Profile</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Employers</h4>
            <ul>
              <li><a href="#">Post a Job</a></li>
              <li><a href="#">User Dashboard</a></li>
              <li><a href="#">Employers Dashboard</a></li>
              <li><a href="#">Applications</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 Jobplot, all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;