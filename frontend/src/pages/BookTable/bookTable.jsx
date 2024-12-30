import React ,{useState, useEffect} from 'react';
import './bookTable.css'
import axios from 'axios';


const BookTable = () => {
  const [data,setData]=useState([]);
  const [error, setError] = useState('');

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

//if (loading) return <div>Loading...</div>;
//if (error) return <div>Error: {error}</div>;

  return (
    <div className='bookDisplay'>
      <table>
        <tr>
            <th>ID</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Category</th>
            <th>Status</th>
        </tr>
        <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.bookID}</td>
          <td>{item.bookName}</td>
          <td>{item.author}</td>
          <td>{item.publisher}</td>
          <td>{item.category}</td>
          <td>{item.status}</td>
        </tr>
      ))}
</tbody>
      </table>
    </div>
  );
};

export default BookTable;