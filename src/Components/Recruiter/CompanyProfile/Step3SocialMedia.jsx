import React from "react";

export default function Step3SocialMedia({
  handleNext,
  handlePrev,
  formData,
  setFormData,
}) {
  const handleSocialChange = (index, e) => {
    const { name, value } = e.target;
    const links = [...formData.socialLinks];
    links[index][name] = value;
    setFormData((prev) => ({ ...prev, socialLinks: links }));
  };

  const addSocialLink = () => {
    setFormData((prev) => ({
      ...prev,
      socialLinks: [...prev.socialLinks, { platform: "", url: "" }],
    }));
  };

  const removeSocialLink = (index) => {
    const links = [...formData.socialLinks];
    links.splice(index, 1);
    setFormData((prev) => ({ ...prev, socialLinks: links }));
  };

  return (
    <div>
      <h4 className="mb-4">Social Media Profile</h4>
      {formData.socialLinks.map((link, index) => (
        <div key={index} className="row align-items-center mb-3">
          <div className="col-md-4">
            <select
              className="form-select"
              name="platform"
              value={link.platform}
              onChange={(e) => handleSocialChange(index, e)}
            >
              <option value="">Select Platform...</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">Youtube</option>
              <option value="linkedin">LinkedIn</option>
            </select>
          </div>
          <div className="col-md-7">
            <input
              type="url"
              className="form-control"
              placeholder="Profile Link..."
              name="url"
              value={link.url}
              onChange={(e) => handleSocialChange(index, e)}
            />
          </div>
          <div className="col-md-1">
            <button
              className="btn btn-outline-danger"
              onClick={() => removeSocialLink(index)}
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      ))}
      <button className="btn btn-outline-secondary" onClick={addSocialLink}>
        + Add New Social Link
      </button>
      <div className="d-flex justify-content-between mt-4">
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
