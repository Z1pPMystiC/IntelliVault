import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import LogIn from './components/pages/Login';
import SignUp from './components/pages/Signup';

import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/log-in' Component={LogIn} />
        <Route path='/sign-up' Component={SignUp} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
