import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  REGISTER_SUCCESS,
} from '../types';

const AuthState = (props) => {
  // declare inicial state
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  // declare state/dispatch with useReducer hook
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    // check localstorage has a token, setAUthToken if so
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    // declare response from backend, dispatch data to USER_LOADED
    try {
      const res = await axios.get('/api/auth');

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
      // dispatch error msg to AUTH_ERROR
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  // Register User
  const register = async (formData) => {
    // declare config variable with header
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    // declare response from backend, post user data
    try {
      const res = await axios.post('/api/users', formData, config);

      // dispatch data to reducer
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      // load user
      loadUser();
      // dispatch error if found
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg,
      });
    }
  };

  // Login User
  const login = async (formData) => {
    // declare config variable with header
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };

    // declare response from post, dispatch to reducer
    try {
      const res = await axios.post('/api/auth', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      loadUser();
      // dispatch error if found
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.msg,
      });
    }
  };

  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  // Clear Errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    // return all variables and functions to provider
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        clearErrors,
        loadUser,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
