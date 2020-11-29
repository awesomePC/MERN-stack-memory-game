import React from 'react';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Signin />
    </div>
  );
};

export default App;
