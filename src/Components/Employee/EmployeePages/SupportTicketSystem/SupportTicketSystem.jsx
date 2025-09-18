import React, { useState } from "react";
import "./SupportTicketSystem.css";

const SupportTicketSystem = () => {
  const [tickets, setTickets] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.issue) return;

    const newTicket = {
      id: Date.now(),
      ...formData,
      status: "Open",
    };

    setTickets([newTicket, ...tickets]);
    setFormData({ name: "", email: "", issue: "" });
  };

  return (
    <div className="support-container">
      <h1 className="title">Support Ticket System</h1>

      {/* Ticket Form */}
      <form className="ticket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="issue"
          placeholder="Describe your issue..."
          rows="4"
          value={formData.issue}
          onChange={handleChange}
        />
        <button type="submit">Submit Ticket</button>
      </form>

      {/* Ticket List */}
      <div className="ticket-list">
        <h2>Submitted Tickets</h2>
        {tickets.length === 0 ? (
          <p className="no-ticket">No tickets submitted yet.</p>
        ) : (
          tickets.map((ticket) => (
            <div key={ticket.id} className="ticket-card">
              <h3>{ticket.issue}</h3>
              <p><strong>Name:</strong> {ticket.name}</p>
              <p><strong>Email:</strong> {ticket.email}</p>
              <span className={`status ${ticket.status.toLowerCase()}`}>
                {ticket.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SupportTicketSystem;
