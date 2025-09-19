import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-card candidate-card">
          <div className="cta-content">
            <h3>Become a Candidate</h3>
            <p>Register Now</p>
            <button className="btn cta-btn">Register Now →</button>
          </div>
          <div className="cta-image">
            <img src="downlaop.jpg" alt="A person working on a laptop" />
          </div>
        </div>

        <div className="cta-card employer-card">
          <div className="cta-content">
            <h3>Become an Employer</h3>
            <p>Register Now</p>
            <button className="btn cta-btn">Register Now →</button>
          </div>
          <div className="cta-image">
            <img src="maninsmile.jpg" alt="A smiling man in a suit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;