import React, { Component } from "react";
import NavBar from "../../components/navBar/navBar";
import CardCarousel from "../../containers/cardsCarousel/cardCarousel";
import CountDown from "../../containers/countDown/countDown";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div id="home-page">
        <NavBar />
        <CountDown />
        <CardCarousel />
      </div>
    );
  }
}
