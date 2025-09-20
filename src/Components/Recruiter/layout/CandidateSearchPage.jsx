import React, { useState, useEffect } from "react";

function CandidateSearchContent() {
  // State for the full list of candidates from our "database"
  const [allCandidates, setAllCandidates] = useState([]);

  // State for the candidates currently being displayed
  const [filteredCandidates, setFilteredCandidates] = useState([]);

  // State for the search form inputs
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    // Load the entire candidate database once when the component mounts
    fetch("/data/candidates.json")
      .then((res) => res.json())
      .then((data) => {
        setAllCandidates(data);
        setFilteredCandidates(data); // Initially, show all candidates
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    let results = [...allCandidates];

    // Apply keyword search (checks name, headline, and skills)
    if (searchQuery) {
      results = results.filter(
        (candidate) =>
          candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          candidate.headline
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          candidate.skills.some((skill) =>
            skill.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Apply location filter
    if (locationFilter) {
      results = results.filter((candidate) =>
        candidate.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    setFilteredCandidates(results);
  };

  return (
    <div>
      <h3 className="fw-bold">Find Candidates</h3>
      <p className="text-muted">
        Search our database to find the perfect match for your next role.
      </p>

      {/* Search Form */}
      <div className="card shadow-sm border-0 mt-4">
        <div className="card-body">
          <form onSubmit={handleSearch} className="row g-3 align-items-center">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search by keyword (e.g., 'React', 'Designer')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Location (e.g., 'Bengaluru')"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-primary w-100">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Search Results */}
      <div className="mt-4">
        <h5>{filteredCandidates.length} Candidates Found</h5>
        <div className="row g-4 mt-2">
          {filteredCandidates.map((candidate) => (
            <div key={candidate.id} className="col-md-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body d-flex">
                  <img
                    src={candidate.avatarUrl}
                    alt={candidate.name}
                    className="rounded-circle me-3"
                    width="60"
                    height="60"
                  />
                  <div>
                    <h6 className="fw-bold mb-0">{candidate.name}</h6>
                    <p className="text-muted mb-2">{candidate.headline}</p>
                    <div>
                      {candidate.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="badge bg-light text-dark me-1"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CandidateSearchPage() {
  return <CandidateSearchContent />;
}
