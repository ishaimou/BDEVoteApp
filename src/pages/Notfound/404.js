import React, { Component } from "react";
import "./404.css";
import img from "./404.gif";
export default class NotFound extends Component {
  render() {
    return (
      <div id="error">
        <img src={img} alt="" />
      </div>
    );
  }
}
