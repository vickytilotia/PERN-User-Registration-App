import React, { Fragment, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// components 
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App">
      <Fragment>
        <Router>
          <div className="container">
            <Routes>
              {/* https://www.youtube.com/watch?v=cjqfF5hyZFg&list=PPSV */} contiue from here.....
              <Route exact path="/login" element={<Login/>} />
              <Route exact path="/register" element={ <Register/>} />
              <Route exact path="/dashboard" element={ <Dashboard/>} />
            </Routes>
          </div>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;


