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
            <label htmlFor="bookID">Book ID:</label>
            <input type="text" id="bookID" placeholder="Enter book ID" />
          </div>

          <div className="labelCol">
            <label htmlFor="bookName">Book Title:</label>
            <input type="text" id="bookName" placeholder="Enter book name" />
          </div>

        </div>

        {/* Section heading */}
        <h3>Book Information</h3>

        {/* Row 2 */}
        <div className="row2">

        <div className="labelCol">
            <label htmlFor="bookclassificationNum">Classification Number:</label>
            <input type="text" id="bookclassificationNum" placeholder="Enter book Classifiation Number" />
          </div>  

          <div className="labelCol">
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" placeholder="Enter Author name" />
          </div>

                 
        </div>

         {/* Row 3 */}
         <div className="row1">
          <div className="labelCol">
            <label htmlFor="entryDate">Entry Date:</label>
            <input type="text" id="entryDate" placeholder="" />
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

         {/* Row 1 */}
         <div className="row1">
          <div className="labelCol">
            <label htmlFor="publisher">Publisher:</label>
            <input type="text" id="publisher" placeholder="Enter publisher name" />
          </div>

          <div className="labelCol">
            <label htmlFor="publicationDate">Date of Publication and Printing:</label>
            <input type="date" id="publicationDate" placeholder="" />
          </div>
        </div>

         {/* Row 1 */}
         <div className="row1">
          <div className="labelCol">
            <label htmlFor="totalPages">Total Pages:</label>
            <input type="numbers" id="totalPages" placeholder="Enter number of pages" />
          </div>

          <div className="labelCol">
            <label htmlFor="price">Price of the Book:</label>
            <input type="text" id="price" placeholder="Enter book ID" />
          </div>
        </div>

         {/* Row 1 */}
         <div className="row1">
          <div className="labelCol">
            <label htmlFor="donationMedium">Medium of Donation :</label>
            <input type="text" id="donationMedium" placeholder="Enter book name" />
          </div>

          <div className="labelCol">
            <label htmlFor="removeDate">Date the book was removed :</label>
            <input type="date" id="removeDate" placeholder="Enter book ID" />
          </div>
        </div>
        
         {/* Row 1 */}
         <div className="row1">
          <div className="labelCol">
            <label htmlFor="other">Other Details :</label>
            <input type="text" id="other" placeholder="Enter book ID" />
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
