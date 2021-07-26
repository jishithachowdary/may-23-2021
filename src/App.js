import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Listusers from './Listusers';
import Createuser from './Createuser';
import Edituser from './Edituser';
import Profile from './Profile';
import Editprofile from './Editprofile';

export default function App() {
  return (
    <BrowserRouter>
      <NavLink activeclass="active" to="/">
        Dashboard
      </NavLink>
      <NavLink activeclass="active" to="/listusers">
        Listusers
      </NavLink>
      <NavLink activeclass="active" to="/createuser">
        Createuser
      </NavLink>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/listusers" component={Listusers} />
        <Route exact path="/createuser" component={Createuser} />
        <Route exact path="/edit/:id" component={Edituser} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/editprofile/:id" component={Editprofile} />
      </Switch>
    </BrowserRouter>
  );
}
