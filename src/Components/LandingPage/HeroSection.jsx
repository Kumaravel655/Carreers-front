import React from 'react';
import './HeroSection.css'; // Import the CSS file

const HeroSection = () => {
  const stats = [
    { value: '1,75,324', label: 'Jobs' },
    { value: '97,354', label: 'Applicants' },
    { value: '38,47,154', label: 'Candidates' },
  ];

  const companyLogos = [
    'gblack.png',
    'ama.png',
    'wipro.png',
  ];

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>We're highly skilled and professionals team.</h1>
        <p>Praesent non sem facilisis, hendrerit mi vitae, volutpat quam. Aliquam non eros at ipsum consectetur blandit non eget odio. Duis volutpat maximus mi, eget leo maximus.</p>
        
        <div className="stats-list">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="company-logos">
        {companyLogos.map((logo, index) => (
          <img key={index} src={logo} alt="Company Logo" />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;