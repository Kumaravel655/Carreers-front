import React, { useState } from "react";

function PostJobContent() {
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    type: "Full Time",
    location: "",
    salaryMin: "",
    salaryMax: "",
    skills: "",
    experience: "Mid-level",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- NEW LOGIC FOR SAVING DATA ---

    // 1. Get existing jobs from localStorage, or start with an empty array
    const existingJobs = JSON.parse(localStorage.getItem("myJobs")) || [];

    // 2. Create the new job object with a unique ID and posted date
    const newJob = {
      ...jobData,
      id: Date.now(), // Simple unique ID
      postedDate: new Date().toLocaleDateString(),
      status: "Active",
      applications: 0, // New jobs start with 0 applications
    };

    // 3. Add the new job to the array
    const updatedJobs = [...existingJobs, newJob];

    // 4. Save the updated array back to localStorage
    localStorage.setItem("myJobs", JSON.stringify(updatedJobs));

    // --- END OF NEW LOGIC ---

    alert("Job has been posted successfully!");
    // In a real app, you might redirect the user:
    // window.location.href = '/my-jobs';
  };

  // The rest of the form JSX is the same as before...
  return (
    <div>
      <h3 className="fw-bold">Post a New Job</h3>
      <p className="text-muted">
        Fill out the details below to publish a new job opening.
      </p>

      <div className="card shadow-sm border-0 mt-4">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* ... Your form fields from the previous step go here ... */}
            {/* Job Title */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Job Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={jobData.title}
                onChange={handleChange}
                required
              />
            </div>

            {/* Job Description */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Job Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="6"
                value={jobData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Other form fields... */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="type" className="form-label">
                  Job Type
                </label>
                <select
                  className="form-select"
                  id="type"
                  name="type"
                  value={jobData.type}
                  onChange={handleChange}
                >
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  placeholder="e.g., Bengaluru, India"
                  value={jobData.location}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Annual Salary Range (LPA)</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    name="salaryMin"
                    placeholder="Minimum"
                    value={jobData.salaryMin}
                    onChange={handleChange}
                  />
                  <span className="input-group-text">-</span>
                  <input
                    type="number"
                    className="form-control"
                    name="salaryMax"
                    placeholder="Maximum"
                    value={jobData.salaryMax}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="experience" className="form-label">
                  Experience Level
                </label>
                <select
                  className="form-select"
                  id="experience"
                  name="experience"
                  value={jobData.experience}
                  onChange={handleChange}
                >
                  <option>Entry-level</option>
                  <option>Mid-level</option>
                  <option>Senior</option>
                  <option>Lead</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="skills" className="form-label">
                Required Skills
              </label>
              <input
                type="text"
                className="form-control"
                id="skills"
                name="skills"
                placeholder="e.g., React, Node.js, UI/UX Design"
                value={jobData.skills}
                onChange={handleChange}
              />
              <div className="form-text">Enter skills separated by commas.</div>
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function PostJobPage() {
  return <PostJobContent />;
}
