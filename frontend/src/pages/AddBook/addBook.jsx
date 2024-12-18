import React from "react";
import "./addBook.css";
import CloseIcon from "@mui/icons-material/Close";

const AddBook = ({ onClose }) => {
  return (
    <div className="addNewBook">
      {/* Heading */}
      <div className="heading">
        <h2>Add New Book</h2>
        <button className="closeButton" onClick={onClose}>
          <CloseIcon />
        </button>
      </div>

      {/* Form */}
      <form>
        {/* Row 1 */}
        <div className="row1">
          <div className="labelCol">
            <label htmlFor="bookName">Book Name:</label>
            <input type="text" id="bookName" placeholder="Enter book name" />
          </div>

          <div className="labelCol">
            <label htmlFor="bookID">Book ID:</label>
            <input type="text" id="bookID" placeholder="Enter book ID" />
          </div>
        </div>

        {/* Section heading */}
        <h3>Book Information</h3>

        {/* Row 2 */}
        <div className="row2">
          <div className="labelCol">
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" placeholder="Author name" />
          </div>

          <div className="labelCol">
            <label htmlFor="category">Category:</label>
            <select id="category">
              <option value="Novels">Novels</option>
              <option value="Short Stories">Short Stories</option>
              <option value="Children Stories">Children Stories</option>
              <option value="Educational Books">Educational Books</option>
              <option value="Science and Technology">Science and Technology</option>
              <option value="History and Geography">History and Geography</option>
            </select>
          </div>
        </div>

        {/* Submit button */}
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
