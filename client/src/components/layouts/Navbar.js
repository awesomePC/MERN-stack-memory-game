import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='/home' className='brand-logo'>
          <i className='material-icons'>memory</i>
          Memory
        </a>
        <ul id='nav-mobile' className='right'>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/signin'>Sign In</Link>
          </li>
          <li>
            <Link to='/signin'>Sign Out</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
