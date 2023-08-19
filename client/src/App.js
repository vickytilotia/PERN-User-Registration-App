import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';

// components 
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Router>
          <div className="container">
            <Routes>
              <Route  path="/login/" render={props =><Login {...props} />} />
              <Route exact path="/register" render={props =><Register {...props} />} />
              <Route exact path="/dashboard" render={props =><Dashboard {...props} />} />
            </Routes>
          </div>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
