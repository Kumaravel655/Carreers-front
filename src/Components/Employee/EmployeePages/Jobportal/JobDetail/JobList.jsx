import React from "react";
import { Link } from "react-router-dom";
import "./JobList.css";

const JobList = ({ jobsToDisplay = [], bookmarkedJobs = new Set(), onToggleBookmark }) => {

  const handleBookmarkClick = (e, jobId) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleBookmark(jobId);
  };

  return (
    <div className="job-cards">
      {jobsToDisplay.map((jobItem) => {
        const isBookmarked = bookmarkedJobs.has(jobItem.id);

        return (
          <Link
            to={`/job-seeker/jobs/${jobItem.id}`}
            key={jobItem.id}
            className="job-card-link"
          >
            <div className="job-card my-4">
              <h2>{jobItem.title}</h2>
              <p className="jtype"> {jobItem.type}</p>
              <p className="sal">Salary : {jobItem.salary}</p>
              <div className="jbtm">
                <div className="company-info">
                  <div className="jlogo">
                    <img
                      src={`/${jobItem.logo}`}
                      alt={`${jobItem.company} logo`}
                    />
                  </div>
                  <div className="d-flex flex-column lh-1 p-3">
                    <p className="company-name fw-bold ">{jobItem.company}</p>
                    <div className="job-details text-secondary">
                      <span>
                        <i className="bi bi-geo-alt"></i> {jobItem.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bookmark" onClick={(e) => handleBookmarkClick(e, jobItem.id)}>
                  <i className={`bi ${isBookmarked ? "bi-bookmark-fill" : "bi-bookmark"}`}></i>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default JobList;