import React, { useState, useEffect } from "react";
import "./ReturnBook.css";
import axios from "axios";

const ReturnBookTable = () => {
  const [data, setData] = useState([]);   // State for book data
  const [error, setError] = useState("");  // State for errors
  const [detail, setDetail] = useState(""); // Define setDetail for managing book details (if needed)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.put(
          "http://localhost:5000/api/return-book"
        );
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const bookOpen = (book) => {
    // Example of setting some detail when a book is clicked
    setDetail(book);  // Pass the clicked book's data to setDetail
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bookDisplay">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Book Name</th>
            <th>Class No.</th>
            <th>Author</th>
            <th>Entry Date</th>
            <th>Publisher</th>
            <th>Publication Date</th>
            <th>Category</th>
            <th>Total Pages</th>
            <th>Price</th>
            <th>Don. Medium</th>
            <th>Remove Date</th>
            <th>Other</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} onClick={() => bookOpen(item)}>
              <td>{item.bookID}</td>
              <td>{item.bookName}</td>
              <td>{item.bookclassificationNum}</td>
              <td>{item.author}</td>
              <td>{item.entryDate}</td>
              <td>{item.publisher}</td>
              <td>{item.publicationDate}</td>
              <td>{item.category}</td>
              <td>{item.totalPages}</td>
              <td>{item.price}</td>
              <td>{item.donationMedium}</td>
              <td>{item.removeDate}</td>
              <td>{item.other}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {detail && (
        <div className="bookDetail">
          {/* You can display the selected book's details here */}
          <h3>Book Details</h3>
          <p><strong>ID:</strong> {detail.bookID}</p>
          <p><strong>Name:</strong> {detail.bookName}</p>
          {/* Add more book details as needed */}
        </div>
      )}
    </div>
  );
};

export default ReturnBookTable;
