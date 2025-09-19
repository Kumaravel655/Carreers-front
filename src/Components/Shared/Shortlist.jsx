import React, { useState, useEffect } from 'react';
import './Shortlist.css';

const SAMPLE_CANDIDATES = [
  { id: 1, name: 'Sowmiya Shanmugam', role: 'Frontend Developer', email: 'sowmiya@example.com' },
  { id: 2, name: 'Arjun Kumar', role: 'Backend Developer', email: 'arjun@example.com' },
  { id: 3, name: 'Meera Patel', role: 'Fullstack Developer', email: 'meera@example.com' },
];

function useLocalStorage(key, initial) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch (e) {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {}
  }, [key, state]);

  return [state, setState];
}

function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const t = setTimeout(onClose, 2500);
    return () => clearTimeout(t);
  }, [message, onClose]);

  if (!message) return null;
  return (
    <div className="toast">
      <div className="toast-message">{message}</div>
    </div>
  );
}

function ScheduleModal({ candidate, onClose, onSave }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [interviewer, setInterviewer] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (candidate && candidate.nextInterview) {
      const dt = new Date(candidate.nextInterview.datetime);
      setDate(dt.toISOString().slice(0, 10));
      setTime(dt.toTimeString().slice(0, 5));
      setInterviewer(candidate.nextInterview.interviewer || '');
      setNotes(candidate.nextInterview.notes || '');
    } else {
      setDate('');
      setTime('');
      setInterviewer('');
      setNotes('');
    }
  }, [candidate]);

  if (!candidate) return null;

  function handleSubmit(e) {
    e.preventDefault();
    if (!date || !time || !interviewer) return alert('Please fill date, time and interviewer');
    const datetime = new Date(`${date}T${time}`);
    onSave(candidate.id, { datetime: datetime.toISOString(), interviewer, notes });
    onClose();
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3 className="modal-title">Schedule Interview — {candidate.name}</h3>
        <form onSubmit={handleSubmit} className="modal-form">
          <div>
            <label>Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <label>Time</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
          <div>
            <label>Interviewer</label>
            <input value={interviewer} onChange={(e) => setInterviewer(e.target.value)} placeholder="Interviewer name" />
          </div>
          <div>
            <label>Notes</label>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} />
          </div>
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn">Cancel</button>
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function CandidateCard({ candidate, onShortlistToggle, onOpenSchedule, onView }) {
  return (
    <div className="candidate-card">
      <div className="candidate-info">
        <div className="avatar">{candidate.name.split(' ').map(n => n[0]).slice(0,2).join('')}</div>
        <div>
          <div className="candidate-name">{candidate.name}</div>
          <div className="candidate-role">{candidate.role} • {candidate.email}</div>
        </div>
      </div>

      <div className="candidate-actions">
        <button onClick={() => onOpenSchedule(candidate)} className="btn">Schedule</button>
        <button onClick={() => onShortlistToggle(candidate.id)} className={`btn ${candidate.shortlisted ? 'btn-success' : ''}`}>
          {candidate.shortlisted ? 'Shortlisted' : 'Shortlist'}
        </button>
        <button onClick={() => onView(candidate)} className="btn">View</button>
      </div>
    </div>
  );
}

export default function ShortlistAndInterviewScheduler() {
  const [candidates, setCandidates] = useLocalStorage('sms:candidates', SAMPLE_CANDIDATES.map(c => ({ ...c, shortlisted: false })));
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [modalCandidate, setModalCandidate] = useState(null);
  const [toast, setToast] = useState('');
  const [viewing, setViewing] = useState(null);

  function handleShortlistToggle(id) {
    setCandidates(prev => prev.map(c => c.id === id ? { ...c, shortlisted: !c.shortlisted } : c));
    const c = candidates.find(x => x.id === id);
    setToast(c && !c.shortlisted ? `${c.name} shortlisted` : `${c ? c.name : 'Candidate'} removed from shortlist`);
  }

  function handleOpenSchedule(candidate) {
    setModalCandidate(candidate);
  }

  function handleSaveSchedule(id, interview) {
    setCandidates(prev => prev.map(c => c.id === id ? { ...c, nextInterview: interview } : c));
    const c = candidates.find(x => x.id === id);
    setToast(`${c ? c.name : 'Candidate'} — interview scheduled`);
  }

  function handleView(candidate) {
    setViewing(candidate);
  }

  const filtered = candidates.filter(c => {
    if (filter === 'shortlisted') return c.shortlisted;
    if (filter === 'scheduled') return !!c.nextInterview;
    if (!query) return true;
    const q = query.toLowerCase();
    return c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q) || c.email.toLowerCase().includes(q);
  });

  function handleAddCandidate() {
    const nextId = Math.max(0, ...candidates.map(c => c.id)) + 1;
    const name = prompt('Candidate full name');
    if (!name) return;
    const role = prompt('Role/position', 'Applicant');
    const email = prompt('Email', `${name.split(' ')[0].toLowerCase()}@example.com`);
    setCandidates(prev => [{ id: nextId, name, role, email, shortlisted: false }, ...prev]);
    setToast('Candidate added');
  }

  return (
    <div className="container">
      <h2 className="title">Candidate Management — Shortlist & Interview Scheduling</h2>

      <div className="toolbar">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search candidates by name, role or email" />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="shortlisted">Shortlisted</option>
          <option value="scheduled">Scheduled</option>
        </select>
        <button onClick={handleAddCandidate} className="btn btn-primary">Add</button>
      </div>

      <div className="candidate-list">
        {filtered.length === 0 && <div className="no-candidates">No candidates found.</div>}
        {filtered.map(c => (
          <CandidateCard key={c.id} candidate={c} onShortlistToggle={handleShortlistToggle} onOpenSchedule={handleOpenSchedule} onView={handleView} />
        ))}
      </div>

      {viewing && (
        <div className="drawer">
          <div className="drawer-header">
            <h3>{viewing.name}</h3>
            <button onClick={() => setViewing(null)} className="btn">Close</button>
          </div>
          <div className="drawer-body">
            <div><strong>Role:</strong> {viewing.role}</div>
            <div><strong>Email:</strong> {viewing.email}</div>
            <div><strong>Shortlisted:</strong> {viewing.shortlisted ? 'Yes' : 'No'}</div>
            <div>
              <strong>Next Interview:</strong>
              {viewing.nextInterview ? (
                <div className="interview-details">
                  <div>{new Date(viewing.nextInterview.datetime).toLocaleString()}</div>
                  <div>Interviewer: {viewing.nextInterview.interviewer}</div>
                  <div>Notes: {viewing.nextInterview.notes}</div>
                </div>
              ) : <div className="no-interview">Not scheduled</div>}
            </div>
          </div>
        </div>
      )}

      {modalCandidate && (
        <ScheduleModal candidate={modalCandidate} onClose={() => setModalCandidate(null)} onSave={handleSaveSchedule} />
      )}

      <Toast message={toast} onClose={() => setToast('')} />
    </div>
  );
}
