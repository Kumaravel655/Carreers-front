import { useState } from "react";
import "./Findcandidate.css";

const candidates = [
  { id: 1, name: "Cody Fisher", role: "Marketing Officer", location: "New York", exp: "3 Years", img: "https://randomuser.me/api/portraits/men/10.jpg" },
  { id: 2, name: "Darrell Steward", role: "Interaction Designer", location: "New York", exp: "3 Years", img: "https://randomuser.me/api/portraits/men/11.jpg" },
  { id: 3, name: "Jane Cooper", role: "Senior UX Designer", location: "New York", exp: "3 Years", img: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 4, name: "Theresa Webb", role: "Front End Developer", location: "New York", exp: "3 Years", img: "https://randomuser.me/api/portraits/men/13.jpg" },
  { id: 5, name: "Kathryn Murphy", role: "Technical Support Specialist", location: "New York", exp: "3 Years", img: "https://randomuser.me/api/portraits/women/14.jpg" },
  { id: 6, name: "Marvin McKinney", role: "UI/UX Designer", location: "New York", exp: "3 Years", img: "https://randomuser.me/api/portraits/men/15.jpg" },
  { id: 7, name: "Jenny Wilson", role: "Marketing Manager", location: "New York", exp: "3 Years", img: "https://randomuser.me/api/portraits/women/16.jpg" },
  { id: 8, name: "Leslie Alexander", role: "Project Manager", location: "New York", exp: "3 Years", img: "https://randomuser.me/api/portraits/men/17.jpg" },
  { id: 9, name: "Wade Warren", role: "Software Engineer", location: "New York", exp: "3 Years", img: "https://randomuser.me/api/portraits/men/18.jpg" },
  { id: 10, name: "Courtney Henry", role: "Visual Designer", location: "New York", exp: "3 Years", img: "https://randomuser.me/api/portraits/women/19.jpg" },
];

function FindCandidate() {
  const [radius, setRadius] = useState(32);
  const [page, setPage] = useState(1);
  const totalPages = 20;      // ✅ now more than 5 pages
  const visiblePages = 5;     // show only 5 at a time

  // determine the current page group
  const startPage = Math.floor((page - 1) / visiblePages) * visiblePages + 1;
  const endPage = Math.min(startPage + visiblePages - 1, totalPages);

  return (
    <div className="find-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>Filters</h3>

        <div className="filter-group">
          <label>Location Radius: <span>{radius} miles</span></label>
          <input
            type="range"
            min="0"
            max="100"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <label>Gender</label>
          <div>
            <label><input type="radio" name="gender" defaultChecked /> All</label><br />
            <label><input type="radio" name="gender" /> Male</label><br />
            <label><input type="radio" name="gender" /> Female</label><br />
            <label><input type="radio" name="gender" /> Others</label>
          </div>
        </div>
      </aside>

      {/* Candidate List */}
      <main className="candidate-section">
        <h2>Find Employers</h2>

        <div className="candidate-list">
          {candidates.map((c) => (
            <div key={c.id} className="candidate-card">
              <div className="left">
                <img src={c.img} alt={c.name} className="profile-img" />
                <div className="candidate-info">
                  <h4>{c.name}</h4>
                  <p className="role">{c.role}</p>
                  <p className="meta">{c.location} • {c.exp} experience</p>
                </div>
              </div>
              <div className="actions">
                <button className="bookmark">🔖</button>
                <button className="view-btn">View Profile →</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {startPage > 1 && (
            <button className="page" onClick={() => setPage(startPage - 1)}>‹</button>
          )}
          {Array.from({ length: endPage - startPage + 1 }, (_, i) => {
            const pageNum = startPage + i;
            return (
              <button
                key={pageNum}
                className={`page ${page === pageNum ? "active" : ""}`}
                onClick={() => setPage(pageNum)}
              >
                {String(pageNum).padStart(2, "0")}
              </button>
            );
          })}
          {endPage < totalPages && (
            <button className="page" onClick={() => setPage(endPage + 1)}>›</button>
          )}
        </div>
      </main>
    </div>
  );
}

export default FindCandidate;
