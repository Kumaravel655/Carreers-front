import React from "react";

// A small component for the status badge
const StatusBadge = ({ status }) => {
  const isExpired = status === "Expired";
  const badgeClass = isExpired ? "text-bg-danger" : "text-bg-success";
  const iconClass = isExpired ? "bi-x-circle" : "bi-check-circle";

  return (
    <span className={`badge rounded-pill ${badgeClass}`}>
      <i className={`bi ${iconClass} me-1`}></i> {status}
    </span>
  );
};

export default function JobsTable({ jobs }) {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-header bg-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Recently Posted Jobs</h5>
        <a href="#" className="btn btn-sm btn-outline-secondary">
          View all →
        </a>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th scope="col">Job</th>
                <th scope="col">Status</th>
                <th scope="col">Applications</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>
                    <div className="fw-bold">{job.title}</div>
                    <small className="text-muted">
                      {job.type} • {job.timeRemaining}
                    </small>
                  </td>
                  <td>
                    <StatusBadge status={job.status} />
                  </td>
                  <td>
                    <i className="bi bi-people text-muted me-2"></i>
                    {job.applications} Applications
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <button className="btn btn-primary btn-sm me-2">
                        View Applications
                      </button>
                      <div className="dropdown">
                        <button
                          className="btn btn-light btn-sm"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <a className="dropdown-item" href="#">
                              Promote Job
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              View Detail
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Mark as expired
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
