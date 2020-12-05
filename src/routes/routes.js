import React,{ Component } from 'react'
import { Login,Signup,Home,Joblist } from '../screens/index.js'
import { BrowserRouter as Router,Switch,Route,Link,Redirect } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/auth';
const PrivateRoute = ({ component: Component,authed,...rest }) => {
  console.log("authed ",authed)
  return (
    <Route
      {...rest}
      render={(props) => 
        
        authed === true ? <Component {...props} /> : <Redirect to={{ pathname: '/login',state: { from: props.location } }} />}
    />
  )
}
export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = { authed: false }
  }
  componentWillMount() {
    let auth = firebase.auth();
    auth.onAuthStateChanged((user) => {
      user != null ? this.setState({ authed: true },() => { }) : this.setState({ authed: false },() => { });
    });
  }
  componentDidMount() {
    let auth = firebase.auth();
    auth.onAuthStateChanged((user) => {
      user != null ? this.setState({ authed: true },() => { }) : this.setState({ authed: false },() => { });
    });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup} ></Route>
          <Route exact path="/home" component={Home} ></Route>
          <Route exact path="/joblist" component={Joblist} ></Route>
          {/* <Route
            exact
            path="/"
            component={Home}></Route> */}
          <PrivateRoute exact authed={this.state.authed} path='/' component={Home} />
        </Switch>
      </Router>
    );
  }
}
