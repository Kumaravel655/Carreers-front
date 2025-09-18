import React, { useState } from "react";
import Header from "../../EmployeeComponents/common/Header";
import Sidebar from "../../EmployeeComponents/common/Sidebar";
import PersonalSettings from "../../EmployeeComponents/settings/PersonalSettings";
import ProfileSettings from "../../EmployeeComponents/settings/ProfileSettings";
import SocialLinks from "../../EmployeeComponents/settings/SocialLinks";
import AccountSettings from "../../EmployeeComponents/settings/AccountSettings";
import styles from "../../EmployeeComponents/settings/settings.module.css";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Personal");

  const renderContent = () => {
    switch (activeTab) {
      case "Personal":
        return <PersonalSettings />;
      case "Profile":
        return <ProfileSettings />;
      case "Social Links":
        return <SocialLinks />;
      case "Account Setting":
        return <AccountSettings />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.settingsLayout}>
      <Header />
      <div className={styles.mainContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <div className={styles.settingsContainer}>
            <h2 className={styles.settingsTitle}>Settings</h2>

            <div className={styles.tabNavbar}>
              <button
                className={`${styles.tabButton} ${
                  activeTab === "Personal" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("Personal")}
              >
                Personal
              </button>
              <button
                className={`${styles.tabButton} ${
                  activeTab === "Profile" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("Profile")}
              >
                Profile
              </button>
              <button
                className={`${styles.tabButton} ${
                  activeTab === "Social Links" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("Social Links")}
              >
                Social Links
              </button>
              <button
                className={`${styles.tabButton} ${
                  activeTab === "Account Setting" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("Account Setting")}
              >
                Account Setting
              </button>
            </div>

            <div className={styles.tabContent}>{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
