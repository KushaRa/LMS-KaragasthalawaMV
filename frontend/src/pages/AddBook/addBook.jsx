import { useState } from "react";
import React from "react";
import "./addBook.css";
import CloseIcon from "@mui/icons-material/Close";
import axios from 'axios';

const AddBook = ({ onClose }) => {
  const books={
    bookID:"",
    bookName:"",
    bookclassificationNum:"",
    author:"",
    entryDate:"",
    category:"",
    publisher:"",
    publicationDate:"",
    totalPages:"",
    price:"",
    donationMedium:"",
    removeDate:"",
    other:""
  }

const [intBook, setBook]=useState(books);

const inputHandlers = (e) =>{
  const{name, value}=e.target;

  setBook({...intBook, [name]:value});
  console.log(name,value)
}

const submitForm = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:5000/api/submit-book', intBook);
    if (response.status === 200) {
      console.log("Book Submitted Successfully");
      alert("Book Submitted Successfully");
      window.location.reload(); //  refresh the entire page
    } 
    setBook(books);
  } catch (err) {
    console.error("Error submitting the book:", err);
    alert("Book is not Submitted. Please try again.");
  }
};

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
      <form onSubmit={submitForm}>
        {/* Row 1 */}
        <div className="row1">

        <div className="labelCol">
            <label htmlFor="bookID">Book ID:</label>
            <input type="text" id="bookID" name="bookID" value={intBook.bookID}
placeholder="Enter book ID" onChange={inputHandlers} />
          </div>

          <div className="labelCol">
            <label htmlFor="bookName">Book Title:</label>
            <input type="text" id="bookName" name="bookName"  value={intBook.bookName} placeholder="Enter book name" onChange={inputHandlers} />
          </div>

        </div>

        {/* Section heading */}
        <h3>Book Information</h3>

        {/* Row 2 */}
        <div className="row2">

        <div className="labelCol">
            <label htmlFor="bookclassificationNum">Classification Number:</label>
            <input type="text" id="bookclassificationNum" name="bookclassificationNum" value={intBook.bookclassificationNum} placeholder="Enter book Classifiation Number" onChange={inputHandlers} />
          </div>  

          <div className="labelCol">
            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author"  value={intBook.author} placeholder="Enter Author name" onChange={inputHandlers} />
          </div>

                 
        </div>

         {/* Row 3 */}
         <div className="row1">
          <div className="labelCol">
            <label htmlFor="entryDate">Entry Date:</label>
            <input type="date" id="entryDate" name="entryDate" value={intBook.entryDate} placeholder="" onChange={inputHandlers} />
          </div>

          <div className="labelCol">
            <label htmlFor="category">Category:</label>
            <select id="category" name="category" value={intBook.category} onChange={inputHandlers}>
            <option value="">Select Category</option>
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
            <input type="text" id="publisher" name="publisher" value={intBook.publisher} placeholder="Enter publisher name"  onChange={inputHandlers}/>
          </div>

          <div className="labelCol">
            <label htmlFor="publicationDate">Date of Publication and Printing:</label>
            <input type="date" id="publicationDate" name="publicationDate" value={intBook.publicationDate} placeholder=""  onChange={inputHandlers}/>
          </div>
        </div>

         {/* Row 1 */}
         <div className="row1">
          <div className="labelCol">
            <label htmlFor="totalPages">Total Pages:</label>
            <input type="number" id="totalPages" name="totalPages" value={intBook.totalPages} placeholder="Enter number of pages" onChange={inputHandlers} />
          </div>

          <div className="labelCol">
            <label htmlFor="price">Price of the Book:</label>
            <input type="number" id="price" name="price" value={intBook.price} placeholder="Enter book ID" onChange={inputHandlers}/>
          </div>
        </div>

         {/* Row 1 */}
         <div className="row1">
          <div className="labelCol">
            <label htmlFor="donationMedium">Medium of Donation :</label>
            <input type="text" id="donationMedium" name="donationMedium" value={intBook.donationMedium} placeholder="Enter book name" onChange={inputHandlers}/>
          </div>

          <div className="labelCol">
            <label htmlFor="removeDate">Date the book was removed :</label>
            <input type="date" id="removeDate" name="removeDate" value={intBook.removeDate} placeholder="Enter book ID" onChange={inputHandlers} />
          </div>
        </div>
        
         {/* Row 1 */}
         <div className="row1">
          <div className="labelCol">
            <label htmlFor="other">Reason For Remove :</label>
            <input type="text" id="other" name="other" value={intBook.other}  placeholder="Enter book ID" onChange={inputHandlers} />
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

{/*onst submitForm = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/submit-book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(books),
    });
    if (response.ok) {
      console.log('Data submitted successfully!');
      alert('Data submitted successfully!');
      const result = await response.json();
      console.log('Success:', result);
      alert('Post submitted successfully!');
      setBook({
        bookID:"",
        bookName:"",
        bookclassificationNum:"",
        author:"",
        entryDate:"",
        category:"",
        publisher:"",
        publicationDate:"",
        totalPages:"",
        price:"",
        donationMedium:"",
        removeDate:"",
        other:""
      });
      
    } else {
      console.error('Error:', response.statusText);
      alert('Failed to submit the post.');
    }
  } catch (error) {
    console.error('Error:', error);
    // alert('Post Submitted.');
  }
  
};*/}