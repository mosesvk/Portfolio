import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Sidebar from './components/Sidebar/Sidebar'
// import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home'
import './App.css';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
