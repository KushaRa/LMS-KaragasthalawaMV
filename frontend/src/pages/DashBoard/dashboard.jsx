import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../components/Navbar/navBar';


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
    <><NavBar/>
    <div style={{margin:'20px',padding: 0, backgroundColor: 'white', height: '100% '}}>
      
      <h2 style={{ textAlign: 'left', color: '#333', fontSize:'40px' ,margin:'20px'}}>Book Count</h2>
      <table style={{ width: '95%', borderCollapse: 'collapse', margin: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#gray', textAlign: 'left' }}>
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
