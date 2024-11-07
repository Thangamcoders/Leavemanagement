import React, { useState } from 'react';
import LeaveForm from './LeaveForm';
import LeaveList from './LeaveList';
import './App.css';

function App() {
  const [leaves, setLeaves] = useState([]);

  const addLeave = (leave) => {
    setLeaves([...leaves, leave]);
  };

  const updateLeaveStatus = (index, status) => {
    const updatedLeaves = leaves.map((leave, i) => 
      i === index ? { ...leave, status } : leave
    );
    setLeaves(updatedLeaves);
  };

  return (
    <div className="App">
      <header>
        <h1>Leave Management System</h1>
      </header>
      <LeaveForm addLeave={addLeave} />
      <LeaveList leaves={leaves} updateLeaveStatus={updateLeaveStatus} />
    </div>
  );
}

export default App;
