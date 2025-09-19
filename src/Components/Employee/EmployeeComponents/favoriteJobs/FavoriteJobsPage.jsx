import React from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import FavoriteJobsList from "./FavoriteJobsList";
import Pagination from "../../EmployeePages/Pages/Pagination";
import styles from "./favoriteJobs.module.css";

const FavoriteJobsPage = () => {
  // Sample data to simulate an API response for favorite jobs
  const favoriteJobsData = [
    {
      id: 1,
      company: "Twitter",
      logoColor: "#1DA1F2",
      title: "Technical Support Specialist",
      type: "Full Time",
      location: "Istanbul, USA",
      salary: "$10k-$20k",
      daysRemaining: "4 Days Remaining",
      status: "active",
    },
    {
      id: 2,
      company: "YouTube",
      logoColor: "#FF0000",
      title: "UI/UX Designer",
      type: "Full Time",
      location: "Minnesota, USA",
      salary: "$10k-$15k",
      daysRemaining: "4 Days Remaining",
      status: "active",
    },
    {
      id: 3,
      company: "Google",
      logoColor: "#4285F4",
      title: "Senior UX Designer",
      type: "Full Time",
      location: "United Kingdom of Great Britain",
      salary: "$30k-$35k",
      daysRemaining: "4 Days Remaining",
      status: "active",
    },
    {
      id: 4,
      company: "Facebook",
      logoColor: "#1877F2",
      title: "Junior Graphic Designer",
      type: "Full Time",
      location: "Mymensingh, Bangladesh",
      salary: "$40k-$50k",
      daysRemaining: "4 Days Remaining",
      status: "active",
    },
    // ... add more data to match the image
  ];

  return (
    <div className={styles.favoriteJobsLayout}>
      <Header />
      <div className={styles.mainContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <FavoriteJobsList jobs={favoriteJobsData} />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default FavoriteJobsPage;
