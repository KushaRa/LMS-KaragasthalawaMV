import React from "react";
import "./addBook.css";
import CloseIcon from "@mui/icons-material/Close";

const AddBook = ({ onClose }) => {
  return (
    <div className="addNewBook">
      <div className="heading">
        <h2>Add New Book</h2>
        <button className="closeButton" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>
      <form>
        <label htmlFor="firstName">Book Name*</label>
        <input type="text" placeholder="Enter book name" />

        <label htmlFor="bookID">Book ID*</label>
        <input type="text" placeholder="Enter book ID" />

        <h3>Book Information</h3>

        <label htmlFor="author">Author*</label>
        <input type="text" placeholder="Author name" />

        <label htmlFor="category">Category</label>
        <select name="subject" id="subject">
          <option value="Novels">Novels</option>
          <option value="Short Stories">Short Stories</option>
          <option value="Children Stories">Children Stories</option>
          <option value="Educational Books">Educational Books</option>
          <option value="Science and Technology">Science and Technology</option>
          <option value="History and Geography">History and Geography</option>
        </select>

        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
