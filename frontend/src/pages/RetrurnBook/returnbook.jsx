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
    <div className="bookDisplay">
      <NavBar />
      <h2>Return Issued Books</h2>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Book Name</th>
            <th>Member ID</th>
            <th>Member Name</th>
            <th>Start Issue Date</th>
            <th>End Issue Date</th>
            <th>Action</th> {/* Add Action column */}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item._id}>
                <td>{item.bookID}</td>
                <td>{item.bookName}</td>
                <td>{item.memberID}</td>
                <td>{item.memberName}</td>
                <td>{new Date(item.issueDate).toLocaleDateString()}</td>
                <td>{new Date(item.returnDate).toLocaleDateString()}</td>
                <td>
                  <button
                    className="returnbutton"
                    style={{ backgroundColor: "green" }}
                    onClick={() => handleReturnClick(item._id)} // Call the function with the book's ID
                  >
                    Return
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No issued books available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReturnBook;
