import React, { useState, useEffect } from "react";
import "./FilterSlidebar.css";

const FilterSidebar = ({ isOpen, onClose, currentFilters, onApply }) => {
  const [localFilters, setLocalFilters] = useState(currentFilters);
  useEffect(() => {
    setLocalFilters(currentFilters);
  }, [currentFilters, isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const processedValue = type === "checkbox" ? checked : value;
    setLocalFilters((prev) => ({ ...prev, [name]: processedValue }));
  };

  const handleApply = () => {
    onApply(localFilters);
  };

  const handleReset = () => {
    const initialFilters = {
      title: "",
      location: "",
      type: "",
      industry: "",
      isRemote: false,
    };
    setLocalFilters(initialFilters);
    onApply(initialFilters);
  };
  if (!isOpen) return null;
  const industries = ["Technology", "Marketing", "Finance", "Design"];
  const jobTypes = ["Full-time", "Part-time", "Contract"];

  return (
    <>
      <div className="sidebar-overlay" onClick={onClose}></div>
      <div className="filter-sidebar">
        <div className="sidebar-header">
          <h3>Filters</h3>
          <button onClick={onClose} className="close-btn">
            &times;
          </button>
        </div>
        <div className="sidebar-content">
          <div className="filter-group">
            <div className="filter-group">
              <h4>Favorites</h4>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="showBookmarked"
                  checked={!!localFilters.showBookmarked}
                  onChange={handleChange}
                />
                <span>Show Favourites</span>
              </label>
            </div>
            <h4>Industry</h4>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="industry"
                  value=""
                  checked={!localFilters.industry}
                  onChange={handleChange}
                />{" "}
                All Industries
              </label>
              {industries.map((ind) => (
                <label key={ind}>
                  <input
                    type="radio"
                    name="industry"
                    value={ind}
                    checked={localFilters.industry === ind}
                    onChange={handleChange}
                  />{" "}
                  {ind}
                </label>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <h4>Job Type</h4>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="type"
                  value=""
                  checked={!localFilters.type}
                  onChange={handleChange}
                />{" "}
                All Types
              </label>
              {jobTypes.map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    checked={localFilters.type === type}
                    onChange={handleChange}
                  />{" "}
                  {type}
                </label>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <h4>Location</h4>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="isRemote"
                checked={!!localFilters.isRemote}
                onChange={handleChange}
              />
              <span>Remote</span>
            </label>
          </div>
        </div>
        <div className="sidebar-footer">
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
          <button className="apply-btn" onClick={handleApply}>
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
