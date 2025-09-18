import React, { useState, useMemo } from 'react';
import './SupportPage.css'; // Import the new CSS

const SupportPage = () => {
    // Sample support ticket data - you will fetch this from your API
    const initialTickets = [
        { id: 'TKT-001', user: 'john.d@example.com', subject: 'Cannot Update Profile', message: 'I am trying to update my profile picture, but it fails every time.', date: '2025-09-18', status: 'Open' },
        { id: 'TKT-002', user: 'jane.s@example.com', subject: 'Billing Inquiry', message: 'I was charged twice for my subscription this month. Please assist.', date: '2025-09-17', status: 'Open' },
        { id: 'TKT-003', user: 'sam.w@example.com', subject: 'Job Posting Error', message: 'My new job posting is not showing up in the search results.', date: '2025-09-16', status: 'Closed' },
    ];

    const [tickets, setTickets] = useState(initialTickets);
    const [filterStatus, setFilterStatus] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const handleUpdateStatus = (ticketId, newStatus) => {
        console.log(`Updating ticket ${ticketId} to ${newStatus}`);
        // TODO: Add API call to update the ticket in your database
        setTickets(currentTickets =>
            currentTickets.map(ticket =>
                ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
            )
        );
    };

    // Memoize the filtered tickets to avoid re-calculating on every render
    const filteredTickets = useMemo(() => {
        return tickets
            .filter(ticket => filterStatus === 'All' || ticket.status === filterStatus)
            .filter(ticket =>
                ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                ticket.user.toLowerCase().includes(searchTerm.toLowerCase())
            );
    }, [tickets, filterStatus, searchTerm]);


    return (
        <div className="support-page">
            <h1>Support Center</h1>

            <div className="support-filters">
                <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                    <option value="All">All Statuses</option>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                </select>
                <input
                    type="text"
                    placeholder="Search by subject or user..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="ticket-list">
                {filteredTickets.length > 0 ? (
                    filteredTickets.map(ticket => (
                        <div key={ticket.id} className={`ticket-card status-${ticket.status.toLowerCase()}`}>
                            <div className="ticket-card-header">
                                <span className="ticket-id">{ticket.id}</span>
                                <span className="ticket-status">{ticket.status}</span>
                            </div>
                            <div className="ticket-card-body">
                                <h3 className="ticket-subject">{ticket.subject}</h3>
                                <p className="ticket-user">From: {ticket.user}</p>
                                <p className="ticket-message">{ticket.message}</p>
                            </div>
                            <div className="ticket-card-footer">
                                <span>Submitted: {ticket.date}</span>
                                <div className="ticket-actions">
                                    {ticket.status === 'Open' && (
                                        <button onClick={() => handleUpdateStatus(ticket.id, 'Closed')}>
                                            Mark as Closed
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No tickets found.</p>
                )}
            </div>
        </div>
    );
};

export default SupportPage;