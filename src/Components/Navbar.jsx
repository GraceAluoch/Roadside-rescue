import React from 'react';
import { Link }  from 'react-router-dom';
import './Navbar.css';

export default function Nav() {
    return(
      <header>
        <div className='logo'>
          <Link>
          <img src="rescue-logo.png" alt="company logo" />
          </Link>
         
        </div>
        
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </nav>
      </header>
   
    );
}


