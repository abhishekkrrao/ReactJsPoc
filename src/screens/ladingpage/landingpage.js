import React, { Component, useState } from 'react'
import logo from '../../logo.svg';
import './style.css'
import Button from '../../componet/button'
export default class landingpage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <p>Home</p>
                </header>

                <div className="container">
                    {/* logo */}
                    <img src={logo} className="App-logo" alt="logo" />
                     <p>I am in home Page</p>
                </div>
            </div>
        );
    }
    componentDidMount() { }
  
}
