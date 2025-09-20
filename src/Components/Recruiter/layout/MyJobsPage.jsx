import React, { useState, useEffect } from "react";

function MyJobsContent() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Try to get jobs from localStorage first
    const savedJobs = JSON.parse(localStorage.getItem("myJobs"));

    if (savedJobs) {
      setJobs(savedJobs);
      setLoading(false);
    } else {
      // If nothing in localStorage, fetch from our initial empty file
      fetch("/data/my-jobs.json")
        .then((res) => res.json())
        .then((data) => {
          setJobs(data);
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  return (
    <div>
      <h3 className="fw-bold">My Jobs</h3>
      <p className="text-muted">Manage all your posted jobs here.</p>

      <div className="card shadow-sm border-0 mt-4">
        <div className="card-body">
          {jobs.length === 0 ? (
            <p>You haven't posted any jobs yet.</p>
          ) : (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Job Title</th>
                    <th>Posted Date</th>
                    <th>Applications</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr key={job.id}>
                      <td>
                        <div className="fw-bold">{job.title}</div>
                        <small className="text-muted">{job.location}</small>
                      </td>
                      <td>{job.postedDate}</td>
                      <td>{job.applications}</td>
                      <td>
                        <span className="badge text-bg-success">
                          {job.status}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MyJobsPage() {
  return <MyJobsContent />;
}
