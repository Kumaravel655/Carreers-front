import React from "react";

export default function Step2FoundingInfo({
  handleNext,
  handlePrev,
  handleChange,
  formData,
}) {
  return (
    <div>
      <h4 className="mb-4">Founding Info</h4>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="organizationType" className="form-label">
            Organization Type
          </label>
          <select
            className="form-select"
            id="organizationType"
            name="organizationType"
            value={formData.organizationType}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="Private">Private</option>
            <option value="Public">Public</option>
            <option value="Government">Government</option>
            <option value="NGO">NGO</option>
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="industry" className="form-label">
            Industry Type
          </label>
          <select
            className="form-select"
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="teamSize" className="form-label">
            Team Size
          </label>
          <select
            className="form-select"
            id="teamSize"
            name="teamSize"
            value={formData.teamSize}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201+">201+</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="establishmentYear" className="form-label">
            Year of Establishment
          </label>
          <input
            type="text"
            className="form-control"
            id="establishmentYear"
            name="establishmentYear"
            value={formData.establishmentYear}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="website" className="form-label">
            Company Website
          </label>
          <input
            type="url"
            className="form-control"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="vision" className="form-label">
          Company Vision
        </label>
        <textarea
          className="form-control"
          id="vision"
          name="vision"
          rows="5"
          value={formData.vision}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={handlePrev}>
          ← Previous
        </button>
        <button className="btn btn-primary" onClick={handleNext}>
          Save & Next →
        </button>
      </div>
    </div>
  );
}
