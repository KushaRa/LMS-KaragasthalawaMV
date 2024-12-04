import React from 'react';
import './navBar.css';

const NavBar = () => {
  return (
    <div className='navB'>
        <nav className='ord1'>
        <div className='logoN'>LMS</div>
            <ul>            
            <li></li>  
                <li>Dashboard</li>
                <li>Books</li>
                <li>Members</li>
                <li>About Us</li>
                <li><button>Logout</button></li>

            </ul>
        </nav>
      
    </div>
  );
};

export default NavBar;