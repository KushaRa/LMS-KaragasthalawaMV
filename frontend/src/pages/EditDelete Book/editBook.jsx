import React ,{useState, useEffect} from 'react';
import './bookTable.css'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import BookCard from '../EditDelete Book/editBook';


const BookTable = () => {
  const [data,setData]=useState([]);
  const [error, setError] = useState('');

  const [modal, modalDetails] = useState(null);

 useEffect (()=>{
  const fetchData = async() =>{

  try{
    const response =await axios.get('http://localhost:5000/api/display-book');
    setData(response.data);
    
  }catch(error){
    setError(error.message);
  }
 };
 fetchData();
},[]);

const bookOpen = (item) =>{
  modalDetails(item);
}
const closeModal = () => {
  modalDetails(null); // Close the modal
};
//if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;


  return (
    <div className='bookDisplay'>
      <table>
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
            <th>Other</th>
            <th>Status</th>
        </tr>
        <tbody>
      {data.map((item, index) => (
        <tr key={index} onClick={() =>bookOpen(item)}><Link></Link>
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
          <td>{item.other}</td>       
          <td>{item.status}</td>
        </tr>
      ))}
</tbody>
      </table>
 {/* Modal */}
      {modal && (
        <div className="model">
        <div className="overlay">
            <div className="content">
                <h2 stlye={{justifyContent: 'space-between'}}>{modal.bookName} <button onClick={closeModal}>Close</button></h2>
                <p><b>Book ID:</b> {modal.bookID}</p>
                <p><b>Author:</b> {modal.author}</p>
                <p><b>Publisher:</b> {modal.category}</p>
                <p><b>Book Cla. Number:</b> {modal.bookclassificationNum}</p>
                <p><b>Entry Date:</b> {modal.entryDate}</p>
                <p><b>Publisher:</b> {modal.publisher}</p>
                <p><b>Book ID:</b> {modal.publicationDate}</p>
                <p><b>Price: Rs.</b>{modal.price}</p>
                <p><b>Total Pages:</b> {modal.totalPages}</p>
                <p><b>Donation Medium:</b> {modal.donationMedium}</p>
                <p><b>Remove Data:</b> {modal.removeDate}</p>
                <p><b>Other:</b> {modal.other}</p>           
                               
                {/* Add more details as needed */}
                
                </div>    
            </div>
  </div>
      )}


    </div>
  );
};

export default BookTable;