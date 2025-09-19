import React from "react";

const StepFoundingInfo = ({ nextStep, prevStep }) => {
  return (
    <div className="form-step">
      <h3>Founding Info</h3>
      <select className="input"><option>Select Organization Type</option></select>
      <select className="input"><option>Select Industry Type</option></select>
      <select className="input"><option>Select Team Size</option></select>
      <input type="date" className="input" />
      <input type="url" placeholder="Company Website" className="input" />
      <textarea placeholder="Company Vision" className="textarea"></textarea>
      <div className="actions">
        <button className="btn prev" onClick={prevStep}>Previous</button>
        <button className="btn next" onClick={nextStep}>Save & Next</button>
      </div>
    </div>
  );
};

export default StepFoundingInfo;
