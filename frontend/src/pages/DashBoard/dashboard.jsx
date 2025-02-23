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
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333', fontSize:'40px' }}>Book Counts</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginRight: '40px' }}>
        <thead>
          <tr style={{ backgroundColor: '', textAlign: 'left' }}>
            <th style={{ padding: '10px', borderBottom: '2px solid #ddd',fontSize: '20px'}}>Book Name</th>
            <th style={{ padding: '5px', borderBottom: '2px solid #ddd', fontSize: '20px' }}>Count</th>
          </tr>
        </thead>
        <tbody>
          {bookCounts.map((book, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px', fontSize:'15px' }}>{book.bookName}</td>
              <td style={{ padding: '10px', fontSize:'15px' }}>{book.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Dashboard;
