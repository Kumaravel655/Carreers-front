import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find a job that suits your interest & skills.</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. It’s your time to find your dream job.
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Search jobs, keywords..." />
          <button className="btn-primary">Find Job</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/job.jpg" alt="Job search" />
      </div>
    </section>
  );
};

export default Hero;
