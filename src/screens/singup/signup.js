import React,{ Component } from 'react'
import './signup.css';
import logo from '../../logo.svg';
import Button from '../../componet/button'
import firebase from 'firebase/app';
import 'firebase/auth';
import Loader from '../../componet/loading'
class signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "",password: "",error: "",isloding: false }
  }

  onSubmit = () => {
    this.setState({isloding:true},()=>{});
    const { email,password } = this.state;
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email,password)
      .then((res) => {
        setTimeout(() => {
          this.props.history.push('/home');
          console.log('res ',res);
          this.setState({ isloding: false },() => { });
        },1500);
      })
      .catch((error) => {
        console.log('err ',error);
        this.setState({ error: error.message },() => { });
        setTimeout(() => {
          this.setState({ isloding: false },() => { });
        },1500);
      });
  };
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <p>
            Sign up
          </p>
        </header>

        <div className="container">


          {/* logo */}
          <img src={logo} className="App-logo" alt="logo" />

          {/* input fields  */}

          <div className="innerItem">
            <p className="errorMessage">{this.state.error}</p>
            {this.state.isloding && (<Loader></Loader>)}
            <input
              value={this.state.email}
              className="input"
              placeholder="Email *"
              onChange={(event) => { this.setState({ email: event.target.value }) }}>
            </input>
            <input
              value={this.state.password}
              className="input"
              placeholder="Password *"
              onChange={(event) => { this.setState({ password: event.target.value }) }}>
            </input>
          </div>

          {/* custom button */}

          <Button onPress={() => {
            console.log('dfgdsf');

            this.onSubmit()

          }} title="Submit" style={{
            button: {
              width: "200px",
              "backgroundColor": "#282c34",
              display: "block",
              margin: "auto",
              "borderRadius": "15px",
            },text: { color: "#fff",padding: "9px" }
          }}></Button>
          {/* custom button */}


          {/* for new user */}
          <p>Already Register</p>
          <Button onPress={() => {

            // this.props.history.push('/login');
            this.props.history.goBack();


          }} title="Log In" style={{
            button: {
              width: "200px",
              "backgroundColor": "#282c34",
              display: "block",
              margin: "auto",
              "borderRadius": "15px",
            },text: { color: "#fff",padding: "9px" }
          }}></Button>
        </div>
      </div>
    );
  }
  componentDidMount() { }
  launchApp = (routeName) => { }
}
export default signup;
