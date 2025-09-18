import React from "react";

export default function FoundingInfo({ nextStep, prevStep }) {
  return (
    <div>
      <h3>Founding Info</h3>
      <div className="form-grid">
        <select>
          <option>Organization Type</option>
          <option>Private</option>
          <option>Public</option>
        </select>
        <select>
          <option>Industry Type</option>
          <option>IT</option>
          <option>Finance</option>
        </select>
        <select>
          <option>Team Size</option>
          <option>1-10</option>
          <option>11-50</option>
          <option>51-200</option>
        </select>
      </div>
      <div className="form-section">
        <label>Year of Establishment</label>
        <input type="date" />
      </div>
      <div className="form-section">
        <label>Company Website</label>
        <input type="url" placeholder="Website URL" />
      </div>
      <div className="form-section">
        <label>Company Vision</label>
        <textarea placeholder="Tell us about your vision..." />
      </div>
      <button onClick={prevStep} className="btn secondary">Previous</button>
      <button onClick={nextStep} className="btn">Save & Next</button>
    </div>
  );
}
