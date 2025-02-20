import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/Navbar/navBar";

const ReturnBook = () => {
  const [data, setData] = useState([]);

  // Fetch issued books from the backend
  useEffect(() => {
    const fetchIssuedBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/issue-book");
        setData(response.data); // Assuming response.data is an array of issued books
      } catch (error) {
        console.error("Error fetching issued books:", error);
      }
    };

    fetchIssuedBooks();
  }, []);

  // Handle return button click
  const handleReturnClick = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/issue-book/${id}`); // DELETE request to remove book
      // Remove the book from the UI after successful deletion
      setData((prevData) => prevData.filter((item) => item._id !== id));
      alert("Book returned successfully.");
    } catch (error) {
      console.error("Error returning book:", error);
      alert("Error returning book.");
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <NavBar />
      <h2 style={{ textAlign: "center", color: "#333", fontSize: '30px', padding:'20px' }}>Return Issued Books</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" , fontSize: '15px'}}>
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Book ID</th>
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Book Name</th>
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Member ID</th>
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Member Name</th>
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Start Issue Date</th>
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>End Issue Date</th>
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item._id} style={{ borderBottom: "1px solid #ddd", fontSize: '13px' }}>
                <td style={{ padding: "10px" }}>{item.bookID}</td>
                <td style={{ padding: "10px" }}>{item.bookName}</td>
                <td style={{ padding: "10px" }}>{item.memberID}</td>
                <td style={{ padding: "10px" }}>{item.memberName}</td>
                <td style={{ padding: "10px" }}>{new Date(item.issueDate).toLocaleDateString()}</td>
                <td style={{ padding: "10px" }}>{new Date(item.returnDate).toLocaleDateString()}</td>
                <td>
                  <button
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "8px 12px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleReturnClick(item._id)}
                  >
                    Return
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" style={{ textAlign: "center", padding: "10px" }}>No issued books available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReturnBook;
