import React from 'react';

const Signin = () => {
  return (
    <div className='container'>
      <div className='row'>
        <form className='col s6'>
          <div className='row'>
            <div className='input-field col s9 offset-s8'>
              <input id='user-name' type='text' className='validate'></input>
              <label htmlFor='user-name'>Username</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s9 offset-s8'>
              <input id='password' type='password' className='validate'></input>
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          <div className='row'>
            <button
              className='btn waves-effect waves-light red lighten-2 col s5 offset-s10'
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
