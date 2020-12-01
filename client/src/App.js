import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Signin from './components/pages/Signin';
import Register from './components/pages/Register';

import HistoryState from './context/history/HistoryState';
import './App.css';

const App = () => {
  return (
    <HistoryState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='Routes'>
            <Switch>
              <Route exact path='/home' component={Home} />
              <Route exact path='/signin' component={Signin} />
              <Route exact path='/register' component={Register} />
            </Switch>
          </div>
        </div>
      </Router>
    </HistoryState>
  );
};

export default App;
