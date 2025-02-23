import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import lmslogo from "../../assets/LMS.png";

import {  UserButton } from '@clerk/clerk-react'


const NavBar = () => {
  return (
    <div className='navB'>
        <nav className='ord1'>
        <div className='logoN'>LMS</div>
            <ul>            
                <li style={{marginTop:"15px"}}><Link to="/">Home</Link></li>
                <li style={{marginTop:"15px"}}><Link to="/dashboard">Dashboard</Link></li>
                <li style={{marginTop:"15px"}}><Link to="/members">Members</Link></li>
                <li style={{marginTop:"15px"}}><Link to="/members">About Us</Link></li>
                <li><button><UserButton /></button></li>
            </ul>
        </nav>
      
    </div>
  );
};

export default NavBar;