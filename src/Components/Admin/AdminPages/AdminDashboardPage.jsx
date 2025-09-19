import React from "react";
import StatCard from "../AdminComponents/StatCard";
import "./AdminDashboardPage.css";

const AdminDashboardPage = () => {
  return (
    <div className="dashboard-page">
      <h1>Admin Dashboard</h1>
      <div className="stats-grid">
        <StatCard title="Total Users" value="1,250" />
        <StatCard title="Total Recruiters" value="340" />
        <StatCard title="Jobs Posted" value="5,600" />
        <StatCard title="Applications" value="12,890" />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
