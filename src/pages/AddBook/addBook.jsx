import React from 'react';
import './addBook.css';
const AddBook = () => {
  return (
    <div className="addNewBook">
        <h2>Add New Book</h2>
        
        <form>
          <label htmlFor="firstName">Book Name*</label>
          <input type="text" placeholder='Enter book name' />

          <label htmlFor="bookID">Book ID*</label>
          <input type="text" placeholder='Enter book ID' />

          <h3>Book Information</h3>

          <label htmlFor="author">Author*</label>
          <input type="text" placeholder='Author name' />

           <label htmlFor="category">Category</label>
           <select name="subject" id="subject">
           <option value="category">Novels</option>
           <option value="category">Short Stories</option>
           <option value="category">Children Stories</option>
           <option value="category">Educational Books</option>
           <option value="category">Science and Technology</option>
           <option value="category">History and Geography </option>
           </select>

       


        </form>
      
    </div>
  );
};

export default AddBook;