import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import axiosWithAuth from './utils/axiosWlAuth';

import Header from './components/Header';
import Home from './components/Home'
import Login from './components/Login';
import Friends from './components/Friends';
import PrivateRoute from './components/PrivateRoute'

function App() {


  return (
    <div className="App">
     <Header/>
       <Switch>
          <Route exact path='/' component={Home}/>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
