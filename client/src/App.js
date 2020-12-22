import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Signin from './components/pages/Signin';
import Register from './components/pages/Register';
import Game from './components/pages/Game';
import PrivateRoute from './components/routing/privateRoute';

import HistoryState from './context/history/HistoryState';
import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <HistoryState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='Routes'>
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/register' component={Register} />
                <PrivateRoute exact path='/game' component={Game} />
              </Switch>
            </div>
          </div>
        </Router>
      </HistoryState>
    </AuthState>
  );
};

export default App;
