// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;








import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';

const App = () => {
  return (
      <div>
    <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/forgot-password">Forgot Password</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
         
          <Route path="/">
            <Home />
          </Route>
        </Routes>
    </Router>
      </div>
  );
};

export default App;
