import React from "react";
import "./Highlights.css";

const Highlights = () => {
  const stats = [
    { number: "175,324", label: "Live Jobs" },
    { number: "92,354", label: "Companies" },
    { number: "38,4754", label: "Candidates" },
    { number: "7,532", label: "New Jobs" },
  ];

  return (
    <section className="highlights">
      {stats.map((item, i) => (
        <div key={i} className="highlight-card">
          <h2>{item.number}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Highlights;
