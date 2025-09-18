import React from "react";

export default function CompanyInfo({ formData, setFormData, nextStep }) {
  return (
    <div>
      <h3>Company Info</h3>
      <div className="form-section">
        <label>Upload Logo</label>
        <input
          type="file"
          onChange={(e) => setFormData({ ...formData, logo: e.target.files[0] })}
        />
      </div>
      <div className="form-section">
        <label>Banner Image</label>
        <input
          type="file"
          onChange={(e) => setFormData({ ...formData, banner: e.target.files[0] })}
        />
      </div>
      <div className="form-section">
        <label>Company Name</label>
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
        />
      </div>
      <div className="form-section">
        <label>About Us</label>
        <textarea
          value={formData.about}
          onChange={(e) => setFormData({ ...formData, about: e.target.value })}
        />
      </div>
      <button onClick={nextStep} className="btn">Save & Next</button>
    </div>
  );
}
