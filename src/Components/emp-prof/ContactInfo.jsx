import React from "react";

export default function ContactInfo({ formData, setFormData, prevStep, onFinish }) {
  return (
    <div>
      <h3>Contact Info</h3>
      <div className="form-section">
        <label>Map Location</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
      </div>
      <div className="form-section">
        <label>Phone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div className="form-section">
        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <button onClick={prevStep} className="btn secondary">Previous</button>
      <button onClick={onFinish} className="btn">Finish Editing</button>
    </div>
  );
}
