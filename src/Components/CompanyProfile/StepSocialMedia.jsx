import React from "react";

const StepSocialMedia = ({ nextStep, prevStep }) => {
  return (
    <div className="form-step">
      <h3>Social Media Profiles</h3>
      <input type="url" placeholder="Facebook URL" className="input" />
      <input type="url" placeholder="Twitter URL" className="input" />
      <input type="url" placeholder="Instagram URL" className="input" />
      <input type="url" placeholder="YouTube URL" className="input" />
      <div className="actions">
        <button className="btn prev" onClick={prevStep}>Previous</button>
        <button className="btn next" onClick={nextStep}>Save & Next</button>
      </div>
    </div>
  );
};

export default StepSocialMedia;
