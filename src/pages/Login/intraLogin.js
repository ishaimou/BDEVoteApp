import React, { Component } from "react";
import axios from "axios";
import authService from "../../services/Auth";
import { Redirect } from "react-router-dom";
import { api } from "../../config";

export default class intraLogin extends Component {
  get = code => {
    let body = JSON.stringify({
      code: code
    });
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    axios
      .post(api + "login/", body, config)
      .then(e => {
        localStorage.setItem("access", e.data.access);
        window.location.replace("/");
      })
      .catch(e => console.log(e.response));
  };
  render() {
    if (authService.isAuthenticated()) return <Redirect to="/" />;
    const url = new URL(window.location.href);
    var code = url.searchParams.get("code");
    if (code) this.get(code);
    return (
      <div id="container">
        <div class="loader">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    );
  }
}
