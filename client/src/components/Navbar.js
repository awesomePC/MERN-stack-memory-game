import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='#' className='brand-logo'>
          Memory
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='#'>Register</a>
          </li>
          <li>
            <a href='#'>Sign In</a>
          </li>
          <li>
            <a href='#'>Sign Out</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
