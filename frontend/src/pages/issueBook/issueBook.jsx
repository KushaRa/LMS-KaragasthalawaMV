import React, { useState } from "react";
import axios from "axios";
import "./issueBook.css";

function IssueBook() {
  const [bookId, setBookId] = useState("");
  const [bookName, setBookName] = useState("");
  const [memberId, setMemberId] = useState("");
  const [memberName, setMemberName] = useState("");
  const [startIssueDate, setStartIssueDate] = useState("");
  const [endIssueDate, setEndIssueDate] = useState("");

  // Fetch Book Details
  const fetchBookDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/book/${bookId}`);
      if (response.data) {
        setBookName(response.data.bookName);
      }
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  // Fetch Member Details
  const fetchMemberDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/member/${memberId}`);
      if (response.data) {
        setMemberName(response.data.memberName);
      }
    } catch (error) {
      console.error("Error fetching member details:", error);
    }
  };

  // Handle Issue Book Button Click
  const handleIssueBook = async (e) => {
    e.preventDefault();

    if (!bookId || !memberId) {
      console.error("Book ID and Member ID are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/issue-book", {
        bookId,
        bookName,
        memberId,
        memberName,
        startIssueDate,
        endIssueDate,
      });

      console.log("Book issued successfully:", response.data);
      alert("Book issued successfully!");
      
      // Reset form
      setBookId("");
      setBookName("");
      setMemberId("");
      setMemberName("");
      setStartIssueDate("");
      setEndIssueDate("");
    } catch (error) {
      console.error("Error issuing book:", error);
      alert("Failed to issue book.");
    }
  };

  return (
    <div>
      <h2 className="issue-book-title">Issue Book</h2>

      <div className="issue-book-container">
        {/* Book & Member Details */}
        <div className="form-section">
          <div className="row">
            <div className="input-group">
              <label htmlFor="bookId">Book ID</label>
              <input
                type="text"
                id="bookId"
                placeholder="Enter Book ID"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
                onBlur={fetchBookDetails} // Auto-fetch book details when focus is lost
              />
            </div>
            <div className="input-group">
              <label htmlFor="bookName">Book Name</label>
              <input
                type="text"
                id="bookName"
                placeholder="Enter Book Name"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)} // Allow manual input
              />
            </div>
            <div className="input-group">
              <label htmlFor="memberId">Member ID</label>
              <input
                type="text"
                id="memberId"
                placeholder="Enter Member ID"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                onBlur={fetchMemberDetails} // Auto-fetch member details when focus is lost
              />
            </div>
            <div className="input-group">
              <label htmlFor="memberName">Member Name</label>
              <input
                type="text"
                id="memberName"
                placeholder="Enter Member Name"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)} // Allow manual input
              />
            </div>
          </div>
        </div>

        {/* Date Inputs */}
        <div className="form-section">
          <div className="input-group">
            <label htmlFor="startIssueDate">Start Issue Date</label>
            <input
              type="date"
              id="startIssueDate"
              value={startIssueDate}
              onChange={(e) => setStartIssueDate(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="endIssueDate">End Issue Date</label>
            <input
              type="date"
              id="endIssueDate"
              value={endIssueDate}
              onChange={(e) => setEndIssueDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Issue Book Button */}
      <form onSubmit={handleIssueBook}>
        <button type="submit" className="issue-book-button">
          Issue Book
        </button>
      </form>
    </div>
  );
}

export default IssueBook;
