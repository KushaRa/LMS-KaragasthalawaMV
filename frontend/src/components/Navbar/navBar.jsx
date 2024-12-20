import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
  return (
    <div className='navB'>
        <nav className='ord1'>
        <div className='logoN'>LMS</div>
            <ul>            
            <li></li>  
                <li><Link to="/home">Dashboard</Link></li>
                <li>Books</li>
                <li><Link to="/members">Members</Link></li>
                <li>About Us</li>
                <li><button>Logout</button></li>

            </ul>
        </nav>
      
    </div>
  );
};

export default NavBar;