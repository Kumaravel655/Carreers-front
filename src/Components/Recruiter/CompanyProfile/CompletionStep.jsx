import React from "react";

export default function CompletionStep() {
  return (
    <div className="text-center py-5">
      <div className="mb-4">
        <i
          className="bi bi-check-circle-fill text-success"
          style={{ fontSize: "60px" }}
        ></i>
      </div>
      <h2 className="mb-3">Congratulations!</h2>
      <p className="text-muted mb-4">
        Your profile is 100% complete. You can now start posting jobs and
        finding the best candidates.
      </p>
      <div>
        <button className="btn btn-outline-secondary me-2">
          View Dashboard
        </button>
        <button className="btn btn-primary">Post Job →</button>
      </div>
    </div>
  );
}
