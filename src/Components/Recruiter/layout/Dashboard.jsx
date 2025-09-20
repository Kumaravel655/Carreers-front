import React, { useState, useEffect } from "react";
import RecruiterLayout from "./RecruiterLayout";
import StatCard from "./StatCard"; // <-- Import StatCard
import JobsTable from "./JobsTable"; // <-- Import JobsTable

// This is the component that displays the main content
function DashboardContent({ data }) {
  if (!data) {
    return <p>No data found.</p>;
  }

  return (
    <div>
      <h3 className="fw-bold">Hello, {data.companyName}</h3>
      <p className="text-muted">
        Here are your daily activities and applications.
      </p>

      {/* Stat Cards Section */}
      <div className="row g-4 my-3">
        <div className="col-md-6">
          <StatCard
            title="Open Jobs"
            value={data.stats.openJobs}
            iconClass="bi bi-briefcase"
            colorClass="text-primary"
          />
        </div>
        <div className="col-md-6">
          <StatCard
            title="Saved Candidates"
            value={data.stats.savedCandidates}
            iconClass="bi bi-bookmark-star"
            colorClass="text-warning"
          />
        </div>
      </div>

      {/* Jobs Table Section */}
      <div className="mt-4">
        <JobsTable jobs={data.recentlyPostedJobs} />
      </div>
    </div>
  );
}

// This is the main component that handles the data fetching logic
export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/dashboard.json")
      .then((response) => response.json())
      .then((data) => {
        setDashboardData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "300px" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <DashboardContent data={dashboardData} />
      )}
    </>
  );
}
