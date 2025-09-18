// src/components/Success.jsx
import React from "react";
import "./Dashboard.css";

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-content">
        {/* Replace image with emoji */}
        <div className="success-emoji" style={{ fontSize: "60px", marginBottom: "20px" }}>
          🎉
        </div>

        <h2>Congratulations, Your profile is 100% complete!</h2>

        <p>
          Donec hendrerit, arcu mattis pellentesque eleifend, tortor urna
          malesuada arcu, eget aliquam nulla sapien hendrerit ligula. Nunc
          mauris eros, mattis sed sem vitae.
        </p>

        <div className="success-buttons">
          <button className="btn btn-outline">View Dashboard</button>
          <button className="btn btn-primary">Post Job</button>
        </div>
      </div>
    </div>
  );
};

export default Success;
