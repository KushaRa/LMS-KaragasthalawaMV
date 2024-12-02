import React from 'react';
import NavBar from '../components/navBar'; 
import './Home.css';

const Home = () => {
  return (
    <>
    <NavBar/>
    <div className='home'>        
      <div className='buttonSection'>
        <span>Add/Issue/Return Books</span>
        <button className='AddBook'>Add Book</button>
        <button className='IssueBook'>Issue Book</button>
        <button className='ReturnBook'>Return Book</button>
      </div>

      <div className='summaryTable'>
        <span>This is summary table</span>
      </div>
      
    </div>
    </>
  );
};

export default Home;