import React from 'react';
import './bookTable.css'

const BookTable = () => {
  return (
    <div className='bookDisplay'>
      <table>
        <tr>
            <th>ID</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Entry Date</th>
            <th>Category</th>
            <th>Status</th>
        </tr>
      </table>
    </div>
  );
};

export default BookTable;