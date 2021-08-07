import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

// bring in props
const Register = (props) => {
  // declare and destructure authContext
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  // declare and destructure component level state
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = user;

  // if user is signed in, go to homepage
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    // if errors, alert user and clear errors
    if (error === 'Email already exists') {
      alert(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  // store user input on change
  const onChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  // register user with input object on form submit
  const onSubmit = (e) => {
    e.preventDefault();
    register({
      name,
      email,
      password,
    });
  };

  return (
    // materialize CSS form
    <div className='container form-container'>
      <div className='row'>
        <form className='col s6' onSubmit={onSubmit}>
          <div className='row'>
            <div className='input-field col s9 offset-s8'>
              <input
                id='name'
                type='text'
                className='validate'
                onChange={onChange}
                required
              />
              <label htmlFor='user-name'>Username</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s9 offset-s8'>
              <input
                id='email'
                type='email'
                className='validate'
                onChange={onChange}
                required
              />
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
              />
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          <div className='row'>
            <button
              className='btn waves-effect waves-light red lighten-2 col s9 m5 offset-s8 offset-m10'
              type='submit'
              name='action'
            >
              Register
              <i className='material-icons right'>send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
