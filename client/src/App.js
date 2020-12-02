import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Signin from './components/pages/Signin';
import Register from './components/pages/Register';
import Game from './components/pages/Game';

import HistoryState from './context/history/HistoryState';
import ImagesState from './context/images/ImagesState';
import './App.css';

const App = () => {
  return (
    <HistoryState>
      <ImagesState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='Routes'>
              <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/game' component={Game} />
              </Switch>
            </div>
          </div>
        </Router>
      </ImagesState>
    </HistoryState>
  );
};

export default App;
