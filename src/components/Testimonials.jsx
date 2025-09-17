import React from "react";
import "./../styles/Testimonials.css";

const Testimonials = () => {
  const reviews = [
    { name: "Robert Fox", text: "Great platform, helped me land my dream job!" },
    { name: "Jessica Cooper", text: "User-friendly and lots of opportunities available." },
    { name: "Jane Cooper", text: "As an employer, I found quality candidates in no time." },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        {reviews.map((r, i) => (
          <div key={i} className="testimonial">
            <p>"{r.text}"</p>
            <h4>- {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
