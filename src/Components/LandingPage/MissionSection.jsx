import React from 'react';
import './MissionSection.css';

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-content">
          <h2>Our mission is help people to find the perfect job.</h2>
          <p>Praesent non sem facilisis, hendrerit mi vitae, volutpat quam. Aliquam non eros at ipsum consectetur blandit non eget odio. Duis volutpat maximus mi, eget leo maximus.</p>
        </div>
        <div className="mission-image">
          <img src="jobseacrh.jpg" alt="A person finding jobs illustration" />
        </div>
      </div>
    </section>
  );
};

export default MissionSection;