import React, { Component } from 'react'
import logo from '../logo.svg';
import { login, signup,landingpage } from '../screens/index.js'
// import { BrowserRouter, Route,Switch} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={login}>
          </Route>
          <Route exact path="/signup" component={signup}></Route>
          <Route exact path="/login" component={login}></Route>
          <Route exact path="/login" component={login}></Route>
          <Route exact path="/home" component={landingpage}></Route>
        </Switch>
      </Router>
    );
  }
}
