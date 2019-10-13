
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Login from '../src/pages/Login';
import Dashboard from '../src/pages/Dashboard';
import New from '../src/pages/New';

export default function Routes(){
  return (
    <BrowserRouter>
    <Switch>
      <Route  path="/"  exact component={Login}/>
      <Route  path="/dashboard"   component={Dashboard}/>
      <Route  path="/new"  exact component={New}/>
    </Switch>
    </BrowserRouter>
  )
}