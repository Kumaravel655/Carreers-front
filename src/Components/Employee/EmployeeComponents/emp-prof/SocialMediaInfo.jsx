import React from "react";

export default function SocialMediaInfo({ nextStep, prevStep }) {
  return (
    <div>
      <h3>Social Media Info</h3>
      <div className="form-section">
        <input type="url" placeholder="Facebook Profile URL" />
        <input type="url" placeholder="Twitter Profile URL" />
        <input type="url" placeholder="Instagram Profile URL" />
        <input type="url" placeholder="YouTube Profile URL" />
      </div>
      <button onClick={prevStep} className="btn secondary">Previous</button>
      <button onClick={nextStep} className="btn">Save & Next</button>
    </div>
  );
}
