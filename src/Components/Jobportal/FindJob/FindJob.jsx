import React, { useState, useMemo } from "react";
import "./FindJob.css";
import JobList from "../JobDetail/JobList";
import allJobs from "../JobDetail/jobs.json";
import FilterSidebar from "./FilterSlidebar";
const FindJob = () => {
  const initialFilters = {
    title: "",
    location: "",
    type: "",
    industry: "",
    isRemote: false,
    showBookmarked: false,
  };
  const [filters, setFilters] = useState(initialFilters);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedJobs, setBookmarkedJobs] = useState(new Set());
  const [jobsPerPage] = useState(15);
  const handleLiveFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };
  const handleApplySidebarFilters = (sidebarFilters) => {
    setFilters(sidebarFilters);
    setIsSidebarOpen(false);
    setCurrentPage(1);
  };
  const toggleBookmark = (jobId) => {
    setBookmarkedJobs((prevBookmarked) => {
      const newBookmarked = new Set(prevBookmarked);
      if (newBookmarked.has(jobId)) {
        newBookmarked.delete(jobId);
      } else {
        newBookmarked.add(jobId);
      }
      return newBookmarked;
    });
  };


  const filteredJobs = useMemo(() => {

    return allJobs.filter((job) => {
      const bookmarkMatch =
        !filters.showBookmarked || bookmarkedJobs.has(job.id);
      const titleMatch = job.title
        .toLowerCase()
        .includes(filters.title.toLowerCase());
      const locationMatch = job.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());
      const typeMatch = !filters.type || job.type === filters.type;
      const industryMatch =
        !filters.industry || job.industry === filters.industry;
      const remoteMatch = !filters.isRemote || job.isRemote === true;

      return (
        bookmarkMatch &&
        titleMatch &&
        locationMatch &&
        typeMatch &&
        industryMatch &&
        remoteMatch
      );
    });
  }, [filters, bookmarkedJobs]); 
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="find-job-page">
      <nav className="page-header">
        Find Job
        <div>
          <a href="/">Home</a> / <i>Find Job</i>
        </div>
      </nav>

      <div className="page-body">
        <div className="search-bar">
          <div className="search-input">
            <i className="bi bi-search"></i>

            <input
              name="title"
              placeholder="Job title..."
              value={filters.title}
              onChange={handleLiveFilterChange}
            />
          </div>

          <div className="search-input">
            <i className="bi bi-geo-alt"></i>

            <input
              type="text"
              name="location"
              placeholder="City, State..."
              value={filters.location}
              onChange={handleLiveFilterChange}
            />
          </div>

          <button className="filter-btn" onClick={() => setIsSidebarOpen(true)}>
            <i className="bi bi-funnel"></i> Filter
          </button>
        </div>

        <FilterSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          currentFilters={filters}
          onApply={handleApplySidebarFilters}
        />
      </div>

      {filteredJobs.length > 0 ? (
        <JobList
          jobsToDisplay={currentJobs}
          bookmarkedJobs={bookmarkedJobs}
          onToggleBookmark={toggleBookmark}
        />
      ) : (
        <p className="no-jobs-found">No jobs found matching your criteria.</p>
      )}

      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>

          {[...Array(totalPages).keys()].map((number) => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={currentPage === number + 1 ? "active" : ""}
            >
              {number + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default FindJob;
