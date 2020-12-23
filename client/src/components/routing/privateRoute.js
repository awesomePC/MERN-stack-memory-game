import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // declare authcontext
  const authContext = useContext(AuthContext);

  // destructure variables
  const { isAuthenticated, loading } = authContext;

  // if user authenticated, allow access to private routes
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated && !loading ? (
          <Redirect to='/signin' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
