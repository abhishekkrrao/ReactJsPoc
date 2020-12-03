import React, { Component, useState } from 'react'
import './login.css';
import logo from '../../logo.svg';
import Button from '../../componet/button'
import Signup from '../singup/signup';
export default class login extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <p>
            Login
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
            console.log('dfgdsf');
            this.props.history.push('home')
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
          <p>Not Yet Register</p>
          <Button onPress={() => {

        this.props.history.push('/signup');


          }} title="Sign Up" style={{
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
