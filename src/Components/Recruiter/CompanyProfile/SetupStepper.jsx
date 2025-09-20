import React from 'react';

// We'll create a simple CSS file for custom styles that Bootstrap doesn't cover.
import './SetupStepper.css';

const steps = [
  { number: 1, title: 'Company Info' },
  { number: 2, title: 'Founding Info' },
  { number: 3, title: 'Social Media Profile' },
  { number: 4, title: 'Contact' }
];

export default function SetupStepper({ currentStep }) {
  return (
    <div className="stepper-wrapper d-flex justify-content-between mb-4">
      {steps.map((step, index) => (
        <div key={index} className={`stepper-item ${currentStep > step.number ? 'completed' : ''} ${currentStep === step.number ? 'active' : ''}`}>
          <div className="step-counter">
            {currentStep > step.number ? <i className="bi bi-check-lg"></i> : step.number}
          </div>
          <div className="step-name">{step.title}</div>
        </div>
      ))}
    </div>
  );
}