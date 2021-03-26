import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import axiosWithAuth from './utils/axiosWlAuth';

import { Header, Home, Friends, PrivateRoute, Login, NewFriend } from './index'

function App() {

  return (
    <div className="App">
     <Header/>
       <Switch>
          <Route path='/home' component={Home}/>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path='/login' component={Login} />
          <Route path='/newFriend' component={NewFriend} />
          <Route component={Home} />
          <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
