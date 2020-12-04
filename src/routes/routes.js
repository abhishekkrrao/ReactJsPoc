import React,{ Component } from 'react'
import { Login,Signup,Home,Joblist } from '../screens/index.js'
import config from '../firebaseconfig/firebaseconfig'
import { BrowserRouter as Router,Switch,Route,Link,Redirect } from "react-router-dom";
export default class Routes extends Component {
  constructor(props) { super(props); }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/signup" component={Signup} ></Route>
          <Route exact path="/home" component={Home} ></Route>
          <Route exact path="/joblist" component={Joblist} ></Route>
          <Route 
          exact 
          path="/" 
          component={Login}></Route>
        </Switch>
      </Router>
    );
  }
}
