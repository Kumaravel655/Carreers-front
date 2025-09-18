import React from "react";
import { useParams, Link } from "react-router-dom";
import JobData from "./jobs.json";
import JobList from "./JobList";
import "./JobDesc.css";

const DetailList = ({ title, details }) => {
  const items = details.split(". ").filter((item) => item.trim() !== "");
  return (
    <>
      <h4 className="mt-4">{title}</h4>
      <ul className="list-unstyled ps-3">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            <i className="bi bi-dot me-2"></i>
            {item}.
          </li>
        ))}
      </ul>
    </>
  );
};

const JobDesc = () => {
  const { jobId } = useParams();
  const job = JobData.find((j) => j.id === parseInt(jobId, 10));

  if (!job) {
    return (
      <div className="container my-5 text-center">
        <h2>404 - Job Not Found</h2>
      </div>
    );
  }

  const relatedJobs = JobData.filter((j) => j.id !== job.id);

  return (
    <div className=" j">
      <nav>
        Job Details
        <div>
          <Link to="/">Home</Link>/<Link to="/findjob">Jobs</Link> /{" "}
          <i>Job Details</i>
        </div>
      </nav>

      <div className="card shadow-sm mt-4 container my-5">
        <div className="card-header p-4 bg-light">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center job-title-section">
              <img
                src={`/${job.logo}`}
                alt={`${job.company} logo`}
                className="rounded-circle border"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="ms-3">
                <h2 className="card-title mb-0">{job.title}</h2>
                <p className="card-text text-muted">
                  at {job.company}
                  <span className="badge bg-primary ms-2">{job.type}</span>
                </p>
              </div>
            </div>
            <div>
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
        </div>

        <div className="card-body p-4">
          <DetailList title="Responsibilities" details={job.responsibilities} />
          <DetailList title="Qualifications" details={job.qualifications} />
          <DetailList title="Benefits" details={job.benefits} />
          <div className="text-center mt-4">
            <button className="btn btn-outline-primary">Apply Now</button>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-center mb-4">Related Jobs</h3>
        <JobList jobsToDisplay={relatedJobs.slice(0, 3)} />
        <div className="text-center mt-4 mb-5">
          <Link to="/findjob" className="btn btn-primary">
            View All Jobs &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
