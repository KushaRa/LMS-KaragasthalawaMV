import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

import {  UserButton } from '@clerk/clerk-react'


const NavBar = () => {
  return (
    <div className='navB'>
        <nav className='ord1'>
        <div className='logoN'>LMS</div>
            <ul>            
            <li></li>  
                <li><Link to="/home">Dashboard</Link></li>
                <li><Link to="/dashboard"></Link>Books</li>
                <li><Link to="/members">Members</Link></li>
                <li>About Us</li>
                {/* <li><button>Logout</button></li> */}
                <li><button><UserButton /></button></li>


            </ul>
        </nav>
      
    </div>
  );
};

export default NavBar;