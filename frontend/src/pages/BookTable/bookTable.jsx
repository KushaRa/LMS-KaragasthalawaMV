import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./bookTable.css";
import axios from "axios";

const BookTable = ({ searchTerm }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [updateBook, setUpdateBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/display-book");
        const sortedData = response.data.sort((a, b) => a.bookID - b.bookID);
      setData(sortedData);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateBook({
      ...updateBook,
      [name]: value,
    });
  };

  const handleUpdateBook = async () => {
    try {
      await axios.put(`http://localhost:5000/api/update-book/${selectedBook._id}`, updateBook);
      alert("Book updated successfully");

      // Refetch the updated data
      const updatedData = await axios.get("http://localhost:5000/api/display-book");
      setData(updatedData.data);

      setSelectedBook(null);
    } catch (error) {
      alert("Error updating the book");
      console.error("Update error:", error);
    }
  };

  const handleDeleteBook = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/delete-book/${selectedBook._id}`);
      alert("Book deleted successfully");
      window.location.reload(); // Refresh the entire page
    } catch (error) {
      alert("Error deleting the book");
      console.error("Deleting error:", error);
      navigate("/");
    }
  };

  const handleRowClick = (item) => {
    console.log("Selected Item ID:", item._id);
    setSelectedBook(item);
    setUpdateBook({ ...item });
  };

  const filteredData = data.filter((book) =>
    [book.bookName, book.author, book.category, book.publisher]
      .some(field => field.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
            <th>Reason to Remove</th>
            
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item._id} onClick={() => handleRowClick(item)}>
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
              <td style={{color:"red"}}>{item.other}</td>
            
            </tr>
          ))}
        </tbody>
      </table>

      {selectedBook && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Book</h2>
            <form>
              <div className="row1">
                <label>Book Title:</label>
                <input type="text" name="bookName" value={updateBook.bookName} onChange={handleInputChange} />
                <label>Classification Number:</label>
                <input type="text" name="bookclassificationNum" value={updateBook.bookclassificationNum} onChange={handleInputChange} />
              </div>
              <div className="row1">
                <label>Author:</label>
                <input type="text" name="author" value={updateBook.author} onChange={handleInputChange} />
                <label>Entry Date:</label>
                <input type="date" name="entryDate" value={updateBook.entryDate} onChange={handleInputChange} />
              </div>
              <div className="row1">
                <label>Category:</label>
                <input type="text" name="category" value={updateBook.category} onChange={handleInputChange} />
                <label>Publisher:</label>
                <input type="text" name="publisher" value={updateBook.publisher} onChange={handleInputChange} />
              </div>
              <div className="row1">
                <label>Date of Publication:</label>
                <input type="date" name="publicationDate" value={updateBook.publicationDate} onChange={handleInputChange} />
                <label>Total Pages:</label>
                <input type="number" name="totalPages" value={updateBook.totalPages} onChange={handleInputChange} />
              </div>
              <div className="row1">
                <label>Price:</label>
                <input type="number" name="price" value={updateBook.price} onChange={handleInputChange} />
                <label>Donation Medium:</label>
                <input type="text" name="donationMedium" value={updateBook.donationMedium} onChange={handleInputChange} />
              </div>
              <div className="row1">
                <label>Removed Date:</label>
                <input type="date" name="removeDate" value={updateBook.removeDate} onChange={handleInputChange} />
                <label>Reason To Remove:</label>
                <input type="text" name="other" value={updateBook.other} onChange={handleInputChange} />
              </div>
              

              <button type="button" onClick={handleUpdateBook}>
                Save
              </button>
              <button type="button" onClick={handleDeleteBook}>
                Delete
              </button>
              <button type="button" onClick={() => setSelectedBook(null)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookTable;
