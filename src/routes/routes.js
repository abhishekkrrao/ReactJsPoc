import React,{ Component,useContext } from 'react'
import { Login,Signup,Home } from '../screens/index.js'
import config from '../firebaseconfig/firebaseconfig'
import withAuth from '../Auth/withAuth'
import { BrowserRouter as Router,Switch,Route,Link,Redirect } from "react-router-dom";
export default class Routes extends React.Component {
  constructor(props) { super(props); }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/signup" component={Signup} ></Route>
          <Route 
          exact 
          path="/" 
          component={Login}></Route>
        </Switch>
      </Router>
    );
  }
}
