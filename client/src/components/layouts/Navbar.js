import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogOut = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li>Hello, {user && user.name}!</li>
      <li onClick={onLogOut}>
        <Link to='/signin'>Sign Out</Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/signin'>Sign In</Link>
      </li>
    </Fragment>
  );

  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='/' className='brand-logo'>
          <i className='material-icons'>memory</i>
          Memory
        </a>
        <ul id='nav-mobile' className='right'>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
