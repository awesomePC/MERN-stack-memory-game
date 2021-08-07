import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

// bring in props, declare authContext and destructure
const Signin = (props) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  // declare state and desstructure
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  useEffect(() => {
    // if user is signed in, go to homepage
    if (isAuthenticated) {
      props.history.push('/');
    }

    // send err msg if user not recognized
    if (error === 'invalid credentials') {
      alert(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  // store user input on change
  const onChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  // call login with user info on form submit
  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    // materializeCSS form
    <div className='container form-container'>
      <div className='row'>
        <form className='col s6' autoComplete='off' onSubmit={onSubmit}>
          <div className='row'>
            <div className='input-field col s9 offset-s8'>
              <input
                id='email'
                type='text'
                className='validate'
                onChange={onChange}
                required
              ></input>
              <label htmlFor='email'>Email</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s9 offset-s8'>
              <input
                id='password'
                type='password'
                className='validate'
                onChange={onChange}
                required
              ></input>
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          <div className='row'>
            <button
              className='btn waves-effect waves-light red lighten-2 col s9 m5 offset-s8 offset-m10'
              type='submit'
              name='action'
            >
              Sign In
              <i className='material-icons right'>send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
