import React from "react";

export default function Step1CompanyInfo({
  handleNext,
  handleChange,
  formData,
}) {
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    handleChange({ target: { name, value: files[0] } });
  };

  return (
    <div>
      <h4 className="mb-4">Company Info</h4>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="logo" className="form-label">
            Upload Logo
          </label>
          <input
            type="file"
            className="form-control"
            id="logo"
            name="logo"
            onChange={handleFileChange}
          />
          <div className="form-text">Supported formats: JPG, PNG.</div>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="banner" className="form-label">
            Banner Image
          </label>
          <input
            type="file"
            className="form-control"
            id="banner"
            name="banner"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="companyName" className="form-label">
          Company Name
        </label>
        <input
          type="text"
          className="form-control"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="aboutUs" className="form-label">
          About Us
        </label>
        <textarea
          className="form-control"
          id="aboutUs"
          name="aboutUs"
          rows="5"
          value={formData.aboutUs}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={handleNext}>
          Save & Next →
        </button>
      </div>
    </div>
  );
}
