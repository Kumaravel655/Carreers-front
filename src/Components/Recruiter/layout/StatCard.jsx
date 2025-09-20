import React from "react";

export default function StatCard({ title, value, iconClass, colorClass }) {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className={`fs-1 ${colorClass}`}>
            <i className={iconClass}></i>
          </div>
          <div className="ms-3">
            <h3 className="mb-0 fw-bold">{value.toLocaleString()}</h3>
            <p className="text-muted mb-0">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
