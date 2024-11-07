import React from 'react';
import './App.css';

function LeaveList({ leaves, updateLeaveStatus }) {
  return (
    <div className="leave-list">
      <h2>Leave Requests</h2>
      {leaves.length === 0 ? (
        <p>No leave requests yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Leave Type</th>
              <th>Reason</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((leave, index) => (
              <tr key={index}>
                <td>{leave.name}</td>
                <td>{leave.leaveType}</td>
                <td>{leave.reason}</td>
                <td>{leave.startDate}</td>
                <td>{leave.endDate}</td>
                <td className={`status-${leave.status.toLowerCase()}`}>{leave.status}</td>
                <td>
                  {leave.status === 'Pending' && (
                    <>
                      <button onClick={() => updateLeaveStatus(index, 'Approved')}>Approve</button>
                      <button onClick={() => updateLeaveStatus(index, 'Rejected')}>Reject</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LeaveList;
