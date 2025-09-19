import React, { useState } from "react";
import "./JobForm.css";

const JobForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true); // ✅ Show success modal
  };

  return (
    <div className="job-form-page">
      <div className="form-wrapper">
        {/* Page Title OUTSIDE the box */}
        <h2 className="page-title">Post a Job</h2>

        {/* White Form Box */}
        <div className="job-form">
          <form onSubmit={handleSubmit}>
            {/* Job Title */}
            <div className="form-group">
              <label>Job Title</label>
              <input
                type="text"
                placeholder="Add job title, role, vacancies etc"
              />
            </div>

            {/* Tags + Job Role */}
            <div className="form-row">
              <div className="form-group">
                <label>Tags</label>
                <input type="text" placeholder="Job keyword, tags etc" />
              </div>
              <div className="form-group">
                <label>Job Role</label>
                <select>
                  <option>Select...</option>
                </select>
              </div>
            </div>

            {/* Salary */}
            <div className="form-row">
              <div className="form-group">
                <label>Min Salary</label>
                <input type="number" placeholder="Minimum salary..." />
              </div>
              <div className="form-group">
                <label>Max Salary</label>
                <input type="number" placeholder="Maximum salary..." />
              </div>
              <div className="form-group">
                <label>Salary Type</label>
                <select>
                  <option>Select...</option>
                </select>
              </div>
            </div>

            {/* Advance Info */}
            <div className="form-row">
              <div className="form-group">
                <label>Education</label>
                <select>
                  <option>Select...</option>
                </select>
              </div>
              <div className="form-group">
                <label>Experience</label>
                <select>
                  <option>Select...</option>
                </select>
              </div>
              <div className="form-group">
                <label>Job Type</label>
                <select>
                  <option>Select...</option>
                </select>
              </div>
            </div>

            {/* Vacancies + Expiration + Level */}
            <div className="form-row">
              <div className="form-group">
                <label>Vacancies</label>
                <select>
                  <option>Select...</option>
                </select>
              </div>
              <div className="form-group">
                <label>Expiration Date</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Job Level</label>
                <select>
                  <option>Select...</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="form-group">
              <label>Location</label>
              <div className="form-row">
                <select>
                  <option>Country</option>
                </select>
                <select>
                  <option>City</option>
                </select>
              </div>
              <label>
                <input type="checkbox" defaultChecked /> Fully Remote Position -
                Worldwide
              </label>
            </div>

            {/* Job Benefits */}
            <div className="form-group">
              <label>Job Benefits</label>
              <div className="tags">
                <span>401k Salary</span>
                <span>Distributed Team</span>
                <span>Medical Insurance</span>
                <span>Unlimited vacation</span>
              </div>
            </div>

            {/* Job Description */}
            <div className="form-group">
              <label>Job Description</label>
              <textarea
                placeholder="Add your job description..."
                rows="5"
              ></textarea>
            </div>

            {/* Apply Job Options */}
            <div className="form-group">
              <label>Apply Job On:</label>
              <div className="apply-options">
                <label>
                  <input type="radio" name="apply" defaultChecked /> On Jobpilot
                </label>
                <label>
                  <input type="radio" name="apply" /> External Platform
                </label>
                <label>
                  <input type="radio" name="apply" /> On Your Email
                </label>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="submit-btn">
              Post Job
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Success Modal */}
      {showSuccess && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="close-btn"
              onClick={() => setShowSuccess(false)}
            >
              ✖
            </button>
            <h3>🎉 Congratulations, Your Job is successfully posted!</h3>
            <p>You can manage your job in the My Jobs section on your dashboard.</p>
            <button className="view-btn">View Jobs →</button>

            <h4>Promote Job: UI/UX Designer</h4>
            <div className="promotion-options">
              <label className="promo-card">
                <input type="radio" name="promo" defaultChecked /> Featured Your Job
              </label>
              <label className="promo-card">
                <input type="radio" name="promo" /> Highlight Your Job
              </label>
            </div>
            <button className="promote-btn">Promote Job →</button>
            <button className="skip-btn" onClick={() => setShowSuccess(false)}>
              Skip Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobForm;
