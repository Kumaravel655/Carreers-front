import React, { useState, useEffect } from "react";

const StatusBadge = ({ status }) => {
  const statusClasses = {
    New: "text-bg-secondary",
    Shortlisted: "text-bg-primary",
    Interview: "text-bg-info",
    Rejected: "text-bg-danger",
  };
  return (
    <span className={`badge ${statusClasses[status] || "text-bg-light"}`}>
      {status}
    </span>
  );
};

function ViewApplicantsContent() {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  // In a real app, you'd get the job ID from the URL. We'll hardcode it.
  const currentJobId = 1;
  const currentJobTitle = "UI/UX Designer";

  // --- NEW LOGIC for loading data ---
  useEffect(() => {
    // Check if applicant data already exists in localStorage
    const savedApplicants = JSON.parse(
      localStorage.getItem("recruiter-applicants")
    );

    if (savedApplicants) {
      // If it exists, use it
      setApplicants(savedApplicants);
      setLoading(false);
    } else {
      // If not, fetch the initial data from the JSON file
      fetch("/data/applicants.json")
        .then((res) => res.json())
        .then((initialApplicants) => {
          // Save the initial data to localStorage for future use
          localStorage.setItem(
            "recruiter-applicants",
            JSON.stringify(initialApplicants)
          );
          setApplicants(initialApplicants);
          setLoading(false);
        });
    }
  }, []);

  // --- NEW LOGIC for saving status changes ---
  const handleStatusChange = (applicantId, newStatus) => {
    // 1. Get the full, current list of applicants from localStorage
    const allApplicants =
      JSON.parse(localStorage.getItem("recruiter-applicants")) || [];

    // 2. Find and update the specific applicant's status
    const updatedApplicants = allApplicants.map((app) =>
      app.id === applicantId ? { ...app, status: newStatus } : app
    );

    // 3. Save the entire updated list back to localStorage
    localStorage.setItem(
      "recruiter-applicants",
      JSON.stringify(updatedApplicants)
    );

    // 4. Update the component's state to re-render the UI
    setApplicants(updatedApplicants);
  };

  if (loading) return <p>Loading applicants...</p>;

  // Filter applicants for the current job before rendering
  const jobApplicants = applicants.filter((app) => app.jobId === currentJobId);

  return (
    <div>
      <h3 className="fw-bold">Applicants for {currentJobTitle}</h3>
      <p className="text-muted">
        Review and manage candidates who applied for this role.
      </p>
      <div className="card shadow-sm border-0 mt-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              {/* ... table head is the same ... */}
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>Applied Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobApplicants.map((app) => (
                  <tr key={app.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={app.avatarUrl}
                          alt={app.name}
                          className="rounded-circle me-3"
                          width="40"
                          height="40"
                        />
                        <span className="fw-bold">{app.name}</span>
                      </div>
                    </td>
                    <td>
                      {new Date(app.appliedDate).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </td>
                    <td>
                      <StatusBadge status={app.status} />
                    </td>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-sm btn-light dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                        >
                          Change Status
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleStatusChange(app.id, "Shortlisted");
                              }}
                            >
                              Shortlist
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleStatusChange(app.id, "Interview");
                              }}
                            >
                              Schedule Interview
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handleStatusChange(app.id, "Rejected");
                              }}
                            >
                              Reject
                            </a>
                          </li>
                        </ul>
                        <button className="btn btn-sm btn-outline-secondary ms-2">
                          View Profile
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ViewApplicantsPage() {
  return (
      <ViewApplicantsContent />
    
  );
}
