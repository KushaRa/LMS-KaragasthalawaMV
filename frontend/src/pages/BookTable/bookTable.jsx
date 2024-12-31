import React ,{useState, useEffect} from 'react';
import './bookTable.css'
import axios from 'axios';
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
        <tr key={index} onClick={() =>bookOpen(item)}>
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
                <h2>{modal.bookName}</h2>
                <p>Author: {modal.author}</p>
                <p>Publisher: {modal.publisher}</p>
                <p>Price: {modal.price}</p>
                {/* Add more details as needed */}
                <button onClick={closeModal}>Close</button>
                </div>    
            </div>
  </div>
      )}


    </div>
  );
};

export default BookTable;