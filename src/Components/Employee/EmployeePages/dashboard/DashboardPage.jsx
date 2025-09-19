import React from "react";
import Header from "../../EmployeeComponents/common/Header";
import Sidebar from "../../EmployeeComponents/common/Sidebar";
import DashboardStats from "./DashboardStats";
import ProfileCompletionAlert from "./ProfileCompletionAlert";
import RecentApplicationsTable from "./RecentApplicationsTable";
import styles from "./dashboard.module.css";
import Navbar from "../../EmployeeComponents/Navbar";

const DashboardPage = () => {
  // Sample data to pass to the components
  const statsData = [
    { title: "Applied jobs", value: 589, icon: "applied" },
    { title: "Favorite jobs", value: 238, icon: "favorite" },
    { title: "Job Alerts", value: 574, icon: "alert" },
  ];

  const recentJobsData = [
    {
      company: "Upwork",
      logoColor: "#4CAF50",
      title: "Networking Engineer",
      type: "Remote",
      location: "Washington, USA",
      salary: "$50k-$80k/month",
      date: "Feb 2, 2019 19:28",
      status: "Active",
    },
    {
      company: "Product Hunt",
      logoColor: "#E91E63",
      title: "Product Designer",
      type: "Full Time",
      location: "Dhaka, USA",
      salary: "$50k-$80k/month",
      date: "Dec 7, 2019 23:26",
      status: "Active",
    },
    // ... add more data as needed to fill the list
  ];

  return (
    <>
    <Navbar />
    <div className={styles.dashboardLayout}>
      <Header />
      <div className={styles.mainContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <h1 className={styles.pageGreeting}>Hello, Esther Howard</h1>
          <p className={styles.subGreeting}>
            Here is your daily activities and job alerts
          </p>

          <DashboardStats data={statsData} />

          <ProfileCompletionAlert />

          <RecentApplicationsTable applications={recentJobsData} />
        </div>
      </div>
    </div>
    </>
  );
};

export default DashboardPage;
