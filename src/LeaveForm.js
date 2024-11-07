import React, { useState } from 'react';
import './App.css';

function LeaveForm({ addLeave }) {
  const [name, setName] = useState('');
  const [leaveType, setLeaveType] = useState('Casual');
  const [reason, setReason] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addLeave({ name, leaveType, reason, startDate, endDate, status: 'Pending' });
    setName('');
    setLeaveType('Casual');
    setReason('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <form className="leave-form" onSubmit={handleSubmit}>
      <h2>Apply for Leave</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

      <label>Leave Type:</label>
      <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
        <option value="Casual">Casual Leave</option>
        <option value="Medical">Medical Leave</option>
      </select>

      <label>Reason:</label>
      <textarea value={reason} onChange={(e) => setReason(e.target.value)} required />

      <label>Start Date:</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />

      <label>End Date:</label>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />

      <button type="submit">Submit</button>
    </form>
  );
}

export default LeaveForm;
