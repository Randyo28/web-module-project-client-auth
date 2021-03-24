import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home'
import Login from './components/Login';
import Friends from './components/Friends';
import NewFriend from './components/NewFriend';
import PrivateRoute from './components/PrivateRoute'

export {Header, Home, Friends, PrivateRoute, Login, NewFriend }

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
