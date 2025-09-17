import React from "react";

const StepContact = ({ nextStep, prevStep }) => {
  return (
    <div className="form-step">
      <h3>Contact Info</h3>
      <input type="text" placeholder="Map Location" className="input" />
      <input type="tel" placeholder="Phone Number" className="input" />
      <input type="email" placeholder="Email" className="input" />
      <div className="actions">
        <button className="btn prev" onClick={prevStep}>Previous</button>
        <button className="btn next" onClick={nextStep}>Finish Editing</button>
      </div>
    </div>
  );
};

export default StepContact;
