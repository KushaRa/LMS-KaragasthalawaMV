import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [bookCounts, setBookCounts] = useState([]);

  useEffect(() => {
    // Make a GET request to the API to fetch book counts
    axios.get('http://localhost:5000/api/books/count')
      .then(response => {
        setBookCounts(response.data); // Set the book counts in state
      })
      .catch(error => {
        console.error('Error fetching book counts:', error);
      });
  }, []);

  return (
    <div>
      <h2>Book Counts</h2>
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {bookCounts.map((book, index) => (
            <tr key={index}>
              <td>{book.bookName}</td>
              <td>{book.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
