import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-image">
          <img src="gpp.jpg" alt="A group of people talking together" />
        </div>
        <div className="testimonial-content">
          <h2>What our people says</h2>
          <div className="rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <p className="testimonial-text">
            "Praesent semper diam ut diam elementum, id scelerisque nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi varius elementum mi eget mollis perfermentum montes, nascetur ridiculus mus. Aenean tempor dictum sapien quis laoreet. Donec gravida."
          </p>
          <div className="quote-icon">❝</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;