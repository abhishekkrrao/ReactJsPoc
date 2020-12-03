import React, { Component } from 'react'
import './signup.css';
import logo from '../../logo.svg';
import Button from '../../componet/button'
class signup extends React.Component {
  constructor(props) {
    super(props)
  }
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
            <input className="input" placeholder="Email *"></input>
            <input className="input" placeholder="Password *"></input>
          </div>

          {/* custom button */}

          <Button onPress={() => {
            console.log('dfgdsf')
          }} title="Submit" style={{
            button: {
              width: "200px",
              "backgroundColor": "#282c34",
              display: "block",
              margin: "auto",
              "borderRadius": "15px",
            }, text: { color: "#fff", padding: "9px" }
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
            }, text: { color: "#fff", padding: "9px" }
          }}></Button>
        </div>
      </div>
    );
  }
  componentDidMount() { }
  launchApp = (routeName) => { }
}
export default signup;
