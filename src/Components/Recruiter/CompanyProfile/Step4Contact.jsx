import React from "react";

export default function Step4Contact({
  handleSubmit,
  handlePrev,
  handleChange,
  formData,
}) {
  return (
    <div>
      <h4 className="mb-4">Contact</h4>
      <div className="mb-3">
        <label htmlFor="location" className="form-label">
          Map Location
        </label>
        <input
          type="text"
          className="form-control"
          id="location"
          name="location"
          placeholder="e.g., Bengaluru, Karnataka, India"
          value={formData.location}
          onChange={handleChange}
        />
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-secondary" onClick={handlePrev}>
          ← Previous
        </button>
        <button className="btn btn-success" onClick={handleSubmit}>
          Finish Editing
        </button>
      </div>
    </div>
  );
}
