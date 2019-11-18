import React, { Component } from "react";
import "./Login.css";
import authService from "../../services/Auth";
import { Redirect } from "react-router-dom";
export default class Login extends Component {
  onClick = () => {
    window.location.replace(
      "https://api.intra.42.fr/oauth/authorize?client_id=f6c3ccabc8adee0835a1092006c6e62a85838698ef1e351c08de2202fdbf9d68&redirect_uri=http://localhost:3000/intralogin&response_type=code&scope=public&state=08f563b5472cb42d6b55f796cd9301da"
    );
  };
  render() {
    if (authService.isAuthenticated()) return <Redirect to="/" />;
    return (
      <div id="login-page">
        <div id="login-page-form">
          <h1>1337 Voting</h1>
          <button onClick={this.onClick}>Login</button>
        </div>
      </div>
    );
  }
}
