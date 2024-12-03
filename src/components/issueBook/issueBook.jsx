// 

import React from 'react';
import './issueBook.css';

function IssueBook() {
  return (
    
    <div className="issue-book-container">
      <h2 className="issue-book-title">Issue Book</h2>

      {/* First Container */}
      <div className="form-section">
        <div className="input-group">
          <label htmlFor="bookId">Book ID</label>
          <input type="text" id="bookId" placeholder="Enter Book ID" />
        </div>
        <div className="input-group">
          <label htmlFor="bookName">Book Name</label>
          <input type="text" id="bookName" placeholder="Enter Book Name" />
        </div>
        <div className="input-group">
          <label htmlFor="memberId">Member ID</label>
          <input type="text" id="memberId" placeholder="Enter Member ID" />
        </div>
        <div className="input-group">
          <label htmlFor="memberName">Member Name</label>
          <input type="text" id="memberName" placeholder="Enter Member Name" />
        </div>
      </div>

      {/* Second Container */}
      <div className="form-section">
        <div className="input-group">
          <label htmlFor="startIssueDate">Start Issue Date</label>
          <input type="date" id="startIssueDate" />
        </div>
        <div className="input-group">
          <label htmlFor="endIssueDate">End Issue Date</label>
          <input type="date" id="endIssueDate" />
        </div>
      </div>

      <button className="issue-book-button">Issue Book</button>
    </div>
  );
}

export default IssueBook;
