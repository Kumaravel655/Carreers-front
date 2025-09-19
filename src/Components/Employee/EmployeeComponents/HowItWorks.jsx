import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  const steps = ["Create Account", "Upload Resume", "Find Suitable Job", "Apply Job"];

  return (
    <section className="how-it-works">
      <h2>How JobPilot Works</h2>
      <div className="steps">
        {steps.map((step, i) => (
          <div key={i} className="step">{step}</div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
