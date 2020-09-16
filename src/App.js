import React from 'react';
import './components/reset.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import GiveClothes from './components/GiveClothes/GiveClothes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/logout' component={Logout} />
        <Route path='/give-clothes' component={GiveClothes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
