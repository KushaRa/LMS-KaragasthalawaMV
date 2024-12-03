import React from 'react';
import './issueBook.css';

const IssueBook = () => {
  return (
    <div className="issue-book-page">
      <div className="issue-book-header">
        <h3>Issue Book</h3>
        <button className="close-button">×</button>
        <form className="issue-book-form">
        <div className="form-row">
           <div className="form-group">
            <label htmlFor="book-id">Book ID</label>
            <input type="text" id="book-id" placeholder="Enter Book ID" />
          </div>
          <div className="form-group">
            <label htmlFor="member-id">Member ID</label>
            <input type="text" id="member-id" placeholder="Enter Member ID" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="book-name">Book Name</label>
            <input type="text" id="book-name" placeholder="Enter Book Name" />
          </div>
          <div className="form-group">
            <label htmlFor="member-name">Member Name</label>
            <input type="text" id="member-name" placeholder="Enter Member Name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="start-issue-date">Start Issue Date</label>
            <input type="date" id="start-issue-date" />
          </div>
          <div className="form-group">
            <label htmlFor="end-issue-date">End Issue Date</label>
            <input type="date" id="end-issue-date" />
          </div>
        </div>
        <button type="submit" className="issue-book-button">Issue Book</button> 
      </form>  



      </div>
      
    </div>
  );
};

export default IssueBook;
